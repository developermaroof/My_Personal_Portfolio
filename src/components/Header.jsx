import React from "react";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
          <span
            className="font-bold bg-gradient-to-r from-[#ff56f6]
            via-[#b936ee] to-[#3bace2] bg-clip-text text-transparent"
          >
            {"< Maroof />"}
          </span>

          </a>
          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
