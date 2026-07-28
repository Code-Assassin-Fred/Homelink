import { Metadata } from "next";
import LegalPageLayout from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Home Link Africa collects, stores, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your personal information."
      badge="Legal"
    >
      <p className="text-sm text-charcoal mb-4">Last updated: July 2026</p>

      <h2 className="font-heading font-bold text-2xl text-forest mt-10 mb-4">1. Introduction</h2>
      <p className="text-base leading-relaxed mb-6">
        Home Link Africa (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your personal
        information. This Privacy Policy explains how we collect, use, store, and protect information
        when you use our website and services.
      </p>

      <h2 className="font-heading font-bold text-2xl text-forest mt-10 mb-4">2. Information We Collect</h2>
      <p className="text-base leading-relaxed mb-4">We may collect the following information:</p>
      <ul className="list-disc pl-6 space-y-2 mb-6 text-base">
        <li>Full name and contact details (email, phone number)</li>
        <li>Country of residence</li>
        <li>Service requirements and project details</li>
        <li>Communication records (emails, WhatsApp messages, call notes)</li>
        <li>Payment and billing information</li>
        <li>Any information voluntarily provided during consultations</li>
      </ul>

      <h2 className="font-heading font-bold text-2xl text-forest mt-10 mb-4">3. How We Use Your Information</h2>
      <ul className="list-disc pl-6 space-y-2 mb-6 text-base">
        <li>To provide and manage the services you request</li>
        <li>To communicate with you regarding your projects and tasks</li>
        <li>To send progress updates, reports, and documentation</li>
        <li>To improve our services and client experience</li>
        <li>To comply with legal obligations</li>
      </ul>

      <h2 className="font-heading font-bold text-2xl text-forest mt-10 mb-4">4. Data Storage & Security</h2>
      <p className="text-base leading-relaxed mb-6">
        We take reasonable measures to protect your personal information from unauthorised access,
        loss, or misuse. Data is stored securely and access is limited to authorised personnel only.
      </p>

      <h2 className="font-heading font-bold text-2xl text-forest mt-10 mb-4">5. Data Sharing</h2>
      <p className="text-base leading-relaxed mb-6">
        We do not sell or share your personal information with third parties except where necessary
        to provide our services (e.g., coordinating with licensed professionals at your request) or
        as required by law.
      </p>

      <h2 className="font-heading font-bold text-2xl text-forest mt-10 mb-4">6. Your Rights</h2>
      <p className="text-base leading-relaxed mb-6">
        You have the right to access, correct, or request deletion of your personal information.
        To exercise these rights, please contact us at info@homelinkafrica.com.
      </p>

      <h2 className="font-heading font-bold text-2xl text-forest mt-10 mb-4">7. Contact</h2>
      <p className="text-base leading-relaxed mb-6">
        For questions or concerns about this Privacy Policy, please contact:<br />
        <strong>Email:</strong> info@homelinkafrica.com<br />
        <strong>Phone:</strong> +254 700 000 000
      </p>
    </LegalPageLayout>
  );
}
