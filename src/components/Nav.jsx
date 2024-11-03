import React from "react";
import { Link } from "react-scroll";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";

// Navigation data
const navItems = [
  { to: "home", icon: <BiHomeAlt />, label: "Home" },
  { to: "about", icon: <BiUser />, label: "About" },
  { to: "services", icon: <BsClipboardData />, label: "Services" },
  { to: "work", icon: <BsBriefcase />, label: "Work" },
  { to: "contact", icon: <BsChatSquareText />, label: "Contact" },
];

const Nav = () => {
  // Common Link props
  const linkProps = {
    smooth: true,
    spy: true,
    activeClass: "active",
    offset: -200,
    className: "cursor-pointer w-[60px] h-[60px] flex items-center justify-center",
  };

  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        {/* nav inner */}
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              aria-label={item.label}
              {...linkProps}
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Nav);
