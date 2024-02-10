"use client";
import Image from "next/image";
import SectionContainer from "../layouts/section-container";
import ViewContainer from "../layouts/view-container";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [tiltDegree, setTiltDegree] = useState<number>(30);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      // Decrease tilt degree based on scroll position
      const newTiltDegree = Math.max(0, 45 - scrollY * 0.1);
      setTiltDegree(newTiltDegree);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <SectionContainer id="hero" className="text-center py-40">
    <ViewContainer className="relative">
      <h1 className="font-semibold text-5xl tracking-tight text-white">
        Con<span className="text-green-400">science</span> AI lets advisors <br />
        deliver personalized portfolios <br />
        with our advanced platform.
      </h1>
      <div className="flex flex-row items-center mt-6 justify-center">
        <Button variant={'default'} size={"lg"}>
          Contact Support
        </Button>
      </div>
      <div className="bg-green-400 w-[200px] h-[200px] rounded-full absolute -top-6 left-[480px] blur-3xl opacity-30 animate-pulse" />
    </ViewContainer>
    <div
      className="hero-dashboard-image-wrapper mt-24"
      style={{
        perspective: '1000px',
      }}>
      <Image
        src={'/mockup-dashboard.png'}
        alt="dashboard-demo-image"
        width={'800'}
        height={'1000'}
        className="block mx-auto max-lg:w-full max-md:mt-12 shadow-xl shadow-green-400/20 rounded-lg border"
        style={{
          transform: `rotateX(${tiltDegree}deg)`,
          transition: 'transform 0.3s ease-out',
        }}
        priority
      />
    </div>
  </SectionContainer>
}