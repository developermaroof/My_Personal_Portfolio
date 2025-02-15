import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="hidden lg:block flex-1 bg-about bg-cover bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">
              I'm a Fullstack Developer with over 3 years of experience.
            </h3>
            <p>
              I combine expertise in frontend development with newly acquired
              backend proficiency in Next.js, RESTful API development, and
              MongoDB integration. Known for delivering user-centric,
              performance-optimized applications, my work spans diverse
              industries and international teams, showcasing my versatility and
              commitment to bridging technical excellence with business needs.
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient my-2 pt-2">
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null}
                </div>
                <div
                  className="font-primary text-sm tracking-[2px]"
                  aria-label="Years of Experience"
                >
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient my-2 pt-2">
                  {inView ? <CountUp start={0} end={75} duration={3} /> : null}+
                </div>
                <div
                  className="font-primary text-sm tracking-[2px]"
                  aria-label="Projects Completed"
                >
                  Projects <br />
                  Completed
                </div>
              </div>
            </div>
            {/* button */}
            <div className="flex gap-x-8 items-center">
              <Link to="contact" smooth={true} duration={500}>
                <button className="btn btn-lg">Contact me</button>
              </Link>
              <a href="/Resume.pdf" download className="text-gradient btn-link">
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
