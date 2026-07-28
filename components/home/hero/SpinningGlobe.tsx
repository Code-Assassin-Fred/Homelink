"use client";

import { useEffect, useRef } from "react";

export default function SpinningGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.src = "/sphere.png";

    let animationFrameId: number;

    img.onload = () => {
      const W = canvas.width;
      const H = canvas.height;

      // Create an offscreen canvas to scale and read the source image pixels
      const offscreen = document.createElement("canvas");
      offscreen.width = W;
      offscreen.height = H;
      const oCtx = offscreen.getContext("2d");
      if (!oCtx) return;
      oCtx.drawImage(img, 0, 0, W, H);
      const srcData = oCtx.getImageData(0, 0, W, H).data;

      const dstImgData = ctx.createImageData(W, H);
      const dstData = dstImgData.data;

      // Center and Radius of the sphere in the scaled image
      // sphere.png is 1200x1200px, sphere itself is ~928px diameter.
      // So center is at (600, 600) and radius is ~464.
      const scale = W / 1200;
      const xc = 600 * scale;
      const yc = 600 * scale;
      const R = 464 * scale;

      // Precompute active pixels to speed up math inside animation loop
      interface ActivePixel {
        destOffset: number;
        x: number;
        y: number;
        z: number;
      }
      const pixels: ActivePixel[] = [];
      for (let y = 0; y < H; y++) {
        const dy = y - yc;
        for (let x = 0; x < W; x++) {
          const dx = x - xc;
          const d2 = dx * dx + dy * dy;
          const destOffset = (y * W + x) * 4;

          if (d2 <= R * R) {
            const z = Math.sqrt(R * R - d2);
            pixels.push({
              destOffset,
              x: dx,
              y: dy,
              z: z,
            });
          } else {
            dstData[destOffset + 3] = 0; // Transparent outside the sphere
          }
        }
      }

      let theta = 0;
      const speed = 0.007; // Rotation speed

      const animate = () => {
        const cos = Math.cos(theta);
        const sin = Math.sin(theta);

        // Clear destination data alpha channel
        for (let i = 0; i < dstData.length; i += 4) {
          dstData[i + 3] = 0;
        }

        for (let p = 0; p < pixels.length; p++) {
          const pix = pixels[p];
          const px = pix.x;
          const py = pix.y;
          const pz = pix.z;

          // Rotate target coordinate back to source
          // x_s = x * cos(theta) - z * sin(theta)
          // z_s = x * sin(theta) + z * cos(theta)
          let xs = px * cos - pz * sin;
          let zs = px * sin + pz * cos;

          // Mirror back hemisphere to front for a continuous loop
          if (zs < 0) {
            xs = -xs;
            zs = -zs;
          }

          // Convert back to source image coordinates
          const srcX = Math.min(W - 1, Math.max(0, Math.round(xs + xc)));
          const srcY = Math.min(H - 1, Math.max(0, Math.round(py + yc)));
          const srcOffset = (srcY * W + srcX) * 4;

          const dOff = pix.destOffset;
          dstData[dOff] = srcData[srcOffset];
          dstData[dOff + 1] = srcData[srcOffset + 1];
          dstData[dOff + 2] = srcData[srcOffset + 2];
          dstData[dOff + 3] = srcData[srcOffset + 3];
        }

        ctx.putImageData(dstImgData, 0, 0);

        theta += speed;
        animationFrameId = requestAnimationFrame(animate);
      };

      animate();
    };

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={480}
      height={480}
      className="w-full h-auto max-w-md drop-shadow-2xl aspect-square"
      style={{ display: "block", background: "transparent" }}
    />
  );
}
