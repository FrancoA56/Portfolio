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

const customStyles = {
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
  },
};

Modal.setAppElement("#root");

function COS() {
  const language = useSelector((state) => state.language);
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
              {language ? "Cliente:" : "Client:"}
            </div>
            <div className="text-start pl-1">WordPress</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="text-end pr-1">{language ? "Tema" : "Theme"}:</div>
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
                  src={CosInicio}
                  alt="CosInicio"
                  className="transform transition-transform hover:scale-110"
                />
              </Slide>
              <Slide index={1}>
                <img
                  src={CosPopUp}
                  alt="CosPopUp"
                  className="transform transition-transform hover:scale-110"
                />
              </Slide>
              <Slide index={2}>
                <img
                  src={CosServicios}
                  alt="CosServicios"
                  className="transform transition-transform hover:scale-110"
                />
              </Slide>
              <Slide index={3}>
                <img
                  src={CosFooter}
                  alt="CosFooter"
                  className="transform transition-transform hover:scale-110"
                />
              </Slide>
              <Slide index={4}>
                <img
                  src={CosContacto}
                  alt="CosContacto"
                  className="transform transition-transform hover:scale-110"
                />
              </Slide>
              <Slide index={5}>
                <img
                  src={CosAbout}
                  alt="CosAbout"
                  className="transform transition-transform hover:scale-110"
                />
              </Slide>
              <Slide index={6}>
                <img
                  src={CosSupply}
                  alt="CosSupply"
                  className="transform transition-transform hover:scale-110"
                />
              </Slide>
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
        style={customStyles}
        contentLabel="Descripción del proyecto"
      >
        <h2 className="text-center mb-4">{language ? "Descripción del Proyecto" : "Proyect Description"}</h2>
        <div>
          {language ? (
            <div className="pr-10 pl-4 pb-10 pt-4">
              Un sitio web desarrollado en WordPress para COS Logistics, una
              empresa de logística mundial. Este sitio está diseñado para
              presentar de manera efectiva nuestros servicios y dar a conocer la
              empresa a un público global. La web cuenta con secciones dedicadas
              a la información detallada sobre nuestros servicios, así como un
              formulario de contacto que permite a los usuarios enviar consultas
              directamente por correo electrónico. La estructura y el diseño
              están optimizados para brindar una experiencia de usuario fluida,
              con un enfoque en la accesibilidad y la navegación intuitiva.
            </div>
          ) : (
            <div className="pr-10 pl-4 pb-10 pt-4">
              A website developed in WordPress for COS Logistics, a global
              logistics company. This site is designed to effectively showcase
              our services and introduce the company to a worldwide audience.
              The website features dedicated sections providing detailed
              information about our services, as well as a contact form that
              allows users to send inquiries directly via email. The structure
              and design are optimized to deliver a smooth user experience, with
              a focus on accessibility and intuitive navigation.
            </div>
          )}
        </div>
        <button
          onClick={closeModal}
          className="mt-4 p-2 bg-mainL dark:bg-mainD text-white rounded"
        >
          {language ? "Cerrar" : "Close"}
        </button>
      </Modal>
    </div>
  );
}

export default COS;
