import React, { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
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
    backgroundColor: theme === "dark" ? "rgba(0, 0, 0, 0.60)" : "rgba(255, 255, 255, 0.60)",
  },
});

Modal.setAppElement("#root");

function RickAndMorty() {
  const language = useSelector((state) => state.language);
  const theme = useSelector((state) => state.theme);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="text-light dark:text-dark border shadow-lg shadow-mainL dark:shadow-mainD border-mainL dark:border-mainD rounded mx-24 mt-12">
      <div className="grid grid-cols-3 items-center">
        <div className="text-parrafo text-center flex-col items-center">
          <div className="grid grid-cols-2">
            <div className="text-end pr-1">
              {language ? "Cliente:" : "Front End:"}
            </div>
            <div className="text-start pl-1">
              Javascript, React, Redux y CSS nativo
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="text-end pr-1">
              {language ? "Servidor:" : "Back End:"}
            </div>
            <div className="text-start pl-1">NodeJS.</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="text-end pr-1">
              {language ? "Base de datos:" : "Database:"}
            </div>
            <div className="text-start pl-1">Sequalize y SQL.</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="text-end pr-1">
              {language ? "Repositorios:" : "Repositories:"}
            </div>
            <div className="text-start pl-1 flex">
              <a
                href="https://github.com/FrancoA56/BackEndRYMHenry"
                target="_blank"
                rel="noreferrer"
                className="text-mainL dark:text-mainD mr-4"
              >
                {language ? "Servidor" : "Back"}
              </a>
              <a
                href="https://github.com/FrancoA56/FrontEndRYMHenry"
                target="_blank"
                rel="noreferrer"
                className="text-mainL dark:text-mainD "
              >
                {language ? "Cliente" : "Front"}
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={openModal}
              className="mt-4 p-2 bg-mainL dark:bg-mainD text-white rounded"
            >
              {language ? "Ver más" : "See more"}
            </button>
          </div>
        </div>
        <div className="w-11/12 col-span-2 my-6">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={52}
            totalSlides={7}
          >
            <Slider className="my-auto">
              <Slide index={0}>
                <img
                  src={RYMHome1}
                  alt="RYMHome1"
                  className="transform transition-transform hover:scale-110"
                />
              </Slide>
              <Slide index={1}>
                <img
                  src={RYMHome2}
                  alt="RYMHome2"
                  className="transform transition-transform hover:scale-110"
                />
              </Slide>
              <Slide index={2}>
                <img
                  src={RYMAbout}
                  alt="RYMAbout"
                  className="transform transition-transform hover:scale-110"
                />
              </Slide>
              <Slide index={3}>
                <img
                  src={RYMDetail}
                  alt="RYMDetail"
                  className="transform transition-transform hover:scale-110"
                />
              </Slide>
              <Slide index={4}>
                <img
                  src={RYMFavorites}
                  alt="RYMFavorites"
                  className="transform transition-transform hover:scale-110"
                />
              </Slide>
              <Slide index={5}>
                <img
                  src={RYMLogin1}
                  alt="RYMLogin1"
                  className="transform transition-transform hover:scale-110"
                />
              </Slide>
              <Slide index={6}>
                <img
                  src={RYMLogin2}
                  alt="RYMLogin2"
                  className="transform transition-transform hover:scale-110"
                />
              </Slide>
            </Slider>
            <div className="flex justify-center mx-auto items-center">
              <ButtonBack>
                <span className="material-symbols-outlined">
                  navigate_before
                </span>
              </ButtonBack>
              <ButtonNext>
                <span className="material-symbols-outlined">navigate_next</span>
              </ButtonNext>
            </div>
          </CarouselProvider>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={getCustomStyles(theme)}
        contentLabel="Descripción del proyecto"
      >
        <h2 className="text-center mb-4">
          {language ? "Descripción del Proyecto" : "Project Description"}
        </h2>
        <div>
          {language ? (
            <div className="pr-10 pl-4 pb-10 pt-4">
              Una Single Page Application (SPA) que consume datos de una API externa
              y permite la visualización de información general y detallada de más
              de 500,000 videojuegos. Entre las funcionalidades que dispone esta
              APP, se encuentra la capacidad de filtrar y ordenar videojuegos por
              diferentes variables, como género, plataformas, nombre y calificación.
              Además, la aplicación permite la creación de nuevos videojuegos a
              través de un formulario controlado, y también ofrece la funcionalidad
              de registro e inicio de sesión para usuarios autenticados.
            </div>
          ) : (
            <div className="pr-10 pl-4 pb-10 pt-4">
              A Single Page Application (SPA) that consumes data from an external
              API and allows the display of both general and detailed information on
              over 500,000 video games. This app features the ability to filter and
              sort video games by various criteria, such as genre, platforms, name,
              and rating. Additionally, the application allows for the creation of
              new video games through a controlled form and also offers user
              registration and login functionality for authenticated users.
            </div>
          )}
        </div>
        <button
          onClick={closeModal}
          className="mt-4 p-2 bg-mainL dark:bg-mainD text-white rounded mx-auto block"
        >
          {language ? "Cerrar" : "Close"}
        </button>
      </Modal>
    </div>
  );
}

export default RickAndMorty;
