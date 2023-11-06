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

function ProyectosEN() {
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
        Proyects
      </div>
      <div className="text-light dark:text-dark border pt-6 pl-6 mb-10 shadow-lg shadow-mainL dark:shadow-mainD border-mainL dark:border-mainD rounded">
        <div className=" text-subtitulo mb-8">App CodeCraftedTemplates</div>
        <div className="grid grid-cols-2">
          <div className="text-parrafo text-center flex-col justify-start pr-20">
            <div className="grid grid-cols-2">
              <div className="text-end pr-1">Client: </div>
              <div className="text-start pl-1">
                Javascript, React, Redux, TailwindCSS.
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="text-end pr-1">Server: </div>
              <div className="text-start pl-1">Typescript, NodeJS.</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="text-end pr-1">Data base:</div>
              <div className="text-start pl-1"> Sequalize y SQL.</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="text-end pr-1">Admin panel:</div>
              <div className="text-start pl-1"> React-Admin</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="text-end pr-1">Repositories:</div>
              <div className="text-start pl-1">
                <a
                  href="https://github.com/FrancoA56/FinalProjectServer"
                  target="_blank"
                  rel="noreferrer"
                  className="text-mainL dark:text-mainD mr-4"
                >
                  Server
                </a>
                <a
                  href="https://github.com/FrancoA56/FinalProjectClient"
                  target="_blank"
                  rel="noreferrer"
                  className="text-mainL dark:text-mainD "
                >
                  Client
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
            An E-commerce platform for selling pre-designed web templates, which can be previewed and even have their colors modified for specific customization by each user, including the logo, name, and a brief summary, all of which are explicitly displayed in the template. In the store, these templates can be filtered by category, type, name, price, and color, allowing users to add them to their shopping cart. Users have the option to choose a service with or without deployment before proceeding to the PayPal payment gateway. Additionally, the platform includes registration, login, and password recovery functionalities through the user's email. Users can also register through third-party platforms like Google and Github. For better website management, the admin user can access the Admin Panel to manage users, add and edit products, review user reviews, and confirm and monitor completed purchases.
          </div>
        )}
      </div>
      <div className="text-light dark:text-dark border pt-6 pl-6 mb-10 shadow-lg shadow-mainL dark:shadow-mainD border-mainL dark:border-mainD rounded">
        <div className=" text-subtitulo mb-8">App Videogames</div>
        <div className="grid grid-cols-2">
          <div className="text-parrafo text-center flex-col justify-start pr-20 pt-6">
            <div className="grid grid-cols-2">
              <div className="text-end pr-1">Client:</div>
              <div className="text-start pl-1">
                {" "}
                Javascript, React, Redux y CSS nativo.
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="text-end pr-1">Server:</div>
              <div className="text-start pl-1"> NodeJS.</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="text-end pr-1">Data base:</div>
              <div className="text-start pl-1">Sequalize y SQL.</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="text-end pr-1">Repositories:</div>
              <div className="text-start pl-1">
                <a
                  href="https://github.com/FrancoA56/VideoGamesBACKEND"
                  target="_blank"
                  rel="noreferrer"
                  className="text-mainL dark:text-mainD mr-4"
                >
                  Server
                </a>
                <a
                  href="https://github.com/FrancoA56/VideoGamesFRONTEND"
                  target="_blank"
                  rel="noreferrer"
                  className="text-mainL dark:text-mainD "
                >
                  Client
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
            A Single Page Application (SPA) that consumes data from an external API and enables the visualization of general and detailed information for over 500,000 video games. This app offers various functionalities, including the ability to filter and sort video games based on different variables such as genre, platforms, name, and rating. Additionally, the application allows users to create new video games through a controlled form and also provides user registration and login functionalities for authenticated users.
          </div>
        )}
      </div>
      <div className="text-light dark:text-dark border pt-6 pl-6 shadow-lg shadow-mainL dark:shadow-mainD border-mainL dark:border-mainD rounded">
        <div className=" text-subtitulo  mb-8">App Rick & Morty</div>
        <div className="grid grid-cols-2">
          <div className="text-parrafo text-center flex-col justify-start pr-20 pt-6">
            <div className="grid grid-cols-2">
              <div className="text-end pr-1">Client:</div>
              <div className="text-start pl-1">
                {" "}
                Javascript, React, Redux y CSS nativo
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="text-end pr-1">Server:</div>
              <div className="text-start pl-1"> NodeJS.</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="text-end pr-1">Data base:</div>
              <div className="text-start pl-1">Sequalize y SQL.</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="text-end pr-1">Repositories:</div>
              <div className="text-start pl-1">
                <a
                  href="https://github.com/FrancoA56/BackEndRYMHenry"
                  target="_blank"
                  rel="noreferrer"
                  className="text-mainL dark:text-mainD mr-4"
                >
                  Server
                </a>
                <a
                  href="https://github.com/FrancoA56/FrontEndRYMHenry"
                  target="_blank"
                  rel="noreferrer"
                  className="text-mainL dark:text-mainD "
                >
                  Client
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
            A Single Page Application (SPA) that fetches data from a database and allows the display of both general and detailed information about all the characters from the "Rick & Morty" series. This app offers several functionalities, including character search by name, adding them to a user-linked favorites list, and within that list, filtering and sorting characters by variables like gender and location. Additionally, the application provides user registration and login functionality, with authentication for users.
          </div>
        )}
      </div>
    </div>
  );
}

export default ProyectosEN;
