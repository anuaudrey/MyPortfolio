/*
 * Author: Audrey Anulegeh
 * lastly modified: 3 October 2026
 *
 * Description:
 * This is a reusable navbar component that provides navigation links to different sections of the portfolio.
 * It is designed to be responsive, with a mobile-friendly menu that can be toggled on smaller screens.
 * The component uses React Router for navigation and Framer Motion for smooth animations.
 * 
 * Image/Icons credits:
 * Logo: Created by Audrey Anulegeh
 */

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import portfolioData from "../data/portfolioData";
import Logo from "../assets/images/Logo.png";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { navigation, personal } = portfolioData;

  return (
    <header className="z-20 border-b border-[#ded7d0]/70 bg-[#f7f4f0]/95 backdrop-blur sticky top-0 w-full">
       <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className="flex items-center gap-3"
        >
          <div>
            <img src={Logo} alt="Logo" className="h-35 w-20 rounded-full " />
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-medium text-[#292624]">
              {personal.name}
            </p>

            <p className="text-[10px] uppercase tracking-[0.15em] text-[#8b817a]">
              Software Engineering
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block rounded-full px-4 py-2 text-sm transition-colors ${
                  isActive
                    ? "bg-[#ead8d4] text-[#292624]"
                    : "text-[#77716b] hover:text-[#292624]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setIsMenuOpen((previous) => !previous)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className="h-px w-5 bg-[#292624]" />
          <span className="h-px w-5 bg-[#292624]" />
          <span className="h-px w-5 bg-[#292624]" />
        </button>
      </div>

     
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-[#ded7d0] md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-3 text-sm transition-colors ${
                      isActive
                        ? "bg-[#ead8d4] text-[#292624]"
                        : "text-[#77716b] hover:bg-[#ead8d4]/50 hover:text-[#292624]"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;