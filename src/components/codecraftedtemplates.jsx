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

function CTT() {
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
              {language ? "Cliente:" : "Front End:"}
            </div>
            <div className="text-start pl-1">
              Javascript, React, Redux, TailwindCSS.
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="text-end pr-1">
              {language ? "Servidor:" : "Back End:"}
            </div>
            <div className="text-start pl-1">Typescript, NodeJS.</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="text-end pr-1">
              {language ? "Base de datos:" : "Database:"}
            </div>
            <div className="text-start pl-1">Sequelize, SQL.</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="text-end pr-1">
              {language ? "Panel de Administrador:" : "Admin Panel:"}
            </div>
            <div className="text-start pl-1">React-Admin</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="text-end pr-1">
              {language ? "Repositorios:" : "Repositories:"}
            </div>
            <div className="text-start pl-1 flex">
              <a
                href="https://github.com/FrancoA56/FinalProjectServer"
                target="_blank"
                rel="noreferrer"
                className="text-mainL dark:text-mainD mr-4"
              >
                {language ? "Servidor" : "Back"}
              </a>
              <a
                href="https://github.com/FrancoA56/FinalProjectClient"
                target="_blank"
                rel="noreferrer"
                className="text-mainL dark:text-mainD"
              >
                {language ? "Cliente" : "Front"}
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <a
              href="https://codecraftedtemplates.vercel.app/"
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
            totalSlides={13}
          >
            <Slider className="my-auto">
              <Slide index={0}>
                <img
                  src={homeLight}
                  alt="homeLightCTT"
                  className="transform transition-transform hover:scale-110"
                />
              </Slide>
              <Slide index={1}>
                <img
                  src={homeDark}
                  alt="homeDarkCTT"
                  className="transform transition-transform hover:scale-110"
                />
              </Slide>
              <Slide index={2}>
                <img
                  src={login}
                  alt="loginCTT"
                  className="transform transition-transform hover:scale-110"
                />
              </Slide>
              <Slide index={3}>
                <img
                  src={register}
                  alt="registerCTT"
                  className="transform transition-transform hover:scale-110"
                />
              </Slide>
              <Slide index={4}>
                <img
                  src={profile}
                  alt="profileCTT"
                  className="transform transition-transform hover:scale-110"
                />
              </Slide>
              <Slide index={5}>
                <img
                  src={shop}
                  alt="shopCTT"
                  className="transform transition-transform hover:scale-110"
                />
              </Slide>
              <Slide index={6}>
                <img
                  src={cart}
                  alt="cartCTT"
                  className="transform transition-transform hover:scale-110"
                />
              </Slide>
              <Slide index={7}>
                <img
                  src={detail}
                  alt="detailCTT"
                  className="transform transition-transform hover:scale-110"
                />
              </Slide>
              <Slide index={8}>
                <img
                  src={pay}
                  alt="payCTT"
                  className="transform transition-transform hover:scale-110"
                />
              </Slide>
              <Slide index={9}>
                <img
                  src={preview}
                  alt="previewCTT"
                  className="transform transition-transform hover:scale-110"
                />
              </Slide>
              <Slide index={10}>
                <img
                  src={previewEdited}
                  alt="previewEditedCTT"
                  className="transform transition-transform hover:scale-110"
                />
              </Slide>
              <Slide index={11}>
                <img
                  src={panelAdmin}
                  alt="panelAdminCTT"
                  className="transform transition-transform hover:scale-110"
                />
              </Slide>
              <Slide index={12}>
                <img
                  src={team}
                  alt="teamCTT"
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
              Un E-commerce de venta de plantillas web prediseñadas, las cuales
              se pueden visualizar e incluso modificar sus colores para una
              personalización específica de cada usuario, incluyendo el logo,
              nombre y un breve resumen del mismo también explícito en la
              plantilla. En la tienda, se pueden filtrar estas plantillas por
              categoría, tipo, nombre, precio y color, permitiendo agregarlas al
              carrito de compras y el usuario tiene la posibilidad de elegir un
              servicio con o sin deployment para luego llegar a la pasarela de
              pago a través de PayPal. Además, se incluye la opción de elegir
              entre un tema claro y oscuro.
            </div>
          ) : (
            <div className="pr-10 pl-4 pb-10 pt-4">
              An E-commerce site that sells pre-designed web templates, which
              users can preview and customize by modifying colors, logos, names,
              and summaries. Templates can be filtered by category, type, name,
              price, and color, and added to a shopping cart. Users can choose a
              service with or without deployment before proceeding to payment
              via PayPal. The site also includes options for light and dark
              themes.
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

export default CTT;
