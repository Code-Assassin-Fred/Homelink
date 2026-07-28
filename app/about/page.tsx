import { Metadata } from "next";
import OurStory from "@/components/about/our-story/OurStory";
import MissionVision from "@/components/about/mission-vision/MissionVision";
import OurValues from "@/components/about/our-values/OurValues";
import Experience from "@/components/about/experience/Experience";
import OurCommitment from "@/components/home/our-commitment/OurCommitment";
import FinalCTA from "@/components/home/final-cta/FinalCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Home Link Africa's story, values, mission, and how our professional experience in banking and counselling psychology ensures your affairs in Kenya are managed with confidence.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner for Page */}
      <div className="bg-forest py-20 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
            About Us
          </h1>
          <p className="text-lime font-heading font-semibold text-lg sm:text-xl max-w-2xl mx-auto">
            Why you can trust Home Link Africa to represent your interests in Kenya.
          </p>
        </div>
        {/* Background visual detail */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1440 300" fill="none" preserveAspectRatio="xMidYMid slice">
            <line x1="0" y1="200" x2="1440" y2="50" stroke="#02AD7E" strokeWidth="2" />
          </svg>
        </div>
      </div>

      <OurStory />
      <MissionVision />
      <OurValues />
      <Experience />
      <OurCommitment />
      <FinalCTA />
    </>
  );
}
