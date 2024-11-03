import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  const linkProps = {
    smooth: true,
    spy: true,
    className: "cursor-pointer",
  };

  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="home" {...linkProps}>
            <h1 className="text-gradient text-xl font-bold" aria-label="Maroof's Portfolio">
              {"< Maroof />"}
            </h1>
          </Link>

          {/* Work with me Button */}
          <Link to="contact" {...linkProps}>
            <button className="btn btn-sm">Work with me</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
