/*
 * Author: Audrey Anulegeh
 * lastly modified: 3 October 2026
 *
 * Description:
 * This is a reusable button component that supports internal navigation,
 * external links, and different button styles.
 */

import { Link } from "react-router-dom";

function Button({
  children,
  to,
  href,
  variant = "primary",
  type = "button",
  onClick,
}) {
  const baseClasses =
    "inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-[#292624] px-6 py-3 mt-5 rounded-full text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#494440]",

    secondary:
      "hover:bg-[#292624] hover:text-white bg-white px-6 py-3 mt-5 rounded-full text-sm font-medium text-[#292624] border border-[#292624] transition-all duration-300 hover:-translate-y-1 hover:bg-[#494440]",

  };

  const classes = `${baseClasses} ${variants[variant]}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export default Button;