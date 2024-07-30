import Link from "next/link";
import React from "react";
const Button = (props) => {
  const { children, className, href, ariaLabel, onClick } = props;
  return href != "" ? (
    // Render a Link component if 'href' is provided
    <Link
      href={href ? href : "#"}
      aria-label={ariaLabel}
      onClick={onClick}
      className={`px-5 py-2 bg-black capitalize text-white font-mono text-xl rounded-lg transition-all duration-500 border border-solid border-transparent hover:border-black hover:bg-white hover:text-black ${className}`}
    >
      {children}
    </Link>
  ) : (
    // Render a regular button if 'href' is not provided
    <button
      type="submit"
      aria-label={ariaLabel}
      className={`px-5 py-2 bg-black text-white capitalize font-mono text-xl rounded-lg transition-all duration-500 border border-solid border-transparent hover:border-black hover:bg-white hover:text-black ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
