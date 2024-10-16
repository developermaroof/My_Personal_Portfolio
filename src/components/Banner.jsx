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
    <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[1] lg:text-[110px]">
              Maroof <span>Qureshi</span>
            </motion.h1>
            <motion.div 
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary 
              font-semibold uppercase leading-[1]">
            <span className="text-white mr-1">I am a </span>
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
            </motion.div>
            <motion.p 
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0">
              A seasoned web developer with 70+ completed projects, specializing in
              UI/UX design. Deliver high-quality, innovative solutions, setting a
              standard for excellence in every project.
            </motion.p>
            <motion.div 
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <button className="btn btn-lg">Contact me</button>
              <a href="/" className="text-gradient btn-link">My Portfolio</a>
            </motion.div>
            {/* socials */}
            <motion.div 
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <a href="/">
                <FaGithub />
              </a>
              <a href="/">
                <FaLinkedin />
              </a>
              <a href="/">
                <FaFacebook />
              </a>
              <a href="/">
                <FaInstagram />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div 
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={'show'}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]">
            <img src={image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
