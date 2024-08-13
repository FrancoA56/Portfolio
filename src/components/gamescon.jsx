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

function GamesCon() {
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
        <div className="text-parrafo text-center flex-col justify-start pr-20">
          <div className="grid grid-cols-2">
            <div className="text-end pr-1">
              {language ? "Cliente:" : "Client:"}
            </div>
            <div className="text-start pl-1">
              Javascript, React, Redux, TailwindCSS.
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="text-end pr-1">
              {language ? "Servidor:" : "Server:"}
            </div>
            <div className="text-start pl-1">Typescript, NodeJS.</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="text-end pr-1">
              {language ? "Base de datos:" : "Database:"}
            </div>
            <div className="text-start pl-1">Sequelize y SQL.</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="text-end pr-1">
              {language ? "Panel admin:" : "Admin Panel:"}
            </div>
            <div className="text-start pl-1">React-Admin</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="text-end pr-1">
              {language ? "Repositorios:" : "Repositories:"}
            </div>
            <div className="text-start pl-1">
              <a
                href="https://github.com/FrancoA56/GameConServer"
                target="_blank"
                rel="noreferrer"
                className="text-mainL dark:text-mainD mr-4"
              >
                {language ? "Servidor" : "Server"}
              </a>
              <a
                href="https://github.com/FrancoA56/GameConClient"
                target="_blank"
                rel="noreferrer"
                className="text-mainL dark:text-mainD"
              >
                {language ? "Cliente" : "Client"}
              </a>
            </div>
          </div>
          <a
            href="https://gamecon.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="text-mainL dark:text-mainD"
          >
            {language ? "Deploy" : "Deploy"}
          </a>
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
            totalSlides={8}
          >
            <div>
              <Slider>
                <Slide index={0}>
                  <img
                    src={home}
                    alt="homeGameCon"
                    className="transform transition-transform hover:scale-110"
                  />
                </Slide>
                <Slide index={1}>
                  <img
                    src={detail}
                    alt="detailGameCon"
                    className="transform transition-transform hover:scale-110"
                  />
                </Slide>
                <Slide index={2}>
                  <img
                    src={cart}
                    alt="cartGameCon"
                    className="transform transition-transform hover:scale-110"
                  />
                </Slide>
                <Slide index={3}>
                  <img
                    src={gameDetail}
                    alt="gameDetailGameCon"
                    className="transform transition-transform hover:scale-110"
                  />
                </Slide>
                <Slide index={4}>
                  <img
                    src={filtros}
                    alt="filtrosGameCon"
                    className="transform transition-transform hover:scale-110"
                  />
                </Slide>
                <Slide index={5}>
                  <img
                    src={login}
                    alt="loginGameCon"
                    className="transform transition-transform hover:scale-110"
                  />
                </Slide>
                <Slide index={6}>
                  <img
                    src={register}
                    alt="registerGameCon"
                    className="transform transition-transform hover:scale-110"
                  />
                </Slide>
                <Slide index={7}>
                  <img
                    src={adminPanel}
                    alt="adminPanelGameCon"
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
                  <span className="material-symbols-outlined">
                    navigate_next
                  </span>
                </ButtonNext>
              </div>
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
        <h2 className="text-center mb-4">
          {language ? "Descripción del Proyecto" : "Project Description"}
        </h2>
        <div>
          {language ? (
            <div className="pr-10 pl-4 pb-10 pt-4">
              Un E-commerce de videojuegos en el que los usuarios pueden
              explorar diferentes juegos, agregarlos al carrito de compras y
              proceder a realizar el pago. El sistema permite a los usuarios
              registrarse, iniciar sesión y gestionar sus perfiles. Incluye una
              vista de los detalles del juego, una sección para administrar el
              carrito, y un panel de administración para los administradores del
              sitio que facilita la gestión de productos, usuarios y pedidos.
            </div>
          ) : (
            <div className="pr-10 pl-4 pb-10 pt-4">
              A Single Page Application (SPA) that consumes data from an
              external API and enables the visualization of general and detailed
              information for over 500,000 video games. This app offers various
              functionalities, including the ability to filter and sort video
              games based on different variables such as genre, platforms, name,
              and rating. Additionally, the application allows users to create
              new video games through a controlled form and also provides user
              registration and login functionalities for authenticated users.
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

export default GamesCon;
