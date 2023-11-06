import React from "react";
import typescript from "../utils/image/typescript.png";
import javascript from "../utils/image/JS.png";
import css from "../utils/image/CSS.png";
import html from "../utils/image/HTML.png";
import nodejs from "../utils/image/NodeJS.png";
import react from "../utils/image/react.png";
import redux from "../utils/image/redux.png";
import sequalize from "../utils/image/sequalize.png";
import sql from "../utils/image/sql.png";
import git from "../utils/image/git.png";

function EstudiosEN() {
  return (
    <div className="text-light text-semititulo dark:text-dark">
      Education
      <div className="text-light text-parrafo dark:text-dark mt-4 mb-8">
        Full Stack Web Developer with a strong background obtained at{" "}
        <a
          href="https://www.soyhenry.com/"
          target="_blank"
          rel="noreferrer"
          className="text-mainL dark:text-mainD"
        >
          SoyHenry
        </a>
        , where I completed approximately 800 hours of theoretical and practical
        training, working on three projects, two individual and one group
        project, thus acquiring a solid knowledge in the following technologies.
      </div>
      <div className="flex justify-center">
        <img
          src={javascript}
          alt="javascript"
          title="Javascript"
          className="w-16 h-16 mr-7 transform transition-transform hover:scale-125"
        />
        <img
          src={typescript}
          alt="typescript"
          title="Typescript"
          className="w-16 h-16 mr-7 transform transition-transform hover:scale-125"
        />
        <img
          src={css}
          alt="css"
          title="CSS"
          className="w-18 h-16 mr-8 transform transition-transform hover:scale-125"
        />
        <img
          src={html}
          alt="html"
          title="HTML"
          className="w-14 h-14 relative top-1 mr-4 transform transition-transform hover:scale-125"
        />
        <img
          src={nodejs}
          alt="nodejs"
          title="Nodejs"
          className="w-24 h-24 relative bottom-4 mr-2 transform transition-transform hover:scale-125"
        />
        <img
          src={react}
          alt="react"
          title="React"
          className="w-16 h-16 mr-6 transform transition-transform hover:scale-125"
        />
        <img
          src={redux}
          alt="redux"
          title="Redux"
          className="w-16 h-14 relative top-1.5 mr-7 transform transition-transform hover:scale-125"
        />
        <img
          src={sequalize}
          alt="sequalize"
          title="Sequalize"
          className="w-16 h-16 relative mr-8 top-1.5 transform transition-transform hover:scale-125"
        />
        <img
          src={sql}
          alt="sql"
          title="SQL"
          className="w-14 h-14 relative top-2 mr-6 transform transition-transform hover:scale-125"
        />
        <img
          src={git}
          alt="git"
          title="Git"
          className="w-14 h-14 relative top-2 transform transition-transform hover:scale-125"
        />
      </div>
    </div>
  );
}

export default EstudiosEN;
