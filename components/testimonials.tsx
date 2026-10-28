"use client";

import { useState } from "react";
import useMasonry from "@/utils/useMasonry";
import Image, { StaticImageData } from "next/image";
import TestimonialImg01 from "@/public/images/testimonial-01.jpg";
import TestimonialImg02 from "@/public/images/testimonial-02.jpg";
import TestimonialImg03 from "@/public/images/testimonial-03.jpg";
import TestimonialImg04 from "@/public/images/testimonial-04.jpg";
import TestimonialImg05 from "@/public/images/testimonial-05.jpg";
import TestimonialImg06 from "@/public/images/testimonial-06.jpg";
import TestimonialImg07 from "@/public/images/testimonial-07.jpg";
import TestimonialImg08 from "@/public/images/testimonial-08.jpg";
import TestimonialImg09 from "@/public/images/testimonial-09.jpg";
import ClientImg01 from "@/public/images/client-logo-01.svg";
import ClientImg02 from "@/public/images/client-logo-02.svg";
import ClientImg03 from "@/public/images/client-logo-03.svg";
import ClientImg04 from "@/public/images/client-logo-04.svg";
import ClientImg05 from "@/public/images/client-logo-05.svg";
import ClientImg06 from "@/public/images/client-logo-06.svg";
import ClientImg07 from "@/public/images/client-logo-07.svg";
import ClientImg08 from "@/public/images/client-logo-08.svg";
import ClientImg09 from "@/public/images/client-logo-09.svg";

const testimonials = [
  {
    img: TestimonialImg01,
    clientImg: ClientImg01,
    name: "Ellen De B.",
    company: "Global Relief Initiative",
    content:
      "Working with DigitalAbed LLC was a turning point for our web products. Their high-tier UI/UX designs transformed our digital campaigns into interactive systems, executing cross-border strategies seamlessly despite any geopolitical barriers.",
    categories:,
  },
  {
    img: TestimonialImg02,
    clientImg: ClientImg02,
    name: "Marcus K.",
    company: "FinTech DE",
    content:
      "An absolute powerhouse in design infrastructure. They delivered pixel-perfect Figma ecosystems that translated beautifully into Next.js code. Highly reliable, communicative, and professional.",
    categories:,
  },
  {
    img: TestimonialImg03,
    clientImg: ClientImg03,
    name: "Sarah L.",
    company: "Nexus Agency NL",
    content:
      "DigitalAbed handles corporate contracts through their US entity with flawless speed. Their digital marketing approaches and advanced technical SEO optimization doubled our organic reach within months.",
    categories:,
  },
  {
    img: TestimonialImg04,
    clientImg: ClientImg04,
    name: "Pavel M.",
    company: "Apex Tech Inc.",
    content:
      "The UI/UX design quality delivered by DigitalAbed LLC is outstanding. They built scalable interfaces with a world-class standard, boosting conversion rates across our corporate platform.",
    categories:,
  },
  {
    img: TestimonialImg05,
    clientImg: ClientImg05,
    name: "Miriam E.",
    company: "Sovereign Logistics IE",
    content:
      "Incredible technical adaptability. Their implementation of modern web systems and secure hosting practices provided our brand with solid operational continuity across European markets.",
    categories:,
  },
  {
    img: TestimonialImg06,
    clientImg: ClientImg06,
    name: "David V.",
    company: "Ecom Venture US",
    content:
      "Their AI-powered optimization tools streamlined our entire design delivery pipeline, bringing our product to market faster without losing a shred of interface detail. Tremendous expertise!",
    categories:,
  },
  {
    img: TestimonialImg07,
    clientImg: ClientImg07,
    name: "Jean-Pierre L.",
    company: "Alpha Crypto NL",
    content:
      "Highly responsive and technically sound. They restructured our application frameworks with secure connections, providing our end users with premium data speed and maximum protection.",
    categories:,
  },
  {
    img: TestimonialImg08,
    clientImg: ClientImg08,
    name: "Danielle K.",
    company: "SaaS Builders US",
    content:
      "DigitalAbed LLC proved that modern, premium product design requires deep engineering skills. Their layout optimization and crisp branding frameworks gave us exactly what we needed to stand out.",
    categories:,
  },
  {
    img: TestimonialImg09,
    clientImg: ClientImg09,
    name: "Jonathan P.",
    company: "Nordic Tech Solutions",
    content:
      "Outstanding interface architecture and reliable corporate execution. Their US-backed infrastructure makes international outsourcing smooth, legally compliant, and extremely efficient.",
    categories:,
  },
];

