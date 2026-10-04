/*
 * Author: Audrey Anulegeh
 * lastly modified: 3 October 2026
 *
 * Description:
 * This is a modular footer component that displays the logo, a brief message, personal contact information, and social media links. 
 * It is designed to be responsive and visually consistent with the overall portfolio design.
 * 
 * Image/Icons credits:
 * Logo: Created by Audrey Anulegeh
 * icons: gotten from https://www.flaticon.com/free-icons/github and https://www.flaticon.com/free-icons/linkedin
 */

import { Link } from "react-router-dom";
import portfolioData from "../data/portfolioData";
import logo from "../assets/images/Logo.png";
import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";

function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="border-t border-[#ded7d0] bg-[#f7f4f0] mt-60">
      <div className="mx-auto flex h-[150px] max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo + Message */}
        <div className="flex items-center gap-4">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-12 rounded-full object-cover"
            />
          </Link>

          <p className="max-w-[200px] text-xs leading-5 text-[#77716b]">
            Designing thoughtful digital experiences through creativity and
            technology.
          </p>
        </div>

        {/* Personal Information */}
        <div className="flex flex-col gap-1 text-xs text-[#77716b]">
          <a
            href={`mailto:${personal.email}`}
            className="transition-colors hover:text-[#292624]"
          >
            {personal.email}
          </a>

          <a
            href={`tel:${personal.phone}`}
            className="transition-colors hover:text-[#292624]"
          >
            {personal.phone}
          </a>

          <p>{personal.location}</p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a target="_blank" rel="noreferrer" href={personal.github}>
            <img
              src={github}
              alt="GitHub"
              className="h-5 w-5"
            />
          </a>

          <a  target="_blank" rel="noreferrer" href={personal.linkedin}>
            <img
              src={linkedin}
              alt="LinkedIn"
              className="h-5 w-5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;