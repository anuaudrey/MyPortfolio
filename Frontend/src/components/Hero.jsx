/*
 * Author: Audrey Anulegeh
 * lastly modified: 3 October 2026
 *
 * Description:
 * This is a modular hero component that introduces the portfolio owner, their role, and mission.
 * It includes a profile image, a brief introduction, and buttons for navigating to the projects and about pages.
 * The component is designed to be responsive and visually engaging.
 * 
 * Image credits:
 * Profile image: shot by Audrey Anulegeh
 */
import Button from "./Button";
import portfolioData from "../data/portfolioData";

function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="relative min-h-[calc(100vh-81px)] overflow-hidden bg-[#f7f4f0]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-12 lg:h-[calc(100vh-81px)] lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-0">
        {/* Left side */}
        <div className="max-w-2xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-[#b68f86]">
            {personal.role}
          </p>

          <h1 className="font-serif text-5xl leading-[1.05] text-[#292624] sm:text-6xl lg:text-7xl">
            Hi, I'm Audrey Anulegeh.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-[#77716b]">
            Welcome to my portfolio — a space where technology,
            creativity, and thoughtful design come together.
          </p>

          <p className="mt-5 max-w-xl text-base leading-7 text-[#292624]">
            {personal.mission}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button to="/projects" variant="primary">
              View My Work
            </Button>

            <Button to="/about" variant="secondary">
              About Me
            </Button>
          </div>
        </div>

        {/* Right side */}
        <div className="relative mx-auto w-full max-w-md">

          {/* Decorative circle */}
          <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full border border-[#b68f86]/40" />

          {/* Image */}
          <div className="relative overflow-visible">
            <div className="overflow-hidden rounded-t-full bg-[#e9e2dc]">
              <img
                src={personal.profileImage}
                alt={`${personal.name} portrait`}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            {/* Availability + Resume card */}
            <aside className="absolute -bottom-16 right-[-1rem] w-[270px] border border-white/60 bg-white/70 p-6  rounded-2xl shadow-lg backdrop-blur-md sm:right-[-2rem]">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b68f86]">
                Available to work
              </p>

              <p className="mt-3 text-sm leading-6 text-[#77716b]">
                I am currently looking for a{" "}
                <span className="font-medium text-[#292624]">
                  Winter 2027 Co-op
                </span>{" "}
                opportunity.
              </p>

              <div className="my-5 h-px w-full bg-[#ded7d0]" />

              <Button
                href={personal.resume}
                variant="light"
              >
                View my resume →
              </Button>

            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;