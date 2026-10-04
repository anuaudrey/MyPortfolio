// src/components/home/Intro.jsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import portfolioData from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

function Intro() {
  const { personal } = portfolioData;

  return (
    <section className="bg-white px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
        <SectionHeading
          number="01"
          eyebrow="About"
          title="Technology with intention."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <p className="font-serif text-3xl leading-tight text-[#292624] md:text-4xl">
            {personal.mission}
          </p>

          <p className="mt-7 text-base leading-7 text-[#77716b]">
            {personal.about}
          </p>

          <Link
            to="/about"
            className="mt-8 inline-flex border-b border-[#292624] pb-1 text-sm font-medium text-[#292624]"
          >
            Discover more about me →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Intro;