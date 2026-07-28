import Hero from "@/components/home/hero/Hero";
import TrustBanner from "@/components/home/trust-banner/TrustBanner";
import ServicesOverview from "@/components/home/services-overview/ServicesOverview";
import HowItWorks from "@/components/home/how-it-works/HowItWorks";
import WhyChooseUs from "@/components/home/why-choose-us/WhyChooseUs";
import MeetFounder from "@/components/home/meet-founder/MeetFounder";
import OurCommitment from "@/components/home/our-commitment/OurCommitment";
import Testimonials from "@/components/home/testimonials/Testimonials";
import FAQPreview from "@/components/home/faq-preview/FAQPreview";
import FinalCTA from "@/components/home/final-cta/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBanner />
      <ServicesOverview />
      <HowItWorks />
      <WhyChooseUs />
      <MeetFounder />
      <OurCommitment />
      <Testimonials />
      <FAQPreview />
      <FinalCTA />
    </>
  );
}
