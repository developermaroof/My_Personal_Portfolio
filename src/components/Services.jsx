import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
import FullstackIcon from "../assets/fullstack.png";
import BackendIcon from "../assets/backend.png";
import APIIcon from "../assets/api.png";

const Services = () => {
  // Memoize static services data
  const services = useMemo(
    () => [
      {
        name: "Fullstack Development",
        description:
          "End-to-end web solutions leveraging Next.js, React, and MongoDB for scalable applications.",
        image: FullstackIcon,
      },
      {
        name: "Backend Development",
        description:
          "Building robust backend systems with RESTful API design and secure database integration.",
        image: BackendIcon,
      },
      {
        name: "API Integration",
        description:
          "Efficiently connecting services through well-designed API integrations to enhance performance.",
        image: APIIcon,
      },
    ],
    []
  );

  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Text & Image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:mr-4 lg:bg-services lg:bg-contain lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-10"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px]">
              Fullstack Developer building comprehensive web solutions.
            </h3>
            <Link to="work">
              <button className="btn btn-sm xl:hidden">See my work</button>
            </Link>
          </motion.div>

          {/* Services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map(({ name, description, image }) => (
                <div
                  className="border-b border-white/20 h-[146px] mb-[36px] flex"
                  key={name}
                >
                  <div className="max-w-[476px]">
                    <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                      {name}
                    </h4>
                    <p className="font-secondary leading-tight">
                      {description}
                    </p>
                  </div>
                  <div className="flex flex-col flex-1 items-end">
                    <div className="btn w-10 h-10 mb-[42px] flex justify-center items-center">
                      <img
                        src={image}
                        alt={`${name} icon`}
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Services);
