import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Wholesale from "./wholesale";
import Cos from "./cos";
import GamesCon from "./gamescon";
import CodeCraftedTemplates from "./codecraftedtemplates";
import RickAndMorty from "./rickandmorty";

function ProyectosLaborales() {
  const [currentProject, setCurrentProject] = useState(0);
  const [direction, setDirection] = useState(0); // Estado para manejar la dirección
  const projects = [
    "Wholesale",
    "COS",
    "Code Crafted Templates",
    "GamesCon",
    "Rick & Morty",
  ];
  
  const handleNext = () => {
    setDirection(1); // Dirección hacia la derecha
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection(-1); // Dirección hacia la izquierda
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const renderProject = () => {
    switch (projects[currentProject]) {
      case "Wholesale":
        return <Wholesale />;
      case "COS":
        return <Cos />;
      case "Code Crafted Templates":
        return <CodeCraftedTemplates />;
      case "GamesCon":
        return <GamesCon />;
      case "Rick & Morty":
        return <RickAndMorty />;
      default:
        return <Wholesale />;
    }
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <div>
      <nav className="flex-grow flex">
        {projects.map((project, index) => (
          <button
            key={index}
            onClick={() => {
              const newDirection = index > currentProject ? 1 : -1;
              setDirection(newDirection);
              setCurrentProject(index);
            }}
            className={
              currentProject === index
                ? "font-bold text-mainL dark:text-mainD"
                : ""
            }
          >
            {project}
          </button>
        ))}
      </nav>
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentProject}
          custom={direction}
          initial="enter"
          animate="center"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.2 }}
        >
          {renderProject()}
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-between omt-4">
        <button onClick={handlePrev}>
          <span className="material-symbols-outlined">navigate_before</span>
        </button>
        <button onClick={handleNext}>
          <span className="material-symbols-outlined">navigate_next</span>
        </button>
      </div>
    </div>
  );
}

export default ProyectosLaborales;
