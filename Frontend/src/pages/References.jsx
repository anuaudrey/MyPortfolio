/*
 * Author: Audrey Anulegeh
 * lastly modified: 3 October 2026
 *
 * Description:
 * This is a reusable reference card component that displays a testimonial(reference) from a client or colleague. It includes the person's name, company, position, and their quote.
 */

import PageTransition from "../components/PageTransition";
import SectionHeading from "../components/SectionHeading";
import ReferenceCard from "../components/ReferenceCard";
import PortfolioData from "../data/portfolioData";

export default function References() {
  const { testimonials } = PortfolioData;
  return (
    <PageTransition>
      <SectionHeading title="References" intro="Kind words from people I have worked with." />
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial) => <ReferenceCard key={testimonial.id} {...testimonial} />)}
      </div>
    </PageTransition>
  );
}
