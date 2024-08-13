import React, { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import CosInicio from "../utils/image/proyectos/cos/inicio.png"
import CosPopUp from "../utils/image/proyectos/cos/pop up.png"
import CosServicios from "../utils/image/proyectos/cos/servicios.png"
import CosFooter from "../utils/image/proyectos/cos/footer.png"
import CosContacto from "../utils/image/proyectos/cos/contacto.png"
import CosAbout from "../utils/image/proyectos/cos/about.png"
import CosSupply from "../utils/image/proyectos/cos/supply.png"
import WsAbout from "../utils/image/proyectos/ws-dyr/about.png"
import WsCarrousel from "../utils/image/proyectos/ws-dyr/carrousel.png"
import WsContacto from "../utils/image/proyectos/ws-dyr/contacto.png"
import WsFooter from "../utils/image/proyectos/ws-dyr/footer.png"
import WsForm from "../utils/image/proyectos/ws-dyr/form.png"
import WsInicio from "../utils/image/proyectos/ws-dyr/inicio.png"
import WsMarca from "../utils/image/proyectos/ws-dyr/marca.png"
import WsMarcas from "../utils/image/proyectos/ws-dyr/marcas.png"
import WsNav from "../utils/image/proyectos/ws-dyr/nav.png"


function Proyectos() {
  const [masCos, setMasCos] = useState(false);
  const [masWs, setMasWs] = useState(false);

  const verCos = () => {
    setMasCos(!masCos);
  };
  const verWs = () => {
    setMasWs(!masWs);
  };

  return (
    <div className="mt-24">
      <div className="text-light text-semititulo dark:text-dark mb-4">
        Proyectos Laborales
      </div>
      <div className="text-light dark:text-dark border pt-6 pl-6 mb-10 shadow-lg shadow-mainL dark:shadow-mainD border-mainL dark:border-mainD rounded">
        <div className=" text-subtitulo mb-8">COS Logistics</div>
        <div className="grid grid-cols-2">
          <div className="text-parrafo text-center flex-col justify-start pr-20">
            <div className="grid grid-cols-2">
              <div className="text-end pr-1">Cliente: </div>
              <div className="text-start pl-1">
                Javascript
              </div>
            </div>
            
            <a
              href="https://www.ws-dyr.com/"
              target="_blank"
              rel="noreferrer"
              className="text-mainL dark:text-mainD"
            >
              Deploy
            </a>
            <div className="mt-6">
              {!masWs ? (
                <button
                  onClick={verWs}
                  className="transform transition-transform hover:scale-125"
                >
                  <span class="material-symbols-outlined">
                    keyboard_double_arrow_down
                  </span>
                </button>
              ) : (
                <button
                  onClick={verWs}
                  className="transform transition-transform hover:scale-125"
                >
                  <span class="material-symbols-outlined">
                    keyboard_double_arrow_up
                  </span>
                </button>
              )}
            </div>
          </div>
          <div className="w-11/12">
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={52}
              totalSlides={9}
            >
              <div className="">
                <Slider>
                  <Slide index={0}>
                    {" "}
                    <img
                      src={WsInicio}
                      alt="WholesaleInicio"
                      className="transform transition-transform hover:scale-110"
                    />{" "}
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
                <div className="flex justify-center gap-3 mt-2">
                  <ButtonBack>
                    <span class="material-symbols-outlined">
                      navigate_before
                    </span>
                  </ButtonBack>
                  <ButtonNext>
                    <span class="material-symbols-outlined">navigate_next</span>
                  </ButtonNext>
                </div>
              </div>
            </CarouselProvider>
          </div>
        </div>
        {masWs && (
          <div className="pr-10 pl-4 pb-10 pt-4">
            Un E-commerce de venta de plantillas web prediseñadas, las cuales se
            pueden visualizar e incluso modificar sus colores para una
            personalización específica de cada usuario, incluyendo el logo,
            nombre y un breve resumen del mismo también explícito en la
            plantilla. En la tienda, se pueden filtrar estas plantillas por
            categoría, tipo, nombre, precio y color, permitiendo agregarlas al
            carrito de compras y el usuario tiene la posibilidad de elegir un
            servicio con o sin deployment para luego llegar a la pasarela de
            pago a través de PayPal. Además, se incluye la funcionalidad de
            registro, inicio de sesión y recuperación de contraseña por medio
            del correo del usuario, el cual también cuenta con registro de
            terceros a través de Google y Github. Para una mejor administración
            de la página, el usuario administrador puede acceder al Panel de
            Administración y gestionar a los usuarios, agregar y editar
            productos, revisar las reseñas de los usuarios y confirmar y
            controlar las compras efectuadas.
          </div>
        )}
      </div>
      <div className="text-light dark:text-dark border pt-6 pl-6 mb-10 shadow-lg shadow-mainL dark:shadow-mainD border-mainL dark:border-mainD rounded">
        <div className=" text-subtitulo mb-8">COS Logistics</div>
        <div className="grid grid-cols-2">
          <div className="text-parrafo text-center flex-col justify-start pr-20">
            <div className="grid grid-cols-2">
              <div className="text-end pr-1">Cliente: </div>
              <div className="text-start pl-1">
                Wordpress
              </div>
            </div>
            
            <a
              href="https://cos-logistics.com"
              target="_blank"
              rel="noreferrer"
              className="text-mainL dark:text-mainD"
            >
              Deploy
            </a>
            <div className="mt-6">
              {!masCos ? (
                <button
                  onClick={verCos}
                  className="transform transition-transform hover:scale-125"
                >
                  <span class="material-symbols-outlined">
                    keyboard_double_arrow_down
                  </span>
                </button>
              ) : (
                <button
                  onClick={verCos}
                  className="transform transition-transform hover:scale-125"
                >
                  <span class="material-symbols-outlined">
                    keyboard_double_arrow_up
                  </span>
                </button>
              )}
            </div>
          </div>
          <div className="w-11/12">
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={52}
              totalSlides={7}
            >
              <div className="">
                <Slider>
                  <Slide index={0}>
                    {" "}
                    <img
                      src={CosInicio}
                      alt="homeLightCTT"
                      className="transform transition-transform hover:scale-110"
                    />{" "}
                  </Slide>
                  <Slide index={1}>
                    <img
                      src={CosPopUp}
                      alt="homeDarkCTT"
                      className="transform transition-transform hover:scale-110"
                    />
                  </Slide>
                  <Slide index={2}>
                    <img
                      src={CosServicios}
                      alt="detailCTT"
                      className="transform transition-transform hover:scale-110"
                    />
                  </Slide>
                  <Slide index={3}>
                    <img
                      src={CosFooter}
                      alt="previewCTT"
                      className="transform transition-transform hover:scale-110"
                    />
                  </Slide>
                  <Slide index={4}>
                    <img
                      src={CosContacto}
                      alt="previewEditedCTT"
                      className="transform transition-transform hover:scale-110"
                    />
                  </Slide>
                  <Slide index={5}>
                    <img
                      src={CosAbout}
                      alt="shopCTT"
                      className="transform transition-transform hover:scale-110"
                    />
                  </Slide>
                  <Slide index={6}>
                    <img
                      src={CosSupply}
                      alt="cartCTT"
                      className="transform transition-transform hover:scale-110"
                    />
                  </Slide>
                </Slider>
                <div className="flex justify-center gap-3 mt-2">
                  <ButtonBack>
                    <span class="material-symbols-outlined">
                      navigate_before
                    </span>
                  </ButtonBack>
                  <ButtonNext>
                    <span class="material-symbols-outlined">navigate_next</span>
                  </ButtonNext>
                </div>
              </div>
            </CarouselProvider>
          </div>
        </div>
        {masCos && (
          <div className="pr-10 pl-4 pb-10 pt-4">
            Un E-commerce de venta de plantillas web prediseñadas, las cuales se
            pueden visualizar e incluso modificar sus colores para una
            personalización específica de cada usuario, incluyendo el logo,
            nombre y un breve resumen del mismo también explícito en la
            plantilla. En la tienda, se pueden filtrar estas plantillas por
            categoría, tipo, nombre, precio y color, permitiendo agregarlas al
            carrito de compras y el usuario tiene la posibilidad de elegir un
            servicio con o sin deployment para luego llegar a la pasarela de
            pago a través de PayPal. Además, se incluye la funcionalidad de
            registro, inicio de sesión y recuperación de contraseña por medio
            del correo del usuario, el cual también cuenta con registro de
            terceros a través de Google y Github. Para una mejor administración
            de la página, el usuario administrador puede acceder al Panel de
            Administración y gestionar a los usuarios, agregar y editar
            productos, revisar las reseñas de los usuarios y confirmar y
            controlar las compras efectuadas.
          </div>
        )}
      </div>
      </div>
  );
}

export default Proyectos;
