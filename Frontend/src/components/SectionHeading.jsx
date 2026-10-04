/*
 * Author: Audrey Anulegeh
 * lastly modified: 3 October 2026
 *
 * Description:
 * This is a reusable section heading component that displays a title and an introductory paragraph.
 */
export default function SectionHeading({ title, intro }) {
  return (
    <div className="mb-12 max-w-xl">
      <h1 className="font-display text-5xl md:text-6xl">{title}</h1>
      {intro && <p className="mt-4 leading-relaxed text-mauve">{intro}</p>}
    </div>
  );
}