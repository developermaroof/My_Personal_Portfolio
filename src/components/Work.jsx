import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaGithub } from "react-icons/fa6";
import { TbExternalLink } from "react-icons/tb";

// images
import Portfolio from "../assets/projects/portfolio.png"
import Portfolio1 from "../assets/projects/portfolio1.png"
import Portfolio2 from "../assets/projects/portfolio2.png"
import Dashboard1 from "../assets/projects/Dashboard1.png"
import Ecommerce from "../assets/projects/ecommerce.png"
import Ecommerce1 from "../assets/projects/ecommerce2.png"
import RecipeApp from "../assets/projects/recipeApp.png"
import RecipeApp2 from "../assets/projects/recipeApp2.png"
import DevnitoV1 from "../assets/projects/devnitov1.png"
import BlogWeb from "../assets/projects/BlogWeb.png"
import GPT from "../assets/projects/gpt.png"
import Restaurant from "../assets/projects/restaurant.png"
import Books from "../assets/projects/books.png"
import FoodPanda from "../assets/projects/foodPanda.png"
import HairSaloon from "../assets/projects/hairSaloon.png"
import NokoSocial from "../assets/projects/nokoSocial.png"
import University from "../assets/projects/university.png"
import Manage from "../assets/projects/manage.png"

const images = [
  { src: Portfolio1, title: "Modern Portfolio", tech: "ReactJS, Bootstrap, Css", github: "https://developermaroof1.netlify.app/", website: "https://developermaroof1.netlify.app/" },
  { src: Dashboard1, title: "Admin Dashboard", tech: "ReacAtJS, SASS/SCSS, Firebase", github: "https://developermaroof1.netlify.app/", website: "https://developermaroof1.netlify.app/" },
  { src: GPT, title: "GPT3 Webiste", tech: "React, Bootstrap, Css", github: "https://developermaroof1.netlify.app/", website: "https://developermaroof1.netlify.app/" },
  { src: Restaurant, title: "Gericht Restaurant", tech: "React, Bootstrap, Css", github: "https://developermaroof1.netlify.app/", website: "https://developermaroof1.netlify.app/" },
  { src: HairSaloon, title: "Hair Studio", tech: "React, Bootstrap, Css", github: "https://developermaroof1.netlify.app/", website: "https://developermaroof1.netlify.app/" },
  { src: Manage, title: "Management Dashboard", tech: "React, Bootstrap, Css", github: "https://developermaroof1.netlify.app/", website: "https://developermaroof1.netlify.app/" },
  { src: Ecommerce1, title: "RedStote", tech: "React, Bootstrap, Css", github: "https://developermaroof1.netlify.app/", website: "https://developermaroof1.netlify.app/" },
  { src: Ecommerce, title: "Cara", tech: "React, Bootstrap, Css", github: "https://developermaroof1.netlify.app/", website: "https://developermaroof1.netlify.app/" },
  { src: NokoSocial, title: "Noko Social", tech: "React, Bootstrap, Css", github: "https://developermaroof1.netlify.app/", website: "https://developermaroof1.netlify.app/" },
  { src: RecipeApp, title: "Recipe App", tech: "React, Bootstrap, Css", github: "https://developermaroof1.netlify.app/", website: "https://developermaroof1.netlify.app/" },
  { src: RecipeApp2, title: "Recipes", tech: "React, Bootstrap, Css", github: "https://developermaroof1.netlify.app/", website: "https://developermaroof1.netlify.app/" },
  { src: BlogWeb, title: "TechBerg", tech: "React, Bootstrap, Css", github: "https://developermaroof1.netlify.app/", website: "https://developermaroof1.netlify.app/" },
  { src: DevnitoV1, title: "Devnito V1", tech: "React, Bootstrap, Css", github: "https://developermaroof1.netlify.app/", website: "https://developermaroof1.netlify.app/" },
  { src: University, title: "EduFord", tech: "React, Bootstrap, Css", github: "https://developermaroof1.netlify.app/", website: "https://developermaroof1.netlify.app/" },
  { src: Portfolio, title: "Daily", tech: "React, Bootstrap, Css", github: "https://developermaroof1.netlify.app/", website: "https://developermaroof1.netlify.app/" },
  { src: Portfolio2, title: "Portfolio Design", tech: "React, Bootstrap, Css", github: "https://developermaroof1.netlify.app/", website: "https://developermaroof1.netlify.app/" },
  { src: FoodPanda, title: "Food Panda", tech: "React, Bootstrap, Css", github: "https://developermaroof1.netlify.app/", website: "https://developermaroof1.netlify.app/" },
  { src: Books, title: "Books", tech: "React, Bootstrap, Css", github: "https://developermaroof1.netlify.app/", website: "https://developermaroof1.netlify.app/" },
];

const Work = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Display 4 items per page for example

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = images.slice(indexOfFirstItem, indexOfLastItem);

  // Pagination Controls
  const totalPages = Math.ceil(images.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <section className="section h-full" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col flex-1 gap-y-12 mb-10 lg:mb-0"
          >
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Featured <br />
                Projects
              </h2>
              <p className="max-w-sm mb-6">
                My recent work highlights my commitment to crafting responsive, user-friendly, and visually engaging web experiences.
              </p>
            </div>
            {/* Image Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {currentItems.map((item, index) => (
                <button key={index} className="group relative overflow-hidden border-2 border-white/50 rounded-xl w-full">
                  <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                  <img className="group-hover:scale-125 object-cover transition-all duration-500" src={item.src} alt={item.title} />
                  
                  <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                    <span className="text-gradient">{item.title}</span>
                  </div>
                  
                  <div className="absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-700 z-50">
                    <span className="text-xl text-white">{item.tech}</span>
                  </div>
                  
                  <div className="absolute flex gap-4 -bottom-full left-12 group-hover:bottom-8 transition-all duration-700 z-50">
                    <a href={item.github} target="_blank" rel="noreferrer"><FaGithub className="w-6 h-6" /></a>
                    <a href={item.website} target="_blank" rel="noreferrer"><TbExternalLink className="w-6 h-6" /></a>
                  </div>
                </button>
              ))}
            </div>
            {/* Pagination Controls */}
            <div className="flex justify-center mt-8">
              <button onClick={handlePrevPage} className="btn btn-sm mr-4" disabled={currentPage === 1}>
                Previous
              </button>
              <button onClick={handleNextPage} className="btn btn-sm" disabled={currentPage === totalPages}>
                Next
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
