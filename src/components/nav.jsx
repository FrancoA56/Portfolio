import React, { useState } from "react";
import { changeLanguage } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import DarkMode from "./darkmode";
import { motion, AnimatePresence } from "framer-motion";
import Inicio from "./head";
import InicioMovil from "./headMovil";
import Estudios from "./estudios";
import EstudiosMovil from "./estudiosMovil";
import Proyectos from "./proyectos";
import ProyectosMovil from "./proyectosMovil";
import Contacto from "./contactame";
import ContactameMovil from "./contactoMovil";
import { translations } from "./translations";
import github from "../utils/image/github.webp";
import githubW from "../utils/image/githubWhite.webp";
import linkedin from "../utils/image/linkedin.webp";
import linkedinW from "../utils/image/linkedinW.webp";
import x from "../utils/image/X.webp";
import xw from "../utils/image/XW.webp";

function Nav() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);
  const [currentPage, setCurrentPage] = useState("Inicio");
  const [direction, setDirection] = useState(0);
  const pages = ["Inicio", "Estudios", "Proyectos", "Contacto"];

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 640px)",
  });

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
      {isDesktopOrLaptop ? (
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
          <div className="">
            <a
              href="https://github.com/FrancoA56"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={github}
                alt="githubIco"
                className="w-6 relative top-0.5 mr-3 dark:hidden inline"
              />
              <img
                src={githubW}
                alt="githubIco"
                className="w-6 relative top-0.5 mr-3 hidden dark:inline"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/franco-adamoli/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={linkedin}
                alt="githubIco"
                className="w-5 relative top-0.5 mr-3 dark:hidden inline"
              />
              <img
                src={linkedinW}
                alt="githubIco"
                className="w-5 relative top-0.5 mr-3 hidden dark:inline"
              />
            </a>
            <a
              href="https://twitter.com/FrancoDev56"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={x}
                alt="githubIco"
                className="w-5 relative top-0.5 mr-3 dark:hidden inline"
              />
              <img
                src={xw}
                alt="githubIco"
                className="w-5 relative top-0.5 mr-3 hidden dark:inline"
              />
            </a>
          </div>
        </div>
      ) : (
        <div className="bg-lightimg dark:bg-darkimg transition ease-in-out px-6 py-2 relative">
          <div className="grid grid-cols-3">
            <DarkMode className="flex justify-start items-start"/>
            <button onClick={cambiarIdioma} className="pointer flex items-center justify-center">
              {language ? <div>Español</div> : <div> English </div>}
            </button>
            <div className="flex justify-end items-center mb-1 mr-0 ">
              <a
                href="https://github.com/FrancoA56"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={github}
                  alt="githubIco"
                  className="w-6 relative top-0.5 mr-3 dark:hidden inline"
                />
                <img
                  src={githubW}
                  alt="githubIco"
                  className="w-6 relative top-0.5 mr-3 hidden dark:inline"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/franco-adamoli/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={linkedin}
                  alt="githubIco"
                  className="w-5 relative top-0.5 mr-3 dark:hidden inline"
                />
                <img
                  src={linkedinW}
                  alt="githubIco"
                  className="w-5 relative top-0.5 mr-3 hidden dark:inline"
                />
              </a>
              <a
                href="https://twitter.com/FrancoDev56"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={x}
                  alt="githubIco"
                  className="w-5 relative top-0.5 mr-3 dark:hidden inline"
                />
                <img
                  src={xw}
                  alt="githubIco"
                  className="w-5 relative top-0.5 mr-3 hidden dark:inline"
                />
              </a>
            </div>
          </div>
          <hr className="mb-3 " />
          <nav className="flex-grow flex justify-between text-light dark:text-dark">
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
      )}
      {isDesktopOrLaptop ? (
        <div className="relative w-full h-full">
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
      ) : (
        <div className="relative w-full h-full">
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
              {currentPage === "Inicio" && <InicioMovil />}
              {currentPage === "Estudios" && <EstudiosMovil />}
              {currentPage === "Proyectos" && <ProyectosMovil />}
              {currentPage === "Contacto" && <ContactameMovil />}
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}

export default Nav;
