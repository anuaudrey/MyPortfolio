/*
 * Author: Audrey Anulegeh
 * lastly modified: 3 October 2026
 *
 * Description:
 * This is the Contact page of the portfolio website. It provides a way for visitors to get in touch with the individual. The page uses reusable components such as SectionHeading and ContactForm to create a visually appealing and responsive layout.
 */
import PageTransition from "../components/PageTransition";
import ContactForm from "../components/ContactForm";
import portfolioData from "../data/portfolioData";
import SectionHeading from "../components/SectionHeading";
function Contact() {
  const { personal } = portfolioData;

  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.5fr]">
          {/* Contact details panel */}
          <div>
            <SectionHeading title="Contact me" intro="Send a message and I will reply as soon as I can." />

            <aside className="mt-8 rounded-3xl bg-[#E8C7C8]/60 p-7">
              <dl className="space-y-6">
                <div>
                  <dt className="text-sm text-[#77716b]">Email</dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-[#292624] underline underline-offset-4 transition-colors hover:text-[#b68f86]"
                    >
                      {personal.email}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-sm text-[#77716b]">Phone</dt>
                  <dd className="mt-1 text-[#292624]">
                    <a href={`tel:${personal.phone}`}>
                      {personal.phone}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-sm text-[#77716b]">Location</dt>
                  <dd className="mt-1 text-[#292624]">
                    {personal.location}
                  </dd>
                </div>
              </dl>
            </aside>
          </div>

          <ContactForm />
        </div>
      </div>
    </PageTransition>
  );
}

export default Contact;