import { Metadata } from "next";
import LegalPageLayout from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions governing the use of Home Link Africa's services.",
};

export default function TermsConditionsPage() {
  return (
    <LegalPageLayout
      title="Terms & Conditions"
      subtitle="The terms governing our services and your engagement with Home Link Africa."
      badge="Legal"
    >
      <p className="text-sm text-charcoal mb-4">Last updated: July 2026</p>

      <h2 className="font-heading font-bold text-2xl text-forest mt-10 mb-4">1. Introduction</h2>
      <p className="text-base leading-relaxed mb-6">
        These Terms and Conditions (&quot;Terms&quot;) govern your use of the Home Link Africa website
        and services. By engaging our services, you agree to be bound by these Terms.
      </p>

      <h2 className="font-heading font-bold text-2xl text-forest mt-10 mb-4">2. Services</h2>
      <p className="text-base leading-relaxed mb-6">
        Home Link Africa provides on-the-ground coordination, representation, and support services
        in Kenya for clients living abroad. The specific scope of each engagement is agreed upon
        during the consultation process and documented in a service plan.
      </p>

      <h2 className="font-heading font-bold text-2xl text-forest mt-10 mb-4">3. Client Responsibilities</h2>
      <ul className="list-disc pl-6 space-y-2 mb-6 text-base">
        <li>Provide accurate and complete information relevant to the service</li>
        <li>Respond to communications in a timely manner</li>
        <li>Make agreed payments as outlined in the service plan</li>
        <li>Inform us promptly of any changes to requirements or circumstances</li>
      </ul>

      <h2 className="font-heading font-bold text-2xl text-forest mt-10 mb-4">4. Payments</h2>
      <p className="text-base leading-relaxed mb-6">
        Payment terms are agreed upon before commencement of services. Payment schedules,
        methods, and amounts are clearly stated in your service plan. Late payments may result
        in service delays.
      </p>

      <h2 className="font-heading font-bold text-2xl text-forest mt-10 mb-4">5. Cancellations</h2>
      <p className="text-base leading-relaxed mb-6">
        Either party may cancel an engagement with reasonable notice. Cancellation terms,
        including any applicable fees, are outlined in your individual service plan.
      </p>

      <h2 className="font-heading font-bold text-2xl text-forest mt-10 mb-4">6. Limitation of Liability</h2>
      <p className="text-base leading-relaxed mb-6">
        Home Link Africa acts as a coordination and representation service. We are not liable for
        the actions or omissions of third parties (e.g., contractors, government officials, or
        service providers) beyond our reasonable control. Our liability is limited to the fees
        paid for the specific service in question.
      </p>

      <h2 className="font-heading font-bold text-2xl text-forest mt-10 mb-4">7. Confidentiality</h2>
      <p className="text-base leading-relaxed mb-6">
        Both parties agree to keep all information shared during the engagement confidential.
        Client information will not be disclosed to third parties without explicit consent,
        except as required by law.
      </p>

      <h2 className="font-heading font-bold text-2xl text-forest mt-10 mb-4">8. Governing Law</h2>
      <p className="text-base leading-relaxed mb-6">
        These Terms are governed by the laws of the Republic of Kenya. Any disputes arising
        from these Terms shall be resolved through good-faith negotiation or, if necessary,
        through the relevant courts in Kenya.
      </p>

      <h2 className="font-heading font-bold text-2xl text-forest mt-10 mb-4">9. Contact</h2>
      <p className="text-base leading-relaxed mb-6">
        For questions about these Terms, please contact:<br />
        <strong>Email:</strong> info@homelinkafrica.com<br />
        <strong>Phone:</strong> +254 700 000 000
      </p>
    </LegalPageLayout>
  );
}
