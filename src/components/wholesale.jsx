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

function Wholesale() {
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
              <div className="text-light dark:text-dark mr-4">
                {language ? "Servidor" : "Back"}</div>
              <a
                href="https://github.com/FrancoA56/Wholesale"
                target="_blank"
                rel="noreferrer"
                className="text-mainL dark:text-mainD "
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
              {language ? "URL" : "Deploy" }
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
            totalSlides={9}
          >
            <Slider className="my-auto">
              <Slide index={0}>
                <img
                  src={WsInicio}
                  alt="WholesaleInicio"
                  className="transform transition-transform hover:scale-110"
                />
              </Slide>
              <Slide index={1}>
                <img
                  src={WsMarca}
                  alt="WholesaleMarca"
                  className="transform transition-transform hover:scale-110"
                />
              </Slide>
              <Slide index={2}>
                <img
                  src={WsForm}
                  alt="WholesaleForm"
                  className="transform transition-transform hover:scale-110"
                />
              </Slide>
              <Slide index={3}>
                <img
                  src={WsFooter}
                  alt="WholesaleFooter"
                  className="transform transition-transform hover:scale-110"
                />
              </Slide>
              <Slide index={4}>
                <img
                  src={WsMarcas}
                  alt="WholesaleMarcas"
                  className="transform transition-transform hover:scale-110"
                />
              </Slide>
              <Slide index={5}>
                <img
                  src={WsNav}
                  alt="WholesaleNav"
                  className="transform transition-transform hover:scale-110"
                />
              </Slide>
              <Slide index={6}>
                <img
                  src={WsContacto}
                  alt="WholesaleContacto"
                  className="transform transition-transform hover:scale-110"
                />
              </Slide>
              <Slide index={7}>
                <img
                  src={WsCarrousel}
                  alt="WholesaleCarrousel"
                  className="transform transition-transform hover:scale-110"
                />
              </Slide>
              <Slide index={8}>
                <img
                  src={WsAbout}
                  alt="WholesaleAbout"
                  className="transform transition-transform hover:scale-110"
                />
              </Slide>
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
        style={customStyles}
        contentLabel="Descripción del proyecto"
      >
        <h2 className="text-center mb-4">{language ? "Descripción del Proyecto" : "Proyect Description"}</h2>
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
              gateway. Additionally, the platform includes registration, login,
              and password recovery functionalities through the user's email.
              Users can also register through third-party platforms like Google
              and Github. For better website management, the admin user can
              access the Admin Panel to manage users, add and edit products,
              review user reviews, and confirm and monitor completed purchases.
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

export default Wholesale;