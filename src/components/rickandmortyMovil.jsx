import React, { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import { FaGithub, FaDatabase, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import "pure-react-carousel/dist/react-carousel.es.css";
import Modal from "react-modal";
import RYMAbout from "../utils/image/proyectos/proyecto rickandmorty/about.jpg";
import RYMDetail from "../utils/image/proyectos/proyecto rickandmorty/detail.jpg";
import RYMFavorites from "../utils/image/proyectos/proyecto rickandmorty/favorites.jpg";
import RYMHome1 from "../utils/image/proyectos/proyecto rickandmorty/home.jpg";
import RYMHome2 from "../utils/image/proyectos/proyecto rickandmorty/home2.jpg";
import RYMLogin1 from "../utils/image/proyectos/proyecto rickandmorty/login.jpg";
import RYMLogin2 from "../utils/image/proyectos/proyecto rickandmorty/loginMarcado.jpg";
import { useSelector } from "react-redux";

const images = [
  RYMHome1,
  RYMHome2,
  RYMAbout,
  RYMDetail,
  RYMFavorites,
  RYMLogin1,
  RYMLogin2,
];

// Función para obtener los estilos personalizados del modal
const getCustomStyles = (theme) => ({
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    maxWidth: "600px",
    padding: "20px",
    borderRadius: "8px",
    background: theme === "dark" ? "#333" : "#fff",
    color: theme === "dark" ? "#fff" : "#333",
    border: theme === "dark" ? "1px solid #444" : "1px solid #ddd",
  },
  overlay: {
    backgroundColor:
      theme === "dark" ? "rgba(0, 0, 0, 0.60)" : "rgba(255, 255, 255, 0.60)",
  },
});

Modal.setAppElement("#root");

function RickAndMorty() {
  const language = useSelector((state) => state.language);
  const theme = useSelector((state) => state.theme);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="text-light dark:text-dark border shadow-lg rounded mx-auto mt-8  bg-lightimg dark:bg-darkimg">
      <div className="grid grid-cols-1 items-center px-6">
        <div className="text-center ">
          {language ? (
            <>
              <div className="text-xl mt-3">Catalogo</div>
              <div className="text-lg mb-2">Rick & Morty</div>
            </>
          ) : (
            <>
              <div className="text-xl mt-3">Catalog</div>
              <div className="text-lg mb-2">Rick & Morty</div>
            </>
          )}

          <div className="flex items-center justify-center space-x-2 text-lg">
            <FaJs className="text-blue-500" />
            <span>Javascript, Redux</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-lg">
            <FaReact className="text-blue-500" />
            <span>React, CSS Nativo</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-lg">
            <FaNodeJs className="text-green-500" />
            <span>Node.js</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-lg">
            <FaDatabase className="text-green-500" />
            <span>Sequelize, SQL</span>
          </div>
          <div className="flex justify-center items-center space-x-4 mt-2">
            <a
              href="https://github.com/FrancoA56/FrontEndRYMHenry"
              target="_blank"
              rel="noreferrer"
              className="text-mainL dark:text-mainD flex items-center space-x-1"
            >
              <FaGithub />
              {language ? <span>Cliente</span> : <span>Client</span>}
            </a>
            <a
              href="https://github.com/FrancoA56/BackEndRYMHenry"
              target="_blank"
              rel="noreferrer"
              className="text-mainL dark:text-mainD flex items-center space-x-1"
            >
              <FaGithub /> <span>Server</span>
            </a>
          </div>
          <button
            onClick={() => setModalIsOpen(true)}
            className="mt-4 mb-2 p-1 bg-mainL dark:bg-mainD text-white rounded px-6 shadow-md hover:bg-mainD dark:hover:bg-mainL transition"
          >
            {language ? "Ver más" : "See more"}
          </button>
        </div>
        <div className="w-full mt-2">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={52}
            totalSlides={images.length}
          >
            <Slider
              onTouchStart={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
              onWheel={(e) => e.stopPropagation()}
            >
              {images.map((img, index) => (
                <Slide key={index} index={index}>
                  <img
                    src={img}
                    alt={`GamesCon ${index}`}
                    loading="lazy"
                    className="rounded shadow-lg hover:scale-105 transition-transform"
                  />
                </Slide>
              ))}{" "}
            </Slider>
            <div className="flex justify-center space-x-4 my-4">
              <ButtonBack className="text-2xl">⬅️</ButtonBack>
              <DotGroup className="flex space-x-2" />
              <ButtonNext className="text-2xl">➡️</ButtonNext>
            </div>
          </CarouselProvider>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={getCustomStyles(theme)}
        contentLabel="Descripción del proyecto"
      >
        <div className="h-auto">
          <h2 className="text-center mb-4">
            {language ? "Descripción del Proyecto" : "Project Description"}
          </h2>
          <h2 className="text-center mb-4">
            {language ? "Proyecto Académico" : "Academic Project"}
          </h2>
          <p className="text-justify mb-4">
            {language
              ? "Una Single Page Application (SPA) que consume datos de una API externa y permite visualizar información general y detallada de más de 800 personajes de la serie Rick & Morty. Entre las funcionalidades de esta aplicación se incluyen la capacidad de filtrar por género, ordenar los personajes por nombre y un sistema de personajes favoritos por usuario. Además, la app cuenta con la creación de usuario e inicio de sesión."
              : "A Single Page Application (SPA) that consumes data from an external API and allows viewing general and detailed information of over 800 characters from the Rick & Morty series. Among the features of this application are the ability to filter by gender, sort characters by name, and a favorites system for each user. Additionally, the app includes user creation and login functionality."}
          </p>
          <button
            onClick={() => setModalIsOpen(false)}
            className="mt-4 py-2 px-4 bg-mainL dark:bg-mainD text-white rounded block mx-auto"
          >
            {language ? "Cerrar" : "Close"}
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default RickAndMorty;
