import React, { useState } from "react";
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
      <div className="text-light dark:text-dark">
        <div className=" text-subtitulo ">Aplicacion CodeCraftedTemplates</div>
        <div className="text-parrafo">
          <div>Cliente: Javascript, React, Readux, TailwindCSS</div>
          <div>Servidor y BDD: Typescript, NodeJS, Sequalize y SQL.</div>
          <div>React-Admin</div>
          <a
            href="https://codecraftedtemplates.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Deploy
          </a>
          <div>
            {!masCCT ? (
              <button onClick={verCTT}>mas</button>
            ) : (
              <button onClick={verCTT}>menos</button>
            )}
          </div>
        </div>
        {masCCT && (
          <div>
            Un E-commerce de venta de plantillas web prediseñadas, las cuales se
            pueden visualizar e incluso modificar sus colores para una
            personalización específica de cada usuario, incluyendo el logo,
            nombre y un breve resumen del mismo también explícito en la
            plantilla. En la tienda, se pueden filtrar estas plantillas por
            categoría, tipo, nombre, precio y color, permitiendo agregarlas al
            carrito de compras y el usuario tiene la posibilidad de elegir un servicio con o sin deployment para luego llegar a la pasarela de pago a través de
            PayPal. Además, se incluye la funcionalidad de registro, inicio de
            sesión y recuperación de contraseña por medio del correo del
            usuario, el cual también cuenta con registro de terceros a través de
            Google y Github. Para una mejor administración de la página, el
            usuario administrador puede acceder al Panel de Administración y
            gestionar a los usuarios, agregar y editar productos, revisar las
            reseñas de los usuarios y confirmar y controlar las compras
            efectuadas.
          </div>
        )}
      </div>
      <div className="text-light  dark:text-dark">
        <div className=" text-subtitulo ">Aplicacion Videogames</div>
        <div className="text-parrafo">
          <div>Cliente: Javascript, React, Readux y CSS nativo</div>
          <div>Servidor y BDD: NodeJS, Sequalize y SQL.</div>
          <div>
            {!masVideogames ? (
              <button onClick={verVideogames}>mas</button>
            ) : (
              <button onClick={verVideogames}>menos</button>
            )}
          </div>
        </div>
        {masVideogames && (
          <div>
            Una SPA que consume datos de una API externa y permite la
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
      <div className="text-light  dark:text-dark">
        <div className=" text-subtitulo ">Aplicacion Rick & Morty</div>
        <div className="text-parrafo">
          <div>Cliente: Javascript, React, Readux y CSS nativo</div>
          <div>Servidor y BDD: NodeJS, Sequalize y SQL.</div>
          <div>
            {!masRYM ? (
              <button onClick={verRYM}>mas</button>
            ) : (
              <button onClick={verRYM}>menos</button>
            )}
          </div>
        </div>
        {masRYM && (
          <div>
            Una SPA que consume datos de una base de datos y permite la
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
