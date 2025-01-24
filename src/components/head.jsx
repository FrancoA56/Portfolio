import React from "react";
import foto from "../utils/image/facherito.webp";
import { useSelector } from "react-redux";

function Head() {
  const language = useSelector((state) => state.language);

  return (
    <div className="flex flex-col items-center justify-center my-16 mx-44">
      <div className="grid grid-cols-5 items-center justify-center">
        <div className="col-span-3 flex flex-col items-start justify-center">
          <div className="flex flex-row justify-center text-superTitulo">
            <span className="text-light dark:text-dark hover:text-red-700 dark:hover:text-red-700 ease-in cursor-pointer">
              F
            </span>
            <span className="text-light dark:text-dark hover:text-blue-700 dark:hover:text-blue-700   ease-in cursor-pointer">
              r
            </span>
            <span className="text-light dark:text-dark hover:text-green-700 dark:hover:text-green-700   ease-in cursor-pointer">
              a
            </span>
            <span className="text-light dark:text-dark hover:text-yellow-700 dark:hover:text-yellow-700   ease-in cursor-pointer">
              n
            </span>
            <span className="text-light dark:text-dark hover:text-purple-700 dark:hover:text-purple-700   ease-in cursor-pointer">
              c
            </span>
            <span className="text-light dark:text-dark hover:text-pink-700 dark:hover:text-pink-700   ease-in cursor-pointer">
              o
            </span>
            <span className="text-light dark:text-dark hover:text-orange-700 dark:hover:text-orange-700   ease-in cursor-pointer">
              &nbsp;
            </span>{" "}
            {/* Espacio */}
            <span className="text-light dark:text-dark hover:text-red-700 dark:hover:text-red-700   ease-in cursor-pointer">
              A
            </span>
            <span className="text-light dark:text-dark hover:text-blue-700 dark:hover:text-blue-700   ease-in cursor-pointer">
              d
            </span>
            <span className="text-light dark:text-dark hover:text-green-700 dark:hover:text-green-700   ease-in cursor-pointer">
              a
            </span>
            <span className="text-light dark:text-dark hover:text-yellow-700 dark:hover:text-yellow-700   ease-in cursor-pointer">
              m
            </span>
            <span className="text-light dark:text-dark hover:text-purple-700 dark:hover:text-purple-700   ease-in cursor-pointer">
              o
            </span>
            <span className="text-light dark:text-dark hover:text-pink-700 dark:hover:text-pink-700   ease-in cursor-pointer">
              l
            </span>
            <span className="text-light dark:text-dark hover:text-orange-700 dark:hover:text-orange-700   ease-in cursor-pointer">
              i
            </span>
          </div>

          {language ? (
            <div className="flex flex-row justify-start text-titulo">
              <span className="text-light dark:text-dark hover:text-red-700 dark:hover:text-red-700   ease-in cursor-pointer">
                D
              </span>
              <span className="text-light dark:text-dark hover:text-blue-700 dark:hover:text-blue-700   ease-in cursor-pointer">
                e
              </span>
              <span className="text-light dark:text-dark hover:text-green-700 dark:hover:text-green-700   ease-in cursor-pointer">
                s
              </span>
              <span className="text-light dark:text-dark hover:text-yellow-700 dark:hover:text-yellow-700   ease-in cursor-pointer">
                a
              </span>
              <span className="text-light dark:text-dark hover:text-purple-700 dark:hover:text-purple-700   ease-in cursor-pointer">
                r
              </span>
              <span className="text-light dark:text-dark hover:text-pink-700 dark:hover:text-pink-700   ease-in cursor-pointer">
                r
              </span>
              <span className="text-light dark:text-dark hover:text-orange-700 dark:hover:text-orange-700   ease-in cursor-pointer">
                o
              </span>
              <span className="text-light dark:text-dark hover:text-red-700 dark:hover:text-red-700   ease-in cursor-pointer">
                l
              </span>
              <span className="text-light dark:text-dark hover:text-blue-700 dark:hover:text-blue-700   ease-in cursor-pointer">
                l
              </span>
              <span className="text-light dark:text-dark hover:text-green-700 dark:hover:text-green-700   ease-in cursor-pointer">
                a
              </span>
              <span className="text-light dark:text-dark hover:text-yellow-700 dark:hover:text-yellow-700   ease-in cursor-pointer">
                d
              </span>
              <span className="text-light dark:text-dark hover:text-purple-700 dark:hover:text-purple-700   ease-in cursor-pointer">
                o
              </span>
              <span className="text-light dark:text-dark hover:text-pink-700 dark:hover:text-pink-700   ease-in cursor-pointer">
                r
              </span>
              <span className="text-light dark:text-dark hover:text-orange-700 dark:hover:text-orange-700   ease-in cursor-pointer">
                &nbsp;
              </span>
              <span className="text-light dark:text-dark hover:text-red-700 dark:hover:text-red-700   ease-in cursor-pointer">
                W
              </span>
              <span className="text-light dark:text-dark hover:text-blue-700 dark:hover:text-blue-700   ease-in cursor-pointer">
                e
              </span>
              <span className="text-light dark:text-dark hover:text-green-700 dark:hover:text-green-700   ease-in cursor-pointer">
                b
              </span>
              <span className="text-light dark:text-dark hover:text-yellow-700 dark:hover:text-yellow-700   ease-in cursor-pointer">
                &nbsp;
              </span>
              <span className="text-light dark:text-dark hover:text-purple-700 dark:hover:text-purple-700   ease-in cursor-pointer">
                F
              </span>
              <span className="text-light dark:text-dark hover:text-pink-700 dark:hover:text-pink-700   ease-in cursor-pointer">
                u
              </span>
              <span className="text-light dark:text-dark hover:text-orange-700 dark:hover:text-orange-700   ease-in cursor-pointer">
                l
              </span>
              <span className="text-light dark:text-dark hover:text-red-700 dark:hover:text-red-700   ease-in cursor-pointer">
                l
              </span>
              <span className="text-light dark:text-dark hover:text-blue-700 dark:hover:text-blue-700   ease-in cursor-pointer">
                s
              </span>
              <span className="text-light dark:text-dark hover:text-green-700 dark:hover:text-green-700   ease-in cursor-pointer">
                t
              </span>
              <span className="text-light dark:text-dark hover:text-yellow-700 dark:hover:text-yellow-700   ease-in cursor-pointer">
                a
              </span>
              <span className="text-light dark:text-dark hover:text-purple-700 dark:hover:text-purple-700   ease-in cursor-pointer">
                c
              </span>
              <span className="text-light dark:text-dark hover:text-pink-700 dark:hover:text-pink-700   ease-in cursor-pointer">
                k
              </span>
            </div>
          ) : (
            <div className="flex flex-row justify-start text-titulo">
              <span className="text-light dark:text-dark hover:text-red-700 dark:hover:text-red-700   ease-in cursor-pointer">
                F
              </span>
              <span className="text-light dark:text-dark hover:text-blue-700 dark:hover:text-blue-700   ease-in cursor-pointer">
                u
              </span>
              <span className="text-light dark:text-dark hover:text-green-700 dark:hover:text-green-700   ease-in cursor-pointer">
                l
              </span>
              <span className="text-light dark:text-dark hover:text-yellow-700 dark:hover:text-yellow-700   ease-in cursor-pointer">
                l
              </span>
              <span className="text-light dark:text-dark hover:text-purple-700 dark:hover:text-purple-700   ease-in cursor-pointer">
                &nbsp;
              </span>
              <span className="text-light dark:text-dark hover:text-pink-700 dark:hover:text-pink-700   ease-in cursor-pointer">
                S
              </span>
              <span className="text-light dark:text-dark hover:text-orange-700 dark:hover:text-orange-700   ease-in cursor-pointer">
                t
              </span>
              <span className="text-light dark:text-dark hover:text-red-700 dark:hover:text-red-700   ease-in cursor-pointer">
                a
              </span>
              <span className="text-light dark:text-dark hover:text-blue-700 dark:hover:text-blue-700   ease-in cursor-pointer">
                c
              </span>
              <span className="text-light dark:text-dark hover:text-green-700 dark:hover:text-green-700   ease-in cursor-pointer">
                k
              </span>
              <span className="text-light dark:text-dark hover:text-yellow-700 dark:hover:text-yellow-700   ease-in cursor-pointer">
                &nbsp;
              </span>
              <span className="text-light dark:text-dark hover:text-purple-700 dark:hover:text-purple-700   ease-in cursor-pointer">
                W
              </span>
              <span className="text-light dark:text-dark hover:text-pink-700 dark:hover:text-pink-700   ease-in cursor-pointer">
                e
              </span>
              <span className="text-light dark:text-dark hover:text-orange-700 dark:hover:text-orange-700   ease-in cursor-pointer">
                b
              </span>
              <span className="text-light dark:text-dark hover:text-red-700 dark:hover:text-red-700   ease-in cursor-pointer">
                &nbsp;
              </span>
              <span className="text-light dark:text-dark hover:text-blue-700 dark:hover:text-blue-700   ease-in cursor-pointer">
                D
              </span>
              <span className="text-light dark:text-dark hover:text-green-700 dark:hover:text-green-700   ease-in cursor-pointer">
                e
              </span>
              <span className="text-light dark:text-dark hover:text-yellow-700 dark:hover:text-yellow-700   ease-in cursor-pointer">
                v
              </span>
              <span className="text-light dark:text-dark hover:text-purple-700 dark:hover:text-purple-700   ease-in cursor-pointer">
                e
              </span>
              <span className="text-light dark:text-dark hover:text-pink-700 dark:hover:text-pink-700   ease-in cursor-pointer">
                l
              </span>
              <span className="text-light dark:text-dark hover:text-orange-700 dark:hover:text-orange-700   ease-in cursor-pointer">
                o
              </span>
              <span className="text-light dark:text-dark hover:text-red-700 dark:hover:text-red-700   ease-in cursor-pointer">
                p
              </span>
              <span className="text-light dark:text-dark hover:text-blue-700 dark:hover:text-blue-700   ease-in cursor-pointer">
                e
              </span>
              <span className="text-light dark:text-dark hover:text-green-700 dark:hover:text-green-700   ease-in cursor-pointer">
                r
              </span>
            </div>
          )}
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
