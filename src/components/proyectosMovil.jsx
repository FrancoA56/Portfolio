import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Wholesale from "./wholesaleMovil";
import Cos from "./cosMovil";
import GamesCon from "./gamesconMovil";
import CodeCraftedTemplates from "./codecraftedtemplatesMovil";
import RickAndMorty from "./rickandmortyMovil";

function ProyectosLaboralesMobile() {
  const [currentProject, setCurrentProject] = useState(0);
  const [direction, setDirection] = useState(0);

  const projects = [
    { name: "Wholesale", component: <Wholesale /> },
    { name: "COS", component: <Cos /> },
    { name: "Code Crafted Templates", component: <CodeCraftedTemplates /> },
    { name: "GamesCon", component: <GamesCon /> },
    { name: "Rick & Morty", component: <RickAndMorty /> },
  ];

  const handleSelectChange = (e) => {
    const newIndex = parseInt(e.target.value);
    setDirection(newIndex > currentProject ? 1 : -1);
    setCurrentProject(newIndex);
  };

  const handleSwipe = (dir) => {
    if (dir === "left") {
      setDirection(1);
      setCurrentProject((prev) => (prev + 1) % projects.length);
    } else {
      setDirection(-1);
      setCurrentProject(
        (prev) => (prev - 1 + projects.length) % projects.length
      );
    }
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <div className="flex justify-between mb-0">
        <button onClick={() => handleSwipe("right")} className="text-2xl">
          ⬅️
        </button>
        <select
          onChange={handleSelectChange}
          value={currentProject}
          className="mx-8 border rounded-md bg-mainL dark:bg-mainD text-white dark:text-black flex justify-center items-center text-center"
        >
          {projects.map((project, index) => (
            <option key={index} value={index}>
              {project.name}
            </option>
          ))}
        </select>
        <button onClick={() => handleSwipe("left")} className="text-2xl">
          ➡️
        </button>
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentProject}
          custom={direction}
          initial="enter"
          animate="center"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.2 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, { offset }) =>
            handleSwipe(offset.x > 0 ? "right" : "left")
          }
          className="w-full"
        >
          {projects[currentProject].component}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default ProyectosLaboralesMobile;
