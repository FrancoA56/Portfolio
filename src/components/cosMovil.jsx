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
import { FaWordpress, FaExternalLinkAlt, FaCss3 } from "react-icons/fa";
import CosInicio from "../utils/image/proyectos/cos/inicio.png";
import CosPopUp from "../utils/image/proyectos/cos/pop up.png";
import CosServicios from "../utils/image/proyectos/cos/servicios.png";
import CosFooter from "../utils/image/proyectos/cos/footer.png";
import CosContacto from "../utils/image/proyectos/cos/contacto.png";
import CosAbout from "../utils/image/proyectos/cos/about.png";
import CosSupply from "../utils/image/proyectos/cos/supply.png";

const images = [
  CosInicio,
  CosPopUp,
  CosServicios,
  CosFooter,
  CosContacto,
  CosAbout,
  CosSupply,
];

const getCustomStyles = (theme) => ({
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    maxWidth: "600px",
    maxHeight: "100%",
    height: "40%",
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

function COS() {
  const language = useSelector((state) => state.language);
  const theme = useSelector((state) => state.theme);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="text-light dark:text-dark border shadow-lg rounded mx-auto mt-8  bg-lightimg dark:bg-darkimg">
      <div className="grid grid-cols-1 gap-6 items-center px-6">
        <div className="text-center ">
          {language ? (
            <>
              <div className="text-xl mt-3">Informativa</div>
              <div className="text-lg mb-2">Logística</div>
            </>
          ) : (
            <>
              <div className="text-xl mt-3">Informative</div>
              <div className="text-lg mb-2">Logistics</div>
            </>
          )}
          <div className="flex items-center justify-center space-x-2 text-lg">
            <FaWordpress className="text-blue-500" />
            <div className="text-start pl-1">WordPress</div>
          </div>
          <div className="flex items-center justify-center space-x-2 text-lg">
            <FaCss3 className="text-blue-500" />
            <div className="text-start pl-1">CSS Nativo</div>
          </div>

          <div className="flex items-center justify-center text-justify mx-4 mt-2 text-base">
            <span className="text-start pl-1">
              Contact Form 7 - Popup Maker - WP Mail SMTP - Advanced Google
              reCAPTCHA.
            </span>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://www.cos-logistics.com/"
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
                    alt={`COS ${index + 1}`}
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={getCustomStyles(theme)}
        contentLabel="Descripción del proyecto"
      >
        <div>
          <h2 className="text-center mb-4">
            {language ? "Descripción del Proyecto" : "Project Description"}
          </h2>
          <h2 className="text-center mb-4">
            {language ? "Proyecto Profesional" : "Professional Project"}
          </h2>
          <p className="text-justify mb-4">
            {language
              ? "Sitio web corporativo de COS Logistics, una empresa global de logística. Presenta sus servicios y detalles clave de la compañía. Desarrollado en WordPress con el theme Twenty Twenty-Two y estilos CSS personalizados."
              : "Corporate website for COS Logistics, a global logistics company. Showcases its services and key company information. Built with WordPress using the Twenty Twenty-Two theme and custom CSS styling."}
          </p>
          <button
            onClick={() => setModalIsOpen(false)}
            className="mt-4 p-2 bg-mainL dark:bg-mainD text-white rounded mx-auto block"
          >
            {language ? "Cerrar" : "Close"}
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default COS;
