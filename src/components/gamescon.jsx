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
import home from "../utils/image/proyectos/proyecto GamesCon/home.jpg";
import detail from "../utils/image/proyectos/proyecto GamesCon/detail1.jpg";
import cart from "../utils/image/proyectos/proyecto GamesCon/create2.jpg";
import gameDetail from "../utils/image/proyectos/proyecto GamesCon/detail2.jpg";
import filtros from "../utils/image/proyectos/proyecto GamesCon/filtros.jpg";
import login from "../utils/image/proyectos/proyecto GamesCon/login.jpg";
import register from "../utils/image/proyectos/proyecto GamesCon/register.jpg";
import adminPanel from "../utils/image/proyectos/proyecto GamesCon/create1.jpg";
import { useSelector } from "react-redux";

const images = [
  home,
  detail,
  cart,
  gameDetail,
  filtros,
  login,
  register,
  adminPanel,
];

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

function GamesCon() {
  const language = useSelector((state) => state.language);
  const theme = useSelector((state) => state.theme);
  const [modalIsOpen, setModalIsOpen] = useState(false);


  return (
    <div className="text-light dark:text-dark border shadow-lg shadow-mainL dark:shadow-mainD border-mainL dark:border-mainD rounded mx-24 mt-12 bg-lightimg dark:bg-darkimg">
      <div className="grid grid-cols-3 items-center">
        <div className="text-parrafo text-center flex-col justify-start pr-20">
          <div className="grid grid-cols-2">
            <div className="text-end pr-1">
              {language ? "Cliente:" : "Client:"}
            </div>
            <div className="text-start pl-1">
              Javascript, React, Redux, CSS Nativo.
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="text-end pr-1">
              {language ? "Servidor:" : "Server:"}
            </div>
            <div className="text-start pl-1">NodeJS.</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="text-end pr-1">
              {language ? "Base de datos:" : "Database:"}
            </div>
            <div className="text-start pl-1">Sequelize y SQL.</div>
          </div>

          <div className="grid grid-cols-2">
            <div className="text-end pr-1">
              {language ? "Repositorios:" : "Repositories:"}
            </div>
            <div className="text-start pl-1">
              <a
                href="https://github.com/FrancoA56/VideoGamesBACKEND"
                target="_blank"
                rel="noreferrer"
                className="text-mainL dark:text-mainD mr-4"
              >
                {language ? "Servidor" : "Server"}
              </a>
              <a
                href="https://github.com/FrancoA56/VideoGamesFRONTEND"
                target="_blank"
                rel="noreferrer"
                className="text-mainL dark:text-mainD"
              >
                {language ? "Cliente" : "Client"}
              </a>
            </div>
          </div>

          <div className="flex justify-center my-3">
            <button
            onClick={() => setModalIsOpen(true)}
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
                    alt={`GamesCon ${index}`}
                    loading="lazy"
                    className="rounded shadow-lg hover:scale-105 transition-transform"
                  />
                </Slide>
              ))}{" "}
            </Slider>
            <div className="flex justify-center mx-auto items-center">
              <ButtonBack className="">
                <span className="material-symbols-outlined">
                  navigate_before
                </span>
              </ButtonBack>
              <ButtonNext className="">
                <span className="material-symbols-outlined">navigate_next</span>
              </ButtonNext>
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
        <h2 className="text-center mb-4">
          {language ? "Descripción del Proyecto" : "Project Description"}
        </h2>
        <div>
          {language ? (
            <div className="pr-10 pl-4 pb-10 pt-4">
              Una plataforma de E-commerce dedicada a la venta de videojuegos,
              donde los usuarios pueden registrarse, iniciar sesión, y
              administrar su cuenta. Ofrece filtrado avanzado de juegos por
              género, precio y otros criterios, además de un carrito de compras
              integrado que permite revisar y completar la compra. El
              administrador tiene acceso a un panel de control para gestionar
              productos, pedidos, y usuarios, con funcionalidades para crear,
              editar y eliminar juegos, así como para revisar el historial de
              compras.
            </div>
          ) : (
            <div className="pr-10 pl-4 pb-10 pt-4">
              An E-commerce platform dedicated to selling video games, where
              users can register, log in, and manage their accounts. It offers
              advanced filtering of games by genre, price, and other criteria,
              along with an integrated shopping cart that allows users to review
              and complete purchases. The admin has access to a control panel
              for managing products, orders, and users, with functionalities to
              create, edit, and delete games, as well as review the purchase
              history.
            </div>
          )}
        </div>
        <button
            onClick={() => setModalIsOpen(false)}
            className="mt-4 p-2 bg-mainL dark:bg-mainD text-white rounded mx-auto block"
        >
          {language ? "Cerrar" : "Close"}
        </button>
      </Modal>
    </div>
  );
}

export default GamesCon;
