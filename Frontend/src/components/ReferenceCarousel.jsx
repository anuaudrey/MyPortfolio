/*
 * Author: Audrey Anulegeh
 * lastly modified: 3 October 2026
 *
 * Description:
 * This is a reusable reference carousel component that displays a testimonial(reference) from a client or colleague. It includes the person's name, company, position, and their quote. The carousel allows users to navigate through multiple testimonials using previous and next buttons, as well as indicators for each testimonial.
 */
import { useState } from "react";
import portfolioData from "../data/portfolioData";

export default function ReferenceCarousel() {
  const { testimonials } = portfolioData;
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentReference = testimonials[currentIndex];

  function showPrevious() {
    setCurrentIndex((previousIndex) =>
      previousIndex === 0
        ? testimonials.length - 1
        : previousIndex - 1
    );
  }

  function showNext() {
    setCurrentIndex((previousIndex) =>
      previousIndex === testimonials.length - 1
        ? 0
        : previousIndex + 1
    );
  }

  return (
    <section className="bg-[#f7f4f0] px-6 py-20">
      <div className="mx-auto max-w-4xl">

        {/* Section heading */}
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#b68f86]">
            References
          </p>

          <h2 className="mt-3 text-4xl text-[#292624]">
            Kind words from others
          </h2>
        </div>

        {/* Reference card */}
        <div className="relative mt-12 rounded-3xl border border-[#ded7d0] bg-[#efeae4] px-8 py-10 text-center shadow-sm sm:px-14">
          
          {/* Quote */}
          <p className="text-2xl leading-9 text-[#292624]">
            “{currentReference.testimonial}”
          </p>

          {/* Person */}
          <div className="mt-8">
            <p className="font-medium text-[#292624]">
              {currentReference.name}
            </p>

            <p className="mt-1 text-sm text-[#77716b]">
              {currentReference.position}
            </p>

            <p className="text-sm text-[#b68f86]">
              {currentReference.company}
            </p>
          </div>

          {/* Navigation buttons */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous reference"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ded7d0] text-[#292624] transition-colors hover:bg-[#292624] hover:text-white"
            >
              ←
            </button>

            <button
              type="button"
              onClick={showNext}
              aria-label="Next reference"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ded7d0] text-[#292624] transition-colors hover:bg-[#292624] hover:text-white"
            >
              →
            </button>
          </div>
        </div>

        {/* Indicators */}
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Show reference ${index + 1}`}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "w-8 bg-[#b68f86]"
                  : "w-2 bg-[#ded7d0]"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}