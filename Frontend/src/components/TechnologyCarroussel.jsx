import portfolioData from "../data/portfolioData";

export default function TechnologyCarousel() {
  const { technologies } = portfolioData;

  return (
    <section className="overflow-hidden border-y border-[#ded7d0] bg-[#efeae4] py-8">
      <div className="mb-6 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#b68f86]">
          Technologies I Work With
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="technology-track flex w-max gap-6">
          
          {/* First set */}
          {technologies.map((technology) => (
            <div
              key={`first-${technology.id}`}
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#ded7d0] bg-[#f7f4f0] shadow-sm"
              title={technology.name}
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className="h-8 w-8 object-contain"
              />
            </div>
          ))}

          {/* Duplicate set for continuous scrolling */}
          {technologies.map((technology) => (
            <div
              key={`second-${technology.id}`}
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#ded7d0] bg-[#f7f4f0] shadow-sm"
              title={technology.name}
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className="h-8 w-8 object-contain"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}