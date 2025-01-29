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
import WsAbout from "../utils/image/proyectos/ws-dyr/about.png";
import WsCarrousel from "../utils/image/proyectos/ws-dyr/carrousel.png";
import WsContacto from "../utils/image/proyectos/ws-dyr/contacto.png";
import WsFooter from "../utils/image/proyectos/ws-dyr/footer.png";
import WsForm from "../utils/image/proyectos/ws-dyr/form.png";
import WsInicio from "../utils/image/proyectos/ws-dyr/inicio.png";
import WsMarca from "../utils/image/proyectos/ws-dyr/marca.png";
import WsMarcas from "../utils/image/proyectos/ws-dyr/marcas.png";
import WsNav from "../utils/image/proyectos/ws-dyr/nav.png";
import { useSelector } from "react-redux";

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

function Wholesale() {
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
              Javascript, React, TailwindCSS.
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
              {language ? "Repositorios:" : "Repositories:"}
            </div>
            <div className="text-start pl-1 flex">
              <a
                href="https://github.com/FrancoA56/Wholesale"
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
              href="https://www.ws-dyr.com/"
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
                    alt={`Wholesale ${index}`}
                    loading="lazy"
                    className="rounded shadow-lg hover:scale-105 transition-transform"
                  />
                </Slide>
              ))}
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
              pago a través de PayPal. Además, se incluye la funcionalidad de
              registro, inicio de sesión y recuperación de contraseña por medio
              del correo del usuario, el cual también cuenta con registro de
              terceros a través de Google y Github. Para una mejor
              administración de la página, el usuario administrador puede
              acceder al Panel de Administración y gestionar a los usuarios,
              agregar y editar productos, revisar las reseñas de los usuarios y
              confirmar y controlar las compras efectuadas.
            </div>
          ) : (
            <div className="pr-10 pl-4 pb-10 pt-4">
              An E-commerce platform for selling pre-designed web templates,
              which can be previewed and even have their colors modified for
              specific customization by each user, including the logo, name, and
              a brief summary, all of which are explicitly displayed in the
              template. In the store, these templates can be filtered by
              category, type, name, price, and color, allowing users to add them
              to their shopping cart. Users have the option to choose a service
              with or without deployment before proceeding to the PayPal payment
              gateway. Additionally, it includes registration, login, and
              password recovery functionalities via user email, along with third
              party registration through Google and Github. For better page
              management, the admin user can access the Admin Panel to manage
              users, add and edit products, review user feedback, and confirm
              and control purchases made.
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

export default Wholesale;
