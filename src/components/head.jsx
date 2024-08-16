import React from "react";
import foto from "../utils/image/facherito.jpeg";
import { useSelector } from "react-redux";
import github from "../utils/image/github.png";
import githubR from "../utils/image/githubR.png";
import githubW from "../utils/image/githubWhite.png";
import linkedin from "../utils/image/linkedin.png";
import linkedinW from "../utils/image/linkedinW.png";
import linkedinN from "../utils/image/linkedinN.png";
import x from "../utils/image/X.png";
import xv from "../utils/image/XV.png";
import xw from "../utils/image/XW.png";

function Head() {
  const language = useSelector((state) => state.language);

  return (
    <div className="flex flex-col items-center justify-center my-16 mx-44">
      <div className="grid grid-cols-5 items-center justify-center">
        <div className="col-span-3 flex flex-col items-start justify-center">
          <div className="flex flex-row justify-center text-superTitulo">
            <span className="text-light dark:text-dark hover:text-red-700 dark:hover:text-red-700 transition ease-in-out">
              F
            </span>
            <span className="text-light dark:text-dark hover:text-blue-700 dark:hover:text-blue-700 transition ease-in-out">
              r
            </span>
            <span className="text-light dark:text-dark hover:text-green-700 dark:hover:text-green-700 transition ease-in-out">
              a
            </span>
            <span className="text-light dark:text-dark hover:text-yellow-700 dark:hover:text-yellow-700 transition ease-in-out">
              n
            </span>
            <span className="text-light dark:text-dark hover:text-purple-700 dark:hover:text-purple-700 transition ease-in-out">
              c
            </span>
            <span className="text-light dark:text-dark hover:text-pink-700 dark:hover:text-pink-700 transition ease-in-out">
              o
            </span>
            <span className="text-light dark:text-dark hover:text-orange-700 dark:hover:text-orange-700 transition ease-in-out">
              &nbsp;
            </span>{" "}
            {/* Espacio */}
            <span className="text-light dark:text-dark hover:text-red-700 dark:hover:text-red-700 transition ease-in-out">
              A
            </span>
            <span className="text-light dark:text-dark hover:text-blue-700 dark:hover:text-blue-700 transition ease-in-out">
              d
            </span>
            <span className="text-light dark:text-dark hover:text-green-700 dark:hover:text-green-700 transition ease-in-out">
              a
            </span>
            <span className="text-light dark:text-dark hover:text-yellow-700 dark:hover:text-yellow-700 transition ease-in-out">
              m
            </span>
            <span className="text-light dark:text-dark hover:text-purple-700 dark:hover:text-purple-700 transition ease-in-out">
              o
            </span>
            <span className="text-light dark:text-dark hover:text-pink-700 dark:hover:text-pink-700 transition ease-in-out">
              l
            </span>
            <span className="text-light dark:text-dark hover:text-orange-700 dark:hover:text-orange-700 transition ease-in-out">
              i
            </span>
          </div>

          {language ? (
            <div className="flex flex-row justify-start text-titulo">
              <span className="text-light dark:text-dark hover:text-red-700 dark:hover:text-red-700 transition ease-in-out">
                D
              </span>
              <span className="text-light dark:text-dark hover:text-blue-700 dark:hover:text-blue-700 transition ease-in-out">
                e
              </span>
              <span className="text-light dark:text-dark hover:text-green-700 dark:hover:text-green-700 transition ease-in-out">
                s
              </span>
              <span className="text-light dark:text-dark hover:text-yellow-700 dark:hover:text-yellow-700 transition ease-in-out">
                a
              </span>
              <span className="text-light dark:text-dark hover:text-purple-700 dark:hover:text-purple-700 transition ease-in-out">
                r
              </span>
              <span className="text-light dark:text-dark hover:text-pink-700 dark:hover:text-pink-700 transition ease-in-out">
                r
              </span>
              <span className="text-light dark:text-dark hover:text-orange-700 dark:hover:text-orange-700 transition ease-in-out">
                o
              </span>
              <span className="text-light dark:text-dark hover:text-red-700 dark:hover:text-red-700 transition ease-in-out">
                l
              </span>
              <span className="text-light dark:text-dark hover:text-blue-700 dark:hover:text-blue-700 transition ease-in-out">
                l
              </span>
              <span className="text-light dark:text-dark hover:text-green-700 dark:hover:text-green-700 transition ease-in-out">
                a
              </span>
              <span className="text-light dark:text-dark hover:text-yellow-700 dark:hover:text-yellow-700 transition ease-in-out">
                d
              </span>
              <span className="text-light dark:text-dark hover:text-purple-700 dark:hover:text-purple-700 transition ease-in-out">
                o
              </span>
              <span className="text-light dark:text-dark hover:text-pink-700 dark:hover:text-pink-700 transition ease-in-out">
                r
              </span>
              <span className="text-light dark:text-dark hover:text-orange-700 dark:hover:text-orange-700 transition ease-in-out">
                &nbsp;
              </span>
              <span className="text-light dark:text-dark hover:text-red-700 dark:hover:text-red-700 transition ease-in-out">
                W
              </span>
              <span className="text-light dark:text-dark hover:text-blue-700 dark:hover:text-blue-700 transition ease-in-out">
                e
              </span>
              <span className="text-light dark:text-dark hover:text-green-700 dark:hover:text-green-700 transition ease-in-out">
                b
              </span>
              <span className="text-light dark:text-dark hover:text-yellow-700 dark:hover:text-yellow-700 transition ease-in-out">
                &nbsp;
              </span>
              <span className="text-light dark:text-dark hover:text-purple-700 dark:hover:text-purple-700 transition ease-in-out">
                F
              </span>
              <span className="text-light dark:text-dark hover:text-pink-700 dark:hover:text-pink-700 transition ease-in-out">
                u
              </span>
              <span className="text-light dark:text-dark hover:text-orange-700 dark:hover:text-orange-700 transition ease-in-out">
                l
              </span>
              <span className="text-light dark:text-dark hover:text-red-700 dark:hover:text-red-700 transition ease-in-out">
                l
              </span>
              <span className="text-light dark:text-dark hover:text-blue-700 dark:hover:text-blue-700 transition ease-in-out">
                s
              </span>
              <span className="text-light dark:text-dark hover:text-green-700 dark:hover:text-green-700 transition ease-in-out">
                t
              </span>
              <span className="text-light dark:text-dark hover:text-yellow-700 dark:hover:text-yellow-700 transition ease-in-out">
                a
              </span>
              <span className="text-light dark:text-dark hover:text-purple-700 dark:hover:text-purple-700 transition ease-in-out">
                c
              </span>
              <span className="text-light dark:text-dark hover:text-pink-700 dark:hover:text-pink-700 transition ease-in-out">
                k
              </span>
            </div>
          ) : (
            <div className="flex flex-row justify-start text-subtitulo">
              <span className="text-light dark:text-dark hover:text-red-700 dark:hover:text-red-700 transition ease-in-out">
                F
              </span>
              <span className="text-light dark:text-dark hover:text-blue-700 dark:hover:text-blue-700 transition ease-in-out">
                u
              </span>
              <span className="text-light dark:text-dark hover:text-green-700 dark:hover:text-green-700 transition ease-in-out">
                l
              </span>
              <span className="text-light dark:text-dark hover:text-yellow-700 dark:hover:text-yellow-700 transition ease-in-out">
                l
              </span>
              <span className="text-light dark:text-dark hover:text-purple-700 dark:hover:text-purple-700 transition ease-in-out">
                &nbsp;
              </span>
              <span className="text-light dark:text-dark hover:text-pink-700 dark:hover:text-pink-700 transition ease-in-out">
                S
              </span>
              <span className="text-light dark:text-dark hover:text-orange-700 dark:hover:text-orange-700 transition ease-in-out">
                t
              </span>
              <span className="text-light dark:text-dark hover:text-red-700 dark:hover:text-red-700 transition ease-in-out">
                a
              </span>
              <span className="text-light dark:text-dark hover:text-blue-700 dark:hover:text-blue-700 transition ease-in-out">
                c
              </span>
              <span className="text-light dark:text-dark hover:text-green-700 dark:hover:text-green-700 transition ease-in-out">
                k
              </span>
              <span className="text-light dark:text-dark hover:text-yellow-700 dark:hover:text-yellow-700 transition ease-in-out">
                &nbsp;
              </span>
              <span className="text-light dark:text-dark hover:text-purple-700 dark:hover:text-purple-700 transition ease-in-out">
                W
              </span>
              <span className="text-light dark:text-dark hover:text-pink-700 dark:hover:text-pink-700 transition ease-in-out">
                e
              </span>
              <span className="text-light dark:text-dark hover:text-orange-700 dark:hover:text-orange-700 transition ease-in-out">
                b
              </span>
              <span className="text-light dark:text-dark hover:text-red-700 dark:hover:text-red-700 transition ease-in-out">
                &nbsp;
              </span>
              <span className="text-light dark:text-dark hover:text-blue-700 dark:hover:text-blue-700 transition ease-in-out">
                D
              </span>
              <span className="text-light dark:text-dark hover:text-green-700 dark:hover:text-green-700 transition ease-in-out">
                e
              </span>
              <span className="text-light dark:text-dark hover:text-yellow-700 dark:hover:text-yellow-700 transition ease-in-out">
                v
              </span>
              <span className="text-light dark:text-dark hover:text-purple-700 dark:hover:text-purple-700 transition ease-in-out">
                e
              </span>
              <span className="text-light dark:text-dark hover:text-pink-700 dark:hover:text-pink-700 transition ease-in-out">
                l
              </span>
              <span className="text-light dark:text-dark hover:text-orange-700 dark:hover:text-orange-700 transition ease-in-out">
                o
              </span>
              <span className="text-light dark:text-dark hover:text-red-700 dark:hover:text-red-700 transition ease-in-out">
                p
              </span>
              <span className="text-light dark:text-dark hover:text-blue-700 dark:hover:text-blue-700 transition ease-in-out">
                e
              </span>
              <span className="text-light dark:text-dark hover:text-green-700 dark:hover:text-green-700 transition ease-in-out">
                r
              </span>
            </div>
          )}

          <div className="flex mt-4">
            <a
              href="https://github.com/FrancoA56"
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              {/* Imagen de GitHub cambia según el modo */}
              <img
                src={github}
                alt="githubIco"
                className="w-10 relative top-0.5 mr-3 dark:hidden group-hover:hidden transition ease-in-out "
              />
              <img
                src={githubW}
                alt="githubIco"
                className="w-10 relative top-0.5 mr-3 hidden dark:inline group-hover:hidden transition ease-in-out "
              />
              <img
                src={githubR}
                alt="githubIco"
                className="w-10 relative top-0.5 mr-3 hidden group-hover:inline transition ease-in-out "
              />
            </a>

            <a
              href="https://www.linkedin.com/in/franco-adamoli/"
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              {/* Imagen de LinkedIn cambia según el modo */}
              <img
                src={linkedin}
                alt="linkedinIco"
                className="w-10 relative top-0.5 mr-3 dark:hidden group-hover:hidden transition ease-in-out"
              />
              <img
                src={linkedinW}
                alt="linkedinIco"
                className="w-10 relative top-0.5 mr-3 hidden dark:inline group-hover:hidden transition ease-in-out"
              />
              <img
                src={linkedinN}
                alt="linkedinIco"
                className="w-10 relative top-0.5 mr-3 hidden group-hover:inline transition ease-in-out"
              />
            </a>

            <a
              href="https://twitter.com/FrancoDev56"
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              {/* Imagen de Twitter cambia según el modo */}
              <img
                src={x}
                alt="twitterIco"
                className="w-10 relative top-0.5 mr-3 dark:hidden group-hover:hidden transition ease-in-out"
              />
              <img
                src={xw}
                alt="twitterIco"
                className="w-10 relative top-0.5 mr-3 hidden dark:inline group-hover:hidden transition ease-in-out"
              />
              <img
                src={xv}
                alt="twitterIco"
                className="w-10 relative top-0.5 mr-3 hidden group-hover:inline transition ease-in-out"
              />
            </a>
          </div>
        </div>
        <div className="col-span-2 ml-10 flex items-center justify-center">
          <img
            src={foto}
            alt="Imagen Franco Adamoli"
            className="w-48 rounded-full shadow-dark shadow-mainL dark:shadow-mainD"
          />
        </div>
      </div>
      {language ? (
        <div className="text-light text-parrafo dark:text-dark text-center mt-8">
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
        <div className="text-light text-parrafo dark:text-dark text-center mt-8">
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
