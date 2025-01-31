import React, { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import WsAbout from "../utils/image/proyectos/ws-dyr/about.png";
import WsCarrousel from "../utils/image/proyectos/ws-dyr/carrousel.png";
import WsContacto from "../utils/image/proyectos/ws-dyr/contacto.png";
import WsFooter from "../utils/image/proyectos/ws-dyr/footer.png";
import WsForm from "../utils/image/proyectos/ws-dyr/form.png";
import WsInicio from "../utils/image/proyectos/ws-dyr/inicio.png";
import WsMarca from "../utils/image/proyectos/ws-dyr/marca.png";
import WsMarcas from "../utils/image/proyectos/ws-dyr/marcas.png";
import WsNav from "../utils/image/proyectos/ws-dyr/nav.png";

const images = [
  WsInicio,
  WsMarca,
  WsForm,
  WsFooter,
  WsMarcas,
  WsNav,
  WsContacto,
  WsCarrousel,
  WsAbout,
];

const getCustomStyles = (theme) => ({
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    maxWidth: "600px",
    maxHeight: "100%",
    height: "60%",
    padding: "20px",
    borderRadius: "8px",
    background: theme === "dark" ? "#333" : "#fff",
    color: theme === "dark" ? "#fff" : "#333",
  },
  overlay: {
    backgroundColor:
      theme === "dark" ? "rgba(0, 0, 0, 0.60)" : "rgba(255, 255, 255, 0.60)",
  },
});

Modal.setAppElement("#root");

function Wholesale() {
  const language = useSelector((state) => state.language);
  const theme = useSelector((state) => state.theme);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="text-light dark:text-dark border shadow-lg rounded mx-auto mt-8  bg-lightimg dark:bg-darkimg">
      <div className="grid grid-cols-1 gap-6 items-center px-6">
        {/* Información del Proyecto */}
        <div className="text-center ">
          {language ? (
            <>
              <div className="text-xl mt-3">Catálogo</div>
              <div className="text-lg mb-2">Venta Mayorista</div>
            </>
          ) : (
            <>
              <div className="text-xl mt-3">Catalog</div>
              <div className="text-lg mb-2">Wholesale</div>
            </>
          )}

          <div className="flex items-center justify-center space-x-2 text-lg">
            <FaJs className="text-blue-500" />
            <span>Javascript, Redux</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-lg">
            <FaReact className="text-blue-500" />
            <span>React, TailwindCSS</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-lg">
            <FaNodeJs className="text-green-500" />
            <span>Node.js, TypeScript</span>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://github.com/FrancoA56/Wholesale"
              target="_blank"
              rel="noreferrer"
              className="text-mainL dark:text-mainD flex items-center space-x-1"
            >
              <FaGithub />
              {language ? <span>Cliente</span> : <span>Client</span>}
            </a>
            <a
              href="https://www.ws-dyr.com/"
              target="_blank"
              rel="noreferrer"
              className="text-mainL dark:text-mainD flex items-center space-x-1"
            >
              <FaExternalLinkAlt /> <span>Deploy</span>
            </a>
          </div>
          <button
            onClick={() => setModalIsOpen(true)}
            className="mt-4 p-1 bg-mainL dark:bg-mainD text-white rounded px-6 shadow-md hover:bg-mainD dark:hover:bg-mainL transition"
          >
            {language ? "Ver más" : "See more"}
          </button>
        </div>

        {/* Carrusel de Imágenes */}
        <div className="w-full">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={45}
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
                    alt={`Wholesale ${index}`}
                    loading="lazy"
                    className="rounded shadow-lg hover:scale-105 transition-transform"
                  />
                </Slide>
              ))}
            </Slider>
            <div className="flex justify-center space-x-4 my-4">
              <ButtonBack className="text-2xl">⬅️</ButtonBack>
              <DotGroup className="flex space-x-2" />
              <ButtonNext className="text-2xl">➡️</ButtonNext>
            </div>
          </CarouselProvider>
        </div>
      </div>

      {/* Modal */}
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
            {language ? "Proyecto Profesional" : "Professional Project"}
          </h2>
          <p className="text-justify mb-4">
            {language
              ? "Sitio web corporativo de Wholesale by D&R, una aplicación web de una sola página (SPA) que presenta un catálogo de productos de marcas internacionales disponibles para venta mayorista. La plataforma adapta la oferta según el país, ya que algunas marcas no están disponibles en ciertas regiones. Además, cuenta con un servidor desarrollado con Node.js y TypeScript para gestionar el envío de correos electrónicos."
              : "Corporate website for Wholesale by D&R, a single-page application (SPA) showcasing a catalog of international brand products available for wholesale. The platform adapts the product offerings based on the country, as some brands may not be available in certain regions. Additionally, it features a server built with Node.js and TypeScript to handle email delivery."}
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

export default Wholesale;
