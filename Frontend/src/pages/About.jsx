/*
 * Author: Audrey Anulegeh
 * lastly modified: 3 October 2026
 *
 * Description:
 * This is the About page of the portfolio website. It displays information about the individual, including their name, role, and a link to view their resume. The page uses reusable components such as SectionHeading, ImageWithFallback, and Button to create a visually appealing and responsive layout.
 */
import Button from "../components/Button";
import ImageWithFallback from "../components/ImageWithFallback";
import PageTransition from "../components/PageTransition";
import SectionHeading from "../components/SectionHeading";
import portfolioData from "../data/portfolioData";

const { personal} = portfolioData;

export default function About() {
  return (
    <PageTransition>
      <SectionHeading title="About me" />
      <div className="grid items-start gap-12 md:grid-cols-[1fr_1.4fr]">
        <ImageWithFallback src={personal.profileImage } alt={`Headshot of ${personal.name}`} className="aspect-square w-full rounded-t-[10rem] rounded-b-3xl" />
        <div>
          <h2 className="font-display text-4xl">{personal.name}</h2>
          <p className="mt-1 text-[#77716b]">{personal.role}</p>
          <div className="space-y-5 mt-7">
            {personal.bio.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-7 text-[#77716b]"
              >
                {paragraph}
              </p>
            ))}
          </div>
          {/* opens my resume in another tab*/}
          <div className="mt-8">
            <Button href={personal.resume} >
              View Resume
            </Button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
