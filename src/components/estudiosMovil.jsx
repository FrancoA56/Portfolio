import React from "react";
import javascript from "../utils/image/JS.webp";
import typescript from "../utils/image/typescript.webp";
import css from "../utils/image/CSS.webp";
import html from "../utils/image/HTML.webp";
import nodejs from "../utils/image/NodeJS.webp";
import react from "../utils/image/react.webp";
import redux from "../utils/image/redux.webp";
import sequalize from "../utils/image/sequalize.webp";
import sql from "../utils/image/sql.webp";
import git from "../utils/image/git.webp";
import wordpress from "../utils/image/wordpress.webp";
import wordpressB from "../utils/image/wordpressB.webp";
import prisma from "../utils/image/logo-prisma.png";
import prismaWhite from "../utils/image/prismaBlanco.png";
import { useSelector } from "react-redux";

function EstudiosMovil() {
  const language = useSelector((state) => state.language);

  return (
    <div className="text-light text-subtitulo dark:text-dark my-8 px-4">
      <div className="mt-4 text-base text-justify indent-6">
        {language ? (
          <>
            Desarrollador Web Full Stack con una sólida formación obtenida en{" "}
            <a
              href="https://www.soyhenry.com/"
              target="_blank"
              rel="noreferrer"
              className="text-mainL dark:text-mainD"
            >
              SoyHenry
            </a>
            , donde cursé aproximadamente 800 horas de teoría y práctica,
            realizando tres proyectos, dos individuales y uno grupal,
            adquiriendo así un sólido conocimiento en las siguientes
            tecnologías.
          </>
        ) : (
          <>
            Full Stack Web Developer with a strong background obtained at{" "}
            <a
              href="https://www.soyhenry.com/"
              target="_blank"
              rel="noreferrer"
              className="text-mainL dark:text-mainD"
            >
              SoyHenry
            </a>
            , where I completed approximately 800 hours of theory and practice,
            working on three projects, two individual and one group project,
            thus gaining a solid understanding of the following technologies.
          </>
        )}
      </div>
      <div className="mt-4 text-base text-justify indent-6">
        {language ? (
          <>
            También estudié ingeniería e inglés, lo que me proporcionó una
            sólida base en matemáticas y en el idioma. Ahora, con la experiencia
            adquirida en el desarrollo web, estoy entusiasmado por aplicar mis
            conocimientos para crear soluciones innovadoras y atractivas en el
            mundo digital.
          </>
        ) : (
          <>
            I also studied engineering and English, which provided me with a
            strong foundation in mathematics and the language. Now, with the
            experience gained in web development, I am excited to apply my
            knowledge to create innovative and engaging solutions in the digital
            world.
          </>
        )}
      </div>
      <div className="mt-1 text-center ">
        <a
          href="https://certificates.soyhenry.com/new-cert?id=a107f17276c7f05ef3353f0f2a253b0d79e74b1f156cf89b159deb88debeb9b0"
          target="_blank"
          rel="noreferrer"
          className="text-mainL dark:text-mainD text-xl"
        >
          {language ? "Certificado" : "Certificate"}
        </a>
      </div>
      <div className="grid grid-cols-3 gap-4 justify-items-center">
        <img
          src={javascript}
          alt="javascript"
          title="Javascript"
          className="w-14 h-14 transform transition-transform hover:scale-110"
        />
        <img
          src={typescript}
          alt="typescript"
          title="Typescript"
          className="w-14 h-14 transform transition-transform hover:scale-110"
        />
        <img
          src={css}
          alt="css"
          title="CSS"
          className="w-14 h-14 transform transition-transform hover:scale-110"
        />
        <img
          src={html}
          alt="html"
          title="HTML"
          className="w-12 h-12 mt-2 transform transition-transform hover:scale-110"
        />
        <img
          src={nodejs}
          alt="nodejs"
          title="Nodejs"
          className="w-16 h-16x| transform transition-transform hover:scale-110"
        />
        <img
          src={react}
          alt="react"
          title="React"
          className="w-14 h-14 transform transition-transform hover:scale-110"
        />
        <img
          src={redux}
          alt="redux"
          title="Redux"
          className="w-12 h-12 transform transition-transform hover:scale-110"
        />
        <img
          src={sequalize}
          alt="sequalize"
          title="Sequalize"
          className="w-14 h-14 transform transition-transform hover:scale-110"
        />
        <img
          src={sql}
          alt="sql"
          title="SQL"
          className="w-12 h-12 transform transition-transform hover:scale-110"
        />
        <img
          src={git}
          alt="git"
          title="Git"
          className="w-12 h-12 transform transition-transform hover:scale-110"
        />
        <img
          src={wordpress}
          alt="wordpress"
          title="Wordpress"
          className="w-12 h-12 transform transition-transform hover:scale-110 dark:hidden"
        />
        <img
          src={wordpressB}
          alt="wordpress"
          title="Wordpress"
          className="w-12 h-12 transform transition-transform hover:scale-110 hidden dark:inline"
        />
        <img
          src={prisma}
          alt="prisma"
          title="Prisma"
          className="w-12 h-12 relative transform transition-transform hover:scale-125 inline dark:hidden"
        />
        <img
          src={prismaWhite}
          alt="prisma"
          title="Prisma"
          className="w-14 h-14 relative transform transition-transform hover:scale-125 hidden dark:inline"
        />
      </div>
    </div>
  );
}

export default EstudiosMovil;
