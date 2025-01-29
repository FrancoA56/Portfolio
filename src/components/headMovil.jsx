import React from "react";
import { useSelector } from "react-redux";
import foto from "../utils/image/facherito.webp";

function HeadMovil() {
  const language = useSelector((state) => state.language);

  return (
    <div className="px-4 py-6">
      {/* Encabezado con Imagen y Nombre */}
      <div className="flex items-center justify-between">
        <div className="flex-grow">
          <h1 className="text-subtitulo font-bold ml-4 text-light dark:text-dark">
            Franco Adamoli
          </h1>
          {language ? (
            <>
              <p className="text-parrafo text-gray-600 ml-4 dark:text-gray-300">
                Programador Web
              </p>
              <p className="text-parrafo text-gray-600 ml-4 dark:text-gray-300">
                Fullstack{" "}
              </p>
            </>
          ) : (
            <>
              <p className="text-parrafo text-gray-600 ml-4 dark:text-gray-300">
                Web Developer
              </p>
              <p className="text-parrafo text-gray-600 ml-4 dark:text-gray-300">
                Fullstack
              </p>
            </>
          )}
        </div>
        <div className="ml-4">
          <img
            src={foto}
            alt="Imagen Franco Adamoli"
            className="w-20 mr-12 rounded-full shadow-lg"
          />
        </div>
      </div>

      {/* Descripción */}
      <div className="mt-6 text-justify text-lg mx-4 text-gray-700 dark:text-gray-300">
        {language ? (
          <p className="indent-6 ">
            En el último año, he ampliado mi experiencia al trabajar como
            programador web, especializándome en JavaScript y WordPress, lo que
            me ha permitido desarrollar habilidades robustas en el desarrollo
            web. Mi experiencia laboral previa incluye roles diversos, desde
            coordinador de recursos humanos en una clínica hasta la gestión de
            mi propio negocio de suministros de alimentos. A lo largo de mi
            trayectoria, he trabajado estrechamente con personas, ya sea
            organizando equipos o atendiendo a clientes, lo que me ha brindado
            una valiosa experiencia en las interacciones sociales.
          </p>
        ) : (
          <p className="indent-6 ">
            In the past year, I have expanded my experience by working as a web
            developer, specializing in JavaScript and WordPress, which has
            allowed me to develop robust skills in web development. My previous
            work experience includes diverse roles, from HR coordinator at a
            clinic to managing my own food supply business. Throughout my
            career, I have worked closely with people, whether by organizing
            teams or serving clients, which has provided me with valuable
            experience in social interactions.
          </p>
        )}
      </div>
    </div>
  );
}

export default HeadMovil;
