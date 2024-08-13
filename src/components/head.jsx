import React from "react";
import foto from "../utils/image/facherito.jpeg";
import { useSelector } from "react-redux";
import github from "../utils/image/github.png";
import linkedin from "../utils/image/linkedin.png";
import twitter from "../utils/image/twitter.png";

function Head() {
  const language = useSelector((state) => state.language);

  return (
    <div className="flex flex-col items-center justify-center mx-44">
      <div className="grid grid-cols-5 items-center justify-center">
        <div className="col-span-3 flex flex-col items-start justify-center">
          <div className="text-center text-light text-titulo dark:text-dark">
            Franco Adamoli
          </div>
          {language ? (
            <div className="text-start text-light text-subtitulo dark:text-dark">
              Desarrollador Web Fullstack
            </div>
          ) : (
            <div className="text-start text-light text-subtitulo dark:text-dark">
              Full Stack Web Developer
            </div>
          )}
          <div className="flex mt-4">
            <a
              href="https://github.com/FrancoA56"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={github}
                alt="githubIco"
                className="w-10 relative top-0.5 mr-3"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/franco-adamoli/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={linkedin}
                alt="linkedinIco"
                className="w-12 relative bottom-0.5 mr-4"
              />
            </a>
            <a
              href="https://twitter.com/FrancoDev56"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={twitter}
                alt="twitterIco"
                className="w-10 relative top-0.5 mr-5"
              />
            </a>
          </div>
        </div>
        <div className="col-span-2 flex items-center justify-center">
          <img
            src={foto}
            alt="Imagen Franco Adamoli"
            className="w-48 rounded-full shadow-dark shadow-mainL dark:shadow-mainD"
          />
        </div>
      </div>
      {language ? (
        <div className="text-light text-parrafo dark:text-dark text-center mb-2">
          En el último año, he ampliado mi experiencia al trabajar como
          programador web, especializándome en JavaScript y WordPress, lo que me
          ha permitido desarrollar habilidades robustas en el desarrollo web. Mi
          experiencia laboral previa incluye roles diversos, desde coordinador
          de recursos humanos en una clínica hasta la gestión de mi propio
          negocio de suministros de alimentos. A lo largo de mi trayectoria, he
          trabajado estrechamente con personas, ya sea organizando equipos o
          atendiendo a clientes, lo que me ha brindado una valiosa experiencia
          en las interacciones sociales.
        </div>
      ) : (
        <div className="text-light text-parrafo dark:text-dark text-center mb-2">
          In the past year, I have expanded my experience by working as a web
          developer, specializing in JavaScript and WordPress, which has allowed
          me to develop robust skills in web development. My previous work
          experience includes diverse roles, from HR coordinator at a clinic to
          managing my own food supply business. Throughout my career, I have
          worked closely with people, whether by organizing teams or serving
          clients, which has provided me with valuable experience in social
          interactions. I studied engineering and English, which gave me a
          strong foundation in mathematics and the language. Now, with the
          experience gained in web development, I am excited to apply my
          knowledge to create innovative and engaging solutions in the digital
          world.
        </div>
      )}
      

      
    </div>
  );
}

export default Head;
