'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SectionContainer from '../layouts/section-container';
import ViewContainer from '../layouts/view-container';
import { cn } from '@/lib/utils';

export function FooterSection() {
  const renderLinks = (category: string, links: string[]) => (
    <div className={`${category.toLowerCase()}-links-wrapper grid gap-2`}>
      <p className="text-sm font-medium">{category}</p>
      <ul className={`${category.toLowerCase()}-links-list grid gap-1`}>
        {links.map((option: string, index: number) => (
          <Link
            href="#"
            key={index}
            className="text-sm text-neutral-400 font-normal hover:text-neutral-500">
            {option}
          </Link>
        ))}
      </ul>
    </div>
  );

  return (
    <SectionContainer
      id="footer"
      className="border-t border-neutral-200 py-20 grid gap-24">
      <ViewContainer className="footer-top-layer-container flex flex-row items-start justify-between max-lg:flex-col">
        {/* Content for the left section of the footer */}
        <div className="company-cta-content-wrapper">
          <h2 className="leading-snug text-4xl font-semibold">
            Conscience AI FinTech Labs, is a technology enabling enterprise currently working in the
            investment Management Industry. All demonstrations and images shown are subject to copyright.
          </h2>
          <div className='my-12 flex flex-row items-center gap-6'>
            <div className="email-wrapper">
              <h4 className="text-lg">Email Address</h4>
              <p className="text-neutral-500">
                {"hello@conscienceai.in"}
              </p>
            </div>
            <div className="location-wrapper">
              <h4 className="text-lg">INDIA Office</h4>
              <p className="text-neutral-500">
                {"Freedom Hall, JV, New Delhi 110043"}
              </p>
            </div>
          </div>
          <p className="text-neutral-500 text-xs mt-2">
            This material is intended for information purposes only, and does not constitute investment advice, a recommendation or an offer or solicitation to purchase or sell any securities, funds or strategies to any person in any jurisdiction in which an offer, solicitation, purchase or sale would be unlawful under the securities laws of such jurisdiction. The opinions expressed are subject to change without notice. Reliance upon information in this material is at the sole discretion of the reader. Investing involves risks.
            The Investing in securities involves risks, including the potential loss of money, and past performance does not guarantee future results. Historical returns, expected returns, and probability projections are provided for informational and illustrative purposes, and may not reflect actual future performance. Nothing on this web site should be construed as personalized investment advice, which can only be provided in one-on-one communications.
          </p>
        </div>

      </ViewContainer>

      {/* Bottom section of the footer */}
      <ViewContainer className="footer-bottom-layer-container flex flex-row items-center justify-between border-t border-t-neutral-100 pt-8 select-none cursor-default">
        <div className="logo-wrapper">
          <Image src="/logo.png" alt="logo" width={120} height={60} className='logo' />
        </div>
        <p className="select-none cursor-default text-xs font-medium text-neutral-400 grayscale hover:grayscale-0">
          {'Redesigned with ❤️ by Shristi Gupta'}
        </p>
      </ViewContainer>
    </SectionContainer>
  );
}
