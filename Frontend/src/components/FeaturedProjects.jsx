// src/components/home/FeaturedProjects.jsx

import { Link } from "react-router-dom"

import portfolioData from "../data/portfolioData";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

function FeaturedProjects() {
  const featuredProjects = portfolioData.projects.slice(0, 3);

  return (
    <section className="bg-[#f7f4f0] px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            number="02"
            eyebrow="Selected Work"
            title="Projects built with purpose."
          />

          <Link
            to="/projects"
            className="text-sm font-medium text-[#292624] hover:text-[#a47e76]"
          >
            View all projects →
          </Link>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;