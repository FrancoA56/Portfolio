import React, { useState } from "react";
import { changeLanguage } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import DarkMode from "./darkmode";
import { motion, AnimatePresence } from "framer-motion";
import Inicio from "./head";
import Estudios from "./estudios";
import Proyectos from "./proyectos";
import Contacto from "./contactame";
import { translations } from "./translations";

function Nav() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);
  const [currentPage, setCurrentPage] = useState("Inicio");
  const [direction, setDirection] = useState(0);
  const pages = ["Inicio", "Estudios", "Proyectos", "Contacto"];

  const cambiarIdioma = () => {
    dispatch(changeLanguage());
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const handleClick = (page) => {
    const newDirection = pages.indexOf(page) - pages.indexOf(currentPage);
    setDirection(newDirection);
    setCurrentPage(page);
  };

  return (
    <div className="text-light absolute h-screen w-screen text-parrafo dark:text-dark bg-lightimg dark:bg-darkimg bg-cover">
      {/* Barra de navegación */}
      <div className="flex items-center justify-between p-3 relative z-10">
        <div className="flex items-center space-x-4">
          <DarkMode />
          <button onClick={cambiarIdioma} className="pointer">
            {language ? <div>Español</div> : <div> English </div>}
          </button>
        </div>
        <nav className="flex-grow flex justify-between space-x-4 mx-44 text-light dark:text-dark">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => handleClick(page)}
              className={`${
                currentPage === page
                  ? "text-mainL dark:text-mainD font-bold"
                  : "text-light dark:text-dark"
              }`}
            >
              {translations[language ? "es" : "en"][page.toLowerCase()]}
            </button>
          ))}
        </nav>
      </div>

      {/* Contenedor de animaciones */}
      <div
        className="relative w-full h-full"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="top-0 left-0 w-full h-full"
          >
            {currentPage === "Inicio" && <Inicio />}
            {currentPage === "Estudios" && <Estudios />}
            {currentPage === "Proyectos" && <Proyectos />}
            {currentPage === "Contacto" && <Contacto />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Nav;
