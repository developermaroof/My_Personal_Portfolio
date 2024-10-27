import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// 
import { FaGithub } from "react-icons/fa6";
import { TbExternalLink } from "react-icons/tb";
// images
import Portfolio1 from "../assets/portfolio1.png"
import Portfolio2 from "../assets/portfolio2.png"
import Dashboard1 from "../assets/Dashboard1.png"
import DevnitoV1 from "../assets/devnitov1.png"
import YTClone from "../assets/YTClone.png"

const Work = () => {
  return (
    <section className="section mb-20" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div 
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col flex-1 gap-y-12 mb-10 lg:mb-0">
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest 
                <br /> 
                Work.
              </h2>
              <p className="max-w-sm mb-6">
              My recent work highlights my commitment to crafting responsive, user-friendly, and visually engaging web experiences. Each project focuses on delivering high-quality, functional design that meets user needs and enhances engagement.
              </p>
              <button className="btn btn-sm">Projects</button>
            </div>
            {/* Images Starts */}

            {/* image 1 */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img className="group-hover:scale-125 object-cover transition-all duration-500" src={Portfolio1} alt="" />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-28 transition-all duration-500 z-50">
                <span className="text-gradient">
                  UI/UX Development
                </span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>
              {/* Buttons */}
              <div className="absolute flex gap-4 -bottom-full left-12 group-hover:bottom-8 transition-all duration-700 z-50">
                <a href="/"><FaGithub className="w-6 h-6"/></a> 
                <a href="/"><TbExternalLink className="w-6 h-6"/></a>
              </div>
            </div>
            {/* image 5 */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img className="group-hover:scale-125 transition-all duration-500" src={Dashboard1} alt="" />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-28 transition-all duration-500 z-50">
                <span className="text-gradient">
                  UI/UX Development
                </span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>
              {/* Buttons */}
              <div className="absolute flex gap-4 -bottom-full left-12 group-hover:bottom-8 transition-all duration-700 z-50">
                <a href="/"><FaGithub className="w-6 h-6"/></a> 
                <a href="/"><TbExternalLink className="w-6 h-6"/></a>
              </div>
            </div>

            {/* Images Ends */}
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10">
            {/* Images Starts */}
            
            {/* image 2 */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img className="group-hover:scale-125 transition-all duration-500" src={DevnitoV1} alt="" />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-28 transition-all duration-500 z-50">
                <span className="text-gradient">
                  UI/UX Development
                </span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>
              {/* Buttons */}
              <div className="absolute flex gap-4 -bottom-full left-12 group-hover:bottom-8 transition-all duration-700 z-50">
                <a href="/"><FaGithub className="w-6 h-6"/></a> 
                <a href="/"><TbExternalLink className="w-6 h-6"/></a>
              </div>
            </div>
            {/* image 3 */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img className="group-hover:scale-125 transition-all duration-500" src={YTClone} alt="" />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-28 transition-all duration-500 z-50">
                <span className="text-gradient">
                  UI/UX Development
                </span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>
              {/* Buttons */}
              <div className="absolute flex gap-4 -bottom-full left-12 group-hover:bottom-8 transition-all duration-700 z-50">
                <a href="/"><FaGithub className="w-6 h-6"/></a> 
                <a href="/"><TbExternalLink className="w-6 h-6"/></a>
              </div>
            </div>
            {/* image 4 */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img className="group-hover:scale-125 transition-all duration-500" src={Portfolio2} alt="" />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-28 transition-all duration-500 z-50">
                <span className="text-gradient">
                  UI/UX Development
                </span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>
              {/* Buttons */}
              <div className="absolute flex gap-4 -bottom-full left-12 group-hover:bottom-8 transition-all duration-700 z-50">
                <a href="/"><FaGithub className="w-6 h-6"/></a> 
                <a href="/"><TbExternalLink className="w-6 h-6"/></a>
              </div>
            </div>

            {/* Images Ends */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
