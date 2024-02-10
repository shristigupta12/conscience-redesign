import SectionContainer from "../layouts/section-container";
import { Button } from "../ui/button";

export default function CTA() {
  return <SectionContainer className="mt-24">
    <div className="cta-section text-neutral-800 w-[60%] rounded-xl border-2 border-neutral-200 shadow-inner bg-neutral-200 h-[360px] mx-auto flex flex-col gap-6 items-center justify-center p-12">
      <h3 className="text-center text-3xl leading-snug font-semibold">
        Voila! In minutes
        create your client&apos;s hyper-customised portfolios.
      </h3>
      <Button>Contact Us</Button>
    </div>
  </SectionContainer>
}