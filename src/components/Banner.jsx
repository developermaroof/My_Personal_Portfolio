import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[1] lg:text-[110px]"
            >
              Maroof <span>Qureshi</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-1">I am a </span>
              <TypeAnimation
                sequence={[
                  "Full Stack Developer.",
                  2000,
                  "Mern Stack Developer.",
                  2000,
                  "Software Engineer.",
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
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              With over three years of experience and a portfolio of 75+
              successful projects. Specializing in end-to-end web solutions, I
              combine expertise in frontend development with newly acquired
              backend proficiency in Next.js, RESTful API development, and
              MongoDB integration. Known for delivering user-centric,
              performance-optimized applications.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <Link to="contact" smooth={true} duration={500}>
                <button className="btn btn-lg">Contact me</button>
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer text-gradient btn-link"
              >
                My Portfolio
              </Link>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a
                href="https://github.com/developermaroof"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/developermaroof/"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.facebook.com/developermaroofpage/"
                aria-label="Facebook Page"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/developer_maroof/"
                aria-label="Instagram Profile"
              >
                <FaInstagram />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
