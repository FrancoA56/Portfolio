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
import CosInicio from "../utils/image/proyectos/cos/inicio.png";
import CosPopUp from "../utils/image/proyectos/cos/pop up.png";
import CosServicios from "../utils/image/proyectos/cos/servicios.png";
import CosFooter from "../utils/image/proyectos/cos/footer.png";
import CosContacto from "../utils/image/proyectos/cos/contacto.png";
import CosAbout from "../utils/image/proyectos/cos/about.png";
import CosSupply from "../utils/image/proyectos/cos/supply.png";
import { useSelector } from "react-redux";

const images = [
  CosInicio,
  CosPopUp,
  CosServicios,
  CosFooter,
  CosContacto,
  CosAbout,
  CosSupply,
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
      theme === "dark" ? "rgba(0, 0, 0, 0.60)" : "rgba(255, 255, 255, 0.60)", // Fondo alrededor del modal
  },
});

Modal.setAppElement("#root");

function COS() {
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
    <div className="text-light dark:text-dark border shadow-lg shadow-mainL dark:shadow-mainD border-mainL dark:border-mainD rounded mx-24 mt-12 bg-lightimg dark:bg-darkimg">
      <div className="grid grid-cols-3 items-center">
        <div className="text-parrafo text-center flex-col items-center">
          <div className="grid grid-cols-2">
            <div className="text-end pr-1">
              {language ? "Cliente:" : "Client:"}
            </div>
            <div className="text-start pl-1">WordPress</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="text-end pr-1">{language ? "Tema:" : "Theme:"}</div>
            <div className="text-start pl-1">Twenty Twenty-Two</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="text-end pr-1">Plugins:</div>
            <div className="text-start pl-1">
              Contact Form 7 - Popup Maker - WP Mail SMTP - Advanced Google
              reCAPTCHA.
            </div>
          </div>
          <div className="flex justify-center">
            <a
              href="https://cos-logistics.com"
              target="_blank"
              rel="noreferrer"
              className="text-mainL dark:text-mainD font-semibold"
            >
              {language ? "URL" : "Deploy"}
            </a>
          </div>
          <div className="flex justify-center my-3">
            <button
              onClick={openModal}
              className="mt-4 p-2 bg-mainL dark:bg-mainD text-white rounded px-6 shadow-md shadow-light hover:bg-mainD dark:hover:bg-mainL hover:color-light transition ease-in-out"
            >
              {language ? "Ver más" : "See more"}
            </button>
          </div>
        </div>
        <div className="w-11/12 col-span-2 my-6">
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
                    alt={`COS ${index + 1}`}
                    loading="lazy"
                    className="rounded shadow-lg hover:scale-105 transition-transform"
                  />
                </Slide>
              ))}
            </Slider>
            <div className="flex justify-center gap-3 mt-2">
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
              Un sitio web corporativo que presenta los servicios y la
              información de la empresa COS Logistics, una compañía global de
              logística. El sitio está diseñado para proporcionar una
              experiencia de usuario fácil e intuitiva, con un enfoque en la
              claridad y la accesibilidad. Los usuarios pueden contactar a la
              empresa a través de formularios integrados y obtener información
              detallada sobre los servicios ofrecidos.
            </div>
          ) : (
            <div className="pr-10 pl-4 pb-10 pt-4">
              A corporate website showcasing the services and information of COS
              Logistics, a global logistics company. The site is designed to
              provide a user-friendly and intuitive experience, with a focus on
              clarity and accessibility. Users can contact the company through
              integrated forms and obtain detailed information about the
              services offered.
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

export default COS;
