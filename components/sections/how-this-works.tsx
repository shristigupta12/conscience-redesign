import Image from "next/image";
import SectionContainer from "../layouts/section-container";
import ViewContainer from "../layouts/view-container";

export default function HowThisWorks() {
  return (
    <SectionContainer id="how-this-works" className="max-md:pb-24">
      <ViewContainer>
        <h2 className="text-4xl font-semibold leading-snug text-center">How this Works?</h2>
        <p className="text-neutral-500 text-center mt-4">
          Conscience AI lets you build custom portfolios with few information <br />
          retrievals from clients/investors based on their Investment preferences.
        </p>
        <Image
          src="/mockup-flow.png"
          alt="mockup-image"
          width={800}
          height={400}
          className="block mx-auto mt-12 shadow-xl shadow-green-400/20 rounded-lg border"
        />
      </ViewContainer>
    </SectionContainer>
  )
}