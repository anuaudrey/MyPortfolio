
/*
 * Author: Audrey Anulegeh
 * lastly modified: 3 October 2026
 *
 * Description:
 * This is the Services page of the portfolio website. It showcases the services I offer, providing details such as the service title and description. The page uses reusable components like PageTransition, SectionHeading, and ImageWithFallback to create a visually appealing and responsive layout.
 */

import PageTransition from "../components/PageTransition";
import SectionHeading from "../components/SectionHeading";
import portfolioData from "../data/portfolioData";
import ImageWithFallback from "../components/ImageWithFallback";

export default function Services() {
  const { services } = portfolioData;

  return (
    <PageTransition>
      <main className="bg-[#f7f4f0]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">

          {/* Page introduction */}
          <SectionHeading
            title="What I Do"
            intro="I create thoughtful digital solutions that combine clean development, intuitive design, and purposeful technology."
          />

          {/* Services */}
          <div className="mt-16 grid gap-6 md:grid-cols-2">

            {services.map((service, index) => (
              <article
                key={service.id}
                className="group overflow-hidden rounded-3xl border border-[#ded7d0] bg-[#efeae4] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Service image */}
                <div className="h-56 overflow-hidden">
                  <ImageWithFallback src={service.image} alt={service.title} className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Service content */}
                <div className="p-7">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-sm font-medium tracking-[0.2em] text-[#b68f86]">
                      0{index + 1}
                    </span>

                    <div className="h-px w-8 bg-[#ded7d0]" />
                  </div>

                  <h2 className="text-2xl font-semibold text-[#292624]">
                    {service.title}
                  </h2>

                  <p className="mt-4 leading-7 text-[#77716b]">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}

          </div>

        </div>
      </main>
    </PageTransition>
  );
}