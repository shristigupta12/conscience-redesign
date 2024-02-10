import PageContainer from "@/components/layouts/page-container";
import CTA from "@/components/sections/cta";
import HeroSection from "@/components/sections/hero";
import HowThisWorks from "@/components/sections/how-this-works";

export default function Page() {
  return <PageContainer id="solutions-page">
    <HeroSection />
    <HowThisWorks />
  </PageContainer>
}