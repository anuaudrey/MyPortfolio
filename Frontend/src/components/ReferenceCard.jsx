/*
 * Author: Audrey Anulegeh
 * lastly modified: 3 October 2026
 *
 * Description:
 * This is a reusable reference card component that displays a testimonial(reference) from a client or colleague. It includes the person's name, company, position, and their quote.
 */
export default function ReferenceCard({ name, company, position, testimonial }) {
  return (
    <figure className="rounded-3xl bg-[#E8C7C8]/60 p-7">
      <blockquote className="font-display text-2xl leading-snug">“{testimonial}”</blockquote>
      <figcaption className="mt-5 text-sm text-#E0B0FF">
        <span className="font-bold font-serif">{name}</span>, {position} at {company}
      </figcaption>
    </figure>
  );
}
