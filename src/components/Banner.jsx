import React from "react";

// images
import image from "../assets/avatar.svg";
// icons
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section className="section" id="home">
      <div className="container mx-auto">
        <div>
          {/* text */}
          <div>
            <h1>
              Maroof <span>Qureshi</span>
            </h1>
            <div className="">
            <span className="mr-1">I am a </span>
            <TypeAnimation sequence={[
              "Frontend Developer.",
              2000,
              "Ui/Ux Developer.",
              2000,
              "Freelancer.",
              2000,
            ]}
            speed={30}
            className="text-accent"
            wrapper="span"
            repeat={Infinity}
            />
            </div>
          </div>
          {/* image */}
          <div>
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
