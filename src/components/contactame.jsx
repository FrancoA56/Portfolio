import React from "react";
import github from "../utils/image/github.png";
import githubW from "../utils/image/githubWhite.png";
import linkedin from "../utils/image/linkedin.png";
import linkedinW from "../utils/image/linkedinW.png";
import x from "../utils/image/X.png";
import xw from "../utils/image/XW.png";
import { useSelector } from "react-redux";

function Contactame() {
  const language = useSelector((state) => state.language);

  return (
    <div className="my-16 mx-44 flex text-light justify-center items-center dark:text-dark">
      {language ? (
        <div className="flex justify-center items-center text-center text-semititulo">¡Contáctame!</div>
      ) : (
        <div className="flex justify-center items-center text-center text-semititulo">Contact me!</div>
      )}
      <div className="flex justify-center text-center">
      <a
              href="https://www.linkedin.com/in/franco-adamoli/"
              target="_blank"
              rel="noreferrer"
            >
             
             <img
                src={github}
                alt="githubIco"
                className="w-10 relative top-0.5 mr-3 dark:hidden"
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
                className="w-10 relative top-0.5 mr-3 dark:hidden"
              />
              <img
                src={linkedinW}
                alt="githubIco"
                className="w-10 relative top-0.5 mr-3 hidden dark:inline"
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
                className="w-10 relative top-0.5 mr-3 dark:hidden"
              />
              <img
                src={xw}
                alt="githubIco"
                className="w-10 relative top-0.5 mr-3 hidden dark:inline"
              />
        </a>
      </div>
    </div>
  );
}

export default Contactame;