export default function Testimonials() {
  const masonryContainer = useMasonry();
  const [category, setCategory] = useState<number>(1);

  return (
    <section id="testimonials" className="relative border-t border-gray-800 bg-gray-900/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-emerald-200),var(--color-gray-50),var(--color-emerald-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Trusted by Innovators Worldwide
            </h2>
            <p className="text-lg text-indigo-200/65">
              We engineer premium digital experiences that empower decision-makers to scale businesses with high-tier security and absolute compliance.
            </p>
          </div>

          <div>
            {/* Buttons / Filters */}
            <div className="flex justify-center pb-12 max-md:hidden md:pb-16">
              <div className="relative inline-flex flex-wrap justify-center rounded-[1.25rem] bg-gray-800/40 p-1">
                {/* Button #1 */}
                <button
                  className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-emerald-200 ${category === 1 ? "relative bg-linear-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-emerald-500/0),--theme(--color-emerald-500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]" : "opacity-65 transition-opacity hover:opacity-90"}`}
                  aria-pressed={category === 1}
                  onClick={() => setCategory(1)}
                >
                  <svg
                    className={`fill-current ${category === 1 ? "text-emerald-500" : "text-gray-600"}`}
                    xmlns="http://w3.org"
                    width="16"
                    height="16"
                  >
                    <path d="M.062 10.003a1 1 0 0 1 1.947.455c-.019.08.01.152.078.19l5.83 3.333c.052.03.115.03.168 0l5.83-3.333a.163.163 0 0 0 .078-.188 1 1 0 0 1 1.947-.459 2.161 2.161 0 0 1-1.032 2.384l-5.83 3.331a2.168 2.168 0 0 1-2.154 0l-5.83-3.331a2.162 2.162 0 0 1-1.032-2.382Zm7.854-7.981-5.83 3.332a.17.17 0 0 0 0 .295l5.828 3.33c.054.031.118.031.17.002l5.83-3.333a.17.17 0 0 0 0-.294L8.085 2.023a.172.172 0 0 0-.17-.001ZM9.076.285l5.83 3.332c1.458.833 1.458 2.935 0 3.768l-5.83 3.333c-.667.38-1.485.38-2.153-.001l-5.83-3.332c-1.457-.833-1.457-2.935 0-3.767L6.925.285a2.173 2.173 0 0 1 2.15 0Z" />
                  </svg>
                  <span>All Feedback</span>
                </button>
                {/* Button #2 */}
                <button
                  className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-emerald-200 ${category === 2 ? "relative bg-linear-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-emerald-500/0),--theme(--color-emerald-500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]" : "opacity-65 transition-opacity hover:opacity-90"}`}
                  aria-pressed={category === 2}
                  onClick={() => setCategory(2)}
                >
                  <svg
                    className={`fill-current ${category === 2 ? "text-emerald-500" : "text-gray-600"}`}
                    xmlns="http://w3.org"
                    width="16"
                    height="16"
                  >
                    <path d="M6.5 3.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM9 6.855A3.502 3.502 0 0 0 8 0a3.5 3.5 0 0 0-1 6.855v1.656L5.534 9.65a3.5 3.5 0 1 0 1.229 1.578L8 10.267l1.238.962a3.5 3.5 0 1 0 1.229-1.578L9 8.511V6.855Zm2.303 4.74c.005-.005.01-.01.013-.016l.012-.016a1.5 1.5 0 1 1-.025.032ZM3.5 11A1.497 1.497 0 0 1 5 12.5 1.5 1.5 0 1 1 3.5 11Z" />
                  </svg>
                  <span>UI/UX & Code</span>
                </button>
                {/* Button #3 */}
                <button
