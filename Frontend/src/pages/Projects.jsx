/*
 * Author: Audrey Anulegeh
 * lastly modified: 3 October 2026
 *
 * Description:
 * This is the Projects page of the portfolio website. It showcases a collection of projects that i have worked on, providing details such as the project title, description, role, outcome, image, completion date, and technologies used. The page utilizes reusable components like PageTransition, SectionHeading, and ProjectCard to create a visually appealing and responsive layout.  
 */

import PageTransition from "../components/PageTransition";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import portfolioData from "../data/portfolioData";

function Projects() {
  const {projects} = portfolioData;
  return (
    <PageTransition>
      <SectionHeading title="Projects" intro="A few things I have built, and what I did on each." />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => <ProjectCard key={project.id} {...project} />)}
      </div>
    </PageTransition>
  );
}

export default Projects;