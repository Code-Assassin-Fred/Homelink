import { Metadata } from "next";
import LegalPageLayout from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Important disclaimers about the scope and limitations of Home Link Africa's services.",
};

export default function DisclaimerPage() {
  return (
    <LegalPageLayout
      title="Disclaimer"
      subtitle="Important information about the scope and limitations of our services."
      badge="Legal"
    >
      <p className="text-sm text-charcoal mb-4">Last updated: July 2026</p>

      <h2 className="font-heading font-bold text-2xl text-forest mt-10 mb-4">General Disclaimer</h2>
      <p className="text-base leading-relaxed mb-6">
        Home Link Africa provides coordination, representation, and support services for Kenyans
        living abroad. While we strive to deliver the highest standard of service, clients should
        be aware of the following important disclaimers.
      </p>

      <h2 className="font-heading font-bold text-2xl text-forest mt-10 mb-4">Financial Advice</h2>
      <div className="bg-offwhite border-l-4 border-tangerine rounded-xl p-6 mb-6">
        <p className="text-base leading-relaxed font-semibold text-forest">
          Home Link Africa does not provide regulated financial advice.
        </p>
        <p className="text-base leading-relaxed mt-2">
          We assist clients in understanding financial processes, organising documentation, and
          tracking expenses. For specialised financial advice, we refer clients to appropriately
          licensed financial professionals.
        </p>
      </div>

      <h2 className="font-heading font-bold text-2xl text-forest mt-10 mb-4">Legal Advice</h2>
      <div className="bg-offwhite border-l-4 border-tangerine rounded-xl p-6 mb-6">
        <p className="text-base leading-relaxed font-semibold text-forest">
          Home Link Africa does not provide legal advice.
        </p>
        <p className="text-base leading-relaxed mt-2">
          We help clients navigate administrative processes and coordinate with relevant offices.
          For legal matters, we connect clients with appropriately licensed legal practitioners.
        </p>
      </div>

      <h2 className="font-heading font-bold text-2xl text-forest mt-10 mb-4">Tax Advice</h2>
      <div className="bg-offwhite border-l-4 border-tangerine rounded-xl p-6 mb-6">
        <p className="text-base leading-relaxed font-semibold text-forest">
          Home Link Africa does not provide tax advice.
        </p>
        <p className="text-base leading-relaxed mt-2">
          For tax-related matters, we refer clients to appropriately licensed tax professionals
          who can provide specialist guidance.
        </p>
      </div>

      <h2 className="font-heading font-bold text-2xl text-forest mt-10 mb-4">Professional Referrals</h2>
      <p className="text-base leading-relaxed mb-6">
        Where specialist advice is required — whether financial, legal, or tax-related — Home Link
        Africa may refer clients to appropriately licensed professionals. Such referrals are made
        in good faith, and we do not accept liability for the advice or services provided by
        third-party professionals.
      </p>

      <h2 className="font-heading font-bold text-2xl text-forest mt-10 mb-4">Contact</h2>
      <p className="text-base leading-relaxed mb-6">
        For questions about this Disclaimer, please contact:<br />
        <strong>Email:</strong> info@homelinkafrica.com<br />
        <strong>Phone:</strong> +254 700 000 000
      </p>
    </LegalPageLayout>
  );
}
