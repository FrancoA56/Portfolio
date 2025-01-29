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
import {
  FaGithub,
  FaExternalLinkAlt,
  FaDatabase,
  FaToolbox,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import cart from "../utils/image/proyectos/proyecto CTT/cart.jpg";
import detail from "../utils/image/proyectos/proyecto CTT/detail.jpg";
import homeDark from "../utils/image/proyectos/proyecto CTT/homeDark.jpg";
import homeLight from "../utils/image/proyectos/proyecto CTT/homeLight.jpg";
import login from "../utils/image/proyectos/proyecto CTT/login.jpg";
import panelAdmin from "../utils/image/proyectos/proyecto CTT/panelAdmin.jpg";
import pay from "../utils/image/proyectos/proyecto CTT/pay.jpg";
import preview from "../utils/image/proyectos/proyecto CTT/preview.jpg";
import previewEdited from "../utils/image/proyectos/proyecto CTT/previewEdited.jpg";
import profile from "../utils/image/proyectos/proyecto CTT/profile.jpg";
import register from "../utils/image/proyectos/proyecto CTT/register.jpg";
import shop from "../utils/image/proyectos/proyecto CTT/shop.jpg";
import team from "../utils/image/proyectos/proyecto CTT/team.jpg";
import { useSelector } from "react-redux";

const getCustomStyles = (theme) => ({
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    maxWidth: "600px",
    maxHeight: "100%",
    height: "70%",
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

const images = [
  homeLight,
  homeDark,
  login,
  register,
  profile,
  shop,
  cart,
  detail,
  pay,
  preview,
  previewEdited,
  panelAdmin,
  team,
];

Modal.setAppElement("#root");

function CTT() {
  const language = useSelector((state) => state.language);
  const theme = useSelector((state) => state.theme);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="text-light dark:text-dark border shadow-lg rounded mx-auto mt-8  bg-lightimg dark:bg-darkimg">
      <div className="grid grid-cols-1 items-center px-6">
        <div className="text-center ">
          {language ? (
            <>
              <div className="text-xl mt-3">E-Commerce</div>
              <div className="text-lg mb-2">Venta de Plantillas Web</div>
            </>
          ) : (
            <>
              <div className="text-xl mt-3">E-Commerce</div>
              <div className="text-lg mb-2">Sale of Web Templates</div>
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
          <div className="flex items-center justify-center space-x-2 text-lg">
            <FaDatabase className="text-green-500" />
            <span>Sequelize, SQL</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-lg">
            <FaToolbox className="text-green-500" />
            <span>React-Admin</span>
          </div>
          <div className="flex justify-center items-center space-x-4 mt-2">
            <a
              href="https://github.com/FrancoA56/FinalProjectClient"
              target="_blank"
              rel="noreferrer"
              className="text-mainL dark:text-mainD flex items-center space-x-1"
            >
              <FaGithub />
              {language ? <span>Cliente</span> : <span>Client</span>}
            </a>
            <a
              href="https://github.com/FrancoA56/FinalProjectServer"
              target="_blank"
              rel="noreferrer"
              className="text-mainL dark:text-mainD flex items-center space-x-1"
            >
              <FaGithub /> <span>Server</span>
            </a>
          </div>
          <div className="flex items-center justify-center">
            <a
              href="https://codecraftedtemplates.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-mainL dark:text-mainD flex items-center space-x-1 "
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
                    alt={`CodeCraftedTemplates ${index}`}
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
            {language ? "Proyecto Académico Grupal" : "Team Academic Project"}
          </h2>
          <p className="text-justify mb-4">
            {language
              ? "E-commerce de venta de plantillas web prediseñadas, que pueden visualizarse y personalizarse cambiando colores, logo, nombre y un breve resumen del usuario dentro de la plantilla. La tienda permite filtrar las plantillas por categoría, tipo, nombre, precio y color, además de agregarlas al carrito de compras. El usuario puede optar por un servicio con o sin deployment antes de proceder al pago a través de PayPal. También incluye la opción de alternar entre un tema claro y oscuro. Cuenta con un Panel de Administración para gestionar toda la web."
              : "An e-commerce platform for selling pre-designed web templates, which can be viewed and customized by changing colors, logo, name, and a brief user description within the template. The store allows filtering templates by category, type, name, price, and color, as well as adding them to the shopping cart. Users can choose a service with or without deployment before proceeding to payment via PayPal. It also includes the option to switch between light and dark themes. An Admin Panel is available to manage the entire website."}
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

export default CTT;
