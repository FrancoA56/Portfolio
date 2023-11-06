import React, { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import GamesConCreate1 from "../utils/image/proyectos/proyecto GamesCon/create1.jpg";
import GamesConCreate2 from "../utils/image/proyectos/proyecto GamesCon/create2.jpg";
import GamesConDetail1 from "../utils/image/proyectos/proyecto GamesCon/detail1.jpg";
import GamesConDetail2 from "../utils/image/proyectos/proyecto GamesCon/detail2.jpg";
import GamesConFiltros from "../utils/image/proyectos/proyecto GamesCon/filtros.jpg";
import GamesConHome from "../utils/image/proyectos/proyecto GamesCon/home.jpg";
import GamesConLogin from "../utils/image/proyectos/proyecto GamesCon/login.jpg";
import GamesConRegister from "../utils/image/proyectos/proyecto GamesCon/register.jpg";
import RYMAbout from "../utils/image/proyectos/proyecto rickandmorty/about.jpg";
import RYMDetail from "../utils/image/proyectos/proyecto rickandmorty/detail.jpg";
import RYMFavorites from "../utils/image/proyectos/proyecto rickandmorty/favorites.jpg";
import RYMHome1 from "../utils/image/proyectos/proyecto rickandmorty/home.jpg";
import RYMHome2 from "../utils/image/proyectos/proyecto rickandmorty/home2.jpg";
import RYMLogin1 from "../utils/image/proyectos/proyecto rickandmorty/login.jpg";
import RYMLogin2 from "../utils/image/proyectos/proyecto rickandmorty/loginMarcado.jpg";
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

function Proyectos() {
  const [masVideogames, setMasVideogames] = useState(false);
  const [masRYM, setMasRYM] = useState(false);
  const [masCCT, setMasCTT] = useState(false);

  const verVideogames = () => {
    setMasVideogames(!masVideogames);
  };

  const verRYM = () => {
    setMasRYM(!masRYM);
  };

  const verCTT = () => {
    setMasCTT(!masCCT);
  };

  return (
    <div className="mt-24">
      <div className="text-light text-semititulo dark:text-dark mb-4">
        Proyectos
      </div>
      <div className="text-light dark:text-dark border pt-6 pl-6 mb-10 shadow-lg shadow-mainL dark:shadow-mainD border-mainL dark:border-mainD rounded">
        <div className=" text-subtitulo mb-8">App CodeCraftedTemplates</div>
        <div className="grid grid-cols-2">
          <div className="text-parrafo text-center flex-col justify-start pr-20">
            <div className="grid grid-cols-2">
              <div className="text-end pr-1">Cliente: </div>
              <div className="text-start pl-1">
                Javascript, React, Redux, TailwindCSS.
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="text-end pr-1">Servidor: </div>
              <div className="text-start pl-1">Typescript, NodeJS.</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="text-end pr-1">Base de datos:</div>
              <div className="text-start pl-1"> Sequalize y SQL.</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="text-end pr-1">Panel admin:</div>
              <div className="text-start pl-1"> React-Admin</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="text-end pr-1">Repositorios:</div>
              <div className="text-start pl-1">
                <a
                  href="https://github.com/FrancoA56/FinalProjectServer"
                  target="_blank"
                  rel="noreferrer"
                  className="text-mainL dark:text-mainD mr-4"
                >
                  Servidor
                </a>
                <a
                  href="https://github.com/FrancoA56/FinalProjectClient"
                  target="_blank"
                  rel="noreferrer"
                  className="text-mainL dark:text-mainD "
                >
                  Cliente
                </a>
              </div>
            </div>
            <a
              href="https://codecraftedtemplates.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-mainL dark:text-mainD"
            >
              Deploy
            </a>
            <div className="mt-6">
              {!masCCT ? (
                <button
                  onClick={verCTT}
                  className="transform transition-transform hover:scale-125"
                >
                  <span class="material-symbols-outlined">
                    keyboard_double_arrow_down
                  </span>
                </button>
              ) : (
                <button
                  onClick={verCTT}
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
              totalSlides={13}
            >
              <div className="">
                <Slider>
                  <Slide index={0}>
                    {" "}
                    <img
                      src={homeLight}
                      alt="homeLightCTT"
                      className="transform transition-transform hover:scale-110"
                    />{" "}
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
                      src={detail}
                      alt="detailCTT"
                      className="transform transition-transform hover:scale-110"
                    />
                  </Slide>
                  <Slide index={3}>
                    <img
                      src={preview}
                      alt="previewCTT"
                      className="transform transition-transform hover:scale-110"
                    />
                  </Slide>
                  <Slide index={4}>
                    <img
                      src={previewEdited}
                      alt="previewEditedCTT"
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
                      src={register}
                      alt="registerCTT"
                      className="transform transition-transform hover:scale-110"
                    />
                  </Slide>
                  <Slide index={8}>
                    <img
                      src={login}
                      alt="loginCTT"
                      className="transform transition-transform hover:scale-110"
                    />
                  </Slide>
                  <Slide index={9}>
                    <img
                      src={profile}
                      alt="profileCTT"
                      className="transform transition-transform hover:scale-110"
                    />
                  </Slide>
                  <Slide index={10}>
                    <img
                      src={pay}
                      alt="payCTT"
                      className="transform transition-transform hover:scale-110"
                    />
                  </Slide>
                  <Slide index={11}>
                    <img
                      src={team}
                      alt="teamCTT"
                      className="transform transition-transform hover:scale-110"
                    />
                  </Slide>
                  <Slide index={12}>
                    <img
                      src={panelAdmin}
                      alt="panelAdminCTT"
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
        {masCCT && (
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
        <div className=" text-subtitulo mb-8">App Videogames</div>
        <div className="grid grid-cols-2">
          <div className="text-parrafo text-center flex-col justify-start pr-20 pt-6">
            <div className="grid grid-cols-2">
              <div className="text-end pr-1">Cliente:</div>
              <div className="text-start pl-1">
                {" "}
                Javascript, React, Redux y CSS nativo.
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="text-end pr-1">Servidor:</div>
              <div className="text-start pl-1"> NodeJS.</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="text-end pr-1">Base de datos:</div>
              <div className="text-start pl-1">Sequalize y SQL.</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="text-end pr-1">Repositorios:</div>
              <div className="text-start pl-1">
                <a
                  href="https://github.com/FrancoA56/VideoGamesBACKEND"
                  target="_blank"
                  rel="noreferrer"
                  className="text-mainL dark:text-mainD mr-4"
                >
                  Servidor
                </a>
                <a
                  href="https://github.com/FrancoA56/VideoGamesFRONTEND"
                  target="_blank"
                  rel="noreferrer"
                  className="text-mainL dark:text-mainD "
                >
                  Cliente
                </a>
              </div>
            </div>

            <div className="mt-16">
              {!masVideogames ? (
                <button
                  onClick={verVideogames}
                  className="transform transition-transform hover:scale-125"
                >
                  <span class="material-symbols-outlined">
                    keyboard_double_arrow_down
                  </span>
                </button>
              ) : (
                <button
                  onClick={verVideogames}
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
              totalSlides={8}
            >
              <div>
                <Slider>
                  <Slide index={0}>
                    {" "}
                    <img
                      src={GamesConHome}
                      alt="GamesConHome"
                      className="transform transition-transform hover:scale-110"
                    />{" "}
                  </Slide>
                  <Slide index={1}>
                    <img
                      src={GamesConFiltros}
                      alt="GamesConFiltros"
                      className="transform transition-transform hover:scale-110"
                    />
                  </Slide>
                  <Slide index={2}>
                    <img
                      src={GamesConRegister}
                      alt="GamesConRegister"
                      className="transform transition-transform hover:scale-110"
                    />
                  </Slide>
                  <Slide index={3}>
                    <img
                      src={GamesConLogin}
                      alt="GamesConLogin"
                      className="transform transition-transform hover:scale-110"
                    />
                  </Slide>
                  <Slide index={4}>
                    <img
                      src={GamesConDetail1}
                      alt="GamesConDetail1"
                      className="transform transition-transform hover:scale-110"
                    />
                  </Slide>
                  <Slide index={5}>
                    <img
                      src={GamesConDetail2}
                      alt="GamesConDetail2"
                      className="transform transition-transform hover:scale-110"
                    />
                  </Slide>
                  <Slide index={6}>
                    <img
                      src={GamesConCreate1}
                      alt="GamesConCreate1"
                      className="transform transition-transform hover:scale-110"
                    />
                  </Slide>
                  <Slide index={7}>
                    <img
                      src={GamesConCreate2}
                      alt="GamesConCreate2"
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
        {masVideogames && (
          <div className="pr-10 pl-4 pb-10 pt-4">
            Una Single Page Application (SPA) que consume datos de una API externa y permite la
            visualización de información general y detallada de más de 500,000
            videojuegos. Entre las funcionalidades que dispone esta APP, se
            encuentra la capacidad de filtrar y ordenar videojuegos por
            diferentes variables, como género, plataformas, nombre y
            calificación. Además, la aplicación permite la creación de nuevos
            videojuegos a través de un formulario controlado, y también ofrece
            la funcionalidad de registro e inicio de sesión para usuarios
            autenticados.
          </div>
        )}
      </div>
      <div className="text-light dark:text-dark border pt-6 pl-6 shadow-lg shadow-mainL dark:shadow-mainD border-mainL dark:border-mainD rounded">
        <div className=" text-subtitulo  mb-8">App Rick & Morty</div>
        <div className="grid grid-cols-2">
          <div className="text-parrafo text-center flex-col justify-start pr-20 pt-6">
            <div className="grid grid-cols-2">
              <div className="text-end pr-1">Cliente:</div>
              <div className="text-start pl-1">
                {" "}
                Javascript, React, Redux y CSS nativo
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="text-end pr-1">Servidor:</div>
              <div className="text-start pl-1"> NodeJS.</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="text-end pr-1">Base de datos:</div>
              <div className="text-start pl-1">Sequalize y SQL.</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="text-end pr-1">Repositorios:</div>
              <div className="text-start pl-1">
                <a
                  href="https://github.com/FrancoA56/BackEndRYMHenry"
                  target="_blank"
                  rel="noreferrer"
                  className="text-mainL dark:text-mainD mr-4"
                >
                  Servidor
                </a>
                <a
                  href="https://github.com/FrancoA56/FrontEndRYMHenry"
                  target="_blank"
                  rel="noreferrer"
                  className="text-mainL dark:text-mainD "
                >
                  Cliente
                </a>
              </div>
            </div>
            <div className="mt-16">
              {!masRYM ? (
                <button
                  onClick={verRYM}
                  className="transform transition-transform hover:scale-125"
                >
                  <span class="material-symbols-outlined">
                    keyboard_double_arrow_down
                  </span>
                </button>
              ) : (
                <button
                  onClick={verRYM}
                  className="transform transition-transform hover:scale-125"
                >
                  {" "}
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
              <div>
                <Slider>
                  <Slide index={0}>
                    {" "}
                    <img
                      src={RYMHome2}
                      alt="RYMHome2"
                      className="transform transition-transform hover:scale-110"
                    />{" "}
                  </Slide>
                  <Slide index={1}>
                    <img
                      src={RYMHome1}
                      alt="RYMHome1"
                      className="transform transition-transform hover:scale-110"
                    />
                  </Slide>
                  <Slide index={2}>
                    <img
                      src={RYMAbout}
                      alt="RYMAbout"
                      className="transform transition-transform hover:scale-110"
                    />
                  </Slide>
                  <Slide index={3}>
                    <img
                      src={RYMDetail}
                      alt="RYMDetail"
                      className="transform transition-transform hover:scale-110"
                    />
                  </Slide>
                  <Slide index={4}>
                    <img
                      src={RYMLogin1}
                      alt="RYMLogin1"
                      className="transform transition-transform hover:scale-110"
                    />
                  </Slide>
                  <Slide index={5}>
                    <img
                      src={RYMLogin2}
                      alt="RYMLogin2"
                      className="transform transition-transform hover:scale-110"
                    />
                  </Slide>
                  <Slide index={6}>
                    <img src={RYMFavorites} alt="RYMFavorites" />
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
        {masRYM && (
          <div className="pr-10 pl-4 pb-10 pt-4">
            Una Single Page Application (SPA) que consume datos de una base de datos y permite la
            visualización de información general y detallada de todos los
            personajes de la serie "Rick & Morty". Entre las funcionalidades que
            dispone esta APP, se encuentra la búsqueda de personajes por nombre,
            añadirlos a una lista de favoritos vinculada al usuario, y en ella,
            filtrar y ordenar personajes por variables como género y ubicación,
            además del registro e inicio de sesión del usuario, también
            autenticado.
          </div>
        )}
      </div>
    </div>
  );
}

export default Proyectos;
