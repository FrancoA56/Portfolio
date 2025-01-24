import React from "react";
import { useSelector } from "react-redux";
import Formulario from "./formulario";
import github from "../utils/image/github.webp";
import githubW from "../utils/image/githubWhite.webp";
import linkedin from "../utils/image/linkedin.webp";
import linkedinW from "../utils/image/linkedinW.webp";
import x from "../utils/image/X.webp";
import xw from "../utils/image/XW.webp";

function Contactame() {
  const language = useSelector((state) => state.language);

  return (
    <div className="my-16 flex flex-col text-light justify-center items-center dark:text-dark">
      {language ? (
        <div className="w-full">
          <div className="flex justify-center items-center text-center text-semititulo my-2">
            ¡Contáctame!
          </div>
          <Formulario></Formulario>
        </div>
      ) : (
        <div className="w-full">
          <div className="flex justify-center items-center text-center text-semititulo my-2">
            Contact me!
          </div>
          <Formulario></Formulario>
        </div>
      )}
      <div className="flex flex-col">
        <div className="text-black dark:text-white my-4">
          <a
            href="https://wa.me/5491123882021"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-green-500 flex items-center"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="w-5 h-5 mr-2"
            />
            WhatsApp: +54 9 11 2388 2021
          </a>
        </div>

        <div className="text-black dark:text-white mb-4">
          <a
            className="cursor:pointer hover:text-green-500"
            href="mailto:franco.adamoli@gmail.com?subject=¡Hola, estamos interesados en trabajar contigo!&body=Hola.%0D%0A%0D%0ASaludos%20cordiales,%0D%0ATu%20nombre%20aquí"
          >
            Email: franco.adamoli@gmail.com
          </a>
        </div>
        <div className="flex justify-between">
          <a
            href="https://github.com/FrancoA56"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={github}
              alt="githubIco"
              className="w-10 relative top-0.5 mr-3 dark:hidden inline"
            />
            <img
              src={githubW}
              alt="githubIco"
              className="w-10 relative top-0.5 mr-3 hidden dark:inline"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/franco-adamoli/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedin}
              alt="githubIco"
              className="w-9 relative top-0.5 mr-3 dark:hidden inline"
            />
            <img
              src={linkedinW}
              alt="githubIco"
              className="w-9 relative top-0.5 mr-3 hidden dark:inline"
            />
          </a>
          <a
            href="https://twitter.com/FrancoDev56"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={x}
              alt="githubIco"
              className="w-9 relative top-0.5 mr-3 dark:hidden inline"
            />
            <img
              src={xw}
              alt="githubIco"
              className="w-9 relative top-0.5 mr-3 hidden dark:inline"
            />
          </a>
        </div>
      </div>{" "}
    </div>
  );
}

export default Contactame;
