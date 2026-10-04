/*
 * Author: Audrey Anulegeh
 * lastly modified: 3 October 2026
 *
 * Description:
 * This is a reusable project card component that displays information about a project, including its title, description, role, outcome, image, completion date, and technologies used. It is designed to be visually appealing and responsive, making it suitable for showcasing projects in a portfolio.
 * The component uses the ImageWithFallback component to handle cases where the project image may not be available, ensuring a consistent user experience.
 * 
 */
import ImageWithFallback from "./ImageWithFallback";

export default function ProjectCard({ title, description, role, outcome, image, completionDate, technologies }) {
  return (
    <article className="overflow-hidden rounded-3xl bg-[#efeae4]">
      <ImageWithFallback src={image} alt={`${title} screenshot`} className="h-56 w-full" />
      <div className="p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-[#292624] text-3xl">{title}</h2>
          <time className="text-sm text-[#b68f86]">{completionDate}</time>
        </div>
        <p className="mt-2 text-[#77716b]">{description}</p>
        <p className="mt-4 text-sm text-[#b68f86]"><strong className="font-medium text-[#292624]">My role:</strong> {role}</p>
        <p className="mt-1 text-sm text-[#b68f86]"><strong className="font-medium text-[#292624]">Outcome:</strong> {outcome}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-[#292624]/10 text-[#292624]/80 hover:bg-[#292624]/20 text-sm font-medium px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
