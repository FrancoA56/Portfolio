import React from "react";
import foto from "../utils/image/facherito.jpeg";
import mail from "../utils/image/mail.png";
import github from "../utils/image/github.png";
import linkedin from "../utils/image/linkedin.png";
import twitter from "../utils/image/twitter.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function HeadEN() {
  const email = "adamoli.franco@gmail.com";

  const copiarEmail = () => {
    navigator.clipboard.writeText(email);
    toast.info("Email copied");
  };

  return (
    <div className="flex mt-10 items-center justify-center">
      <div className="mr-28">
        <div className="text-start text-light text-titulo dark:text-dark">Franco Adamoli</div>
        <div className="text-start text-light text-subtitulo dark:text-dark">Web Developer Fullstack</div>
        <div className="flex mt-4">
          <a
            href="https://github.com/FrancoA56"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="githubIco" className="w-10 relative top-0.5 mr-3"/>
          </a>
          <a
            href="https://www.linkedin.com/in/franco-adamoli/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="linkedinIco" className="w-12 relative bottom-0.5 mr-4"/>
          </a>
          <a
            href="https://twitter.com/FrancoDev56"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} alt="twitterIco" className="w-10 relative top-0.5 mr-5"/>
          </a>

          <img
            src={mail}
            alt="mailIco"
            onClick={copiarEmail}
            style={{ cursor: "pointer" }}
            className="w-12 relative bottom-1.5"
          />
        </div>
      </div>
      <div>
        <img src={foto} alt="Imagen Franco Adamoli" className="w-48 rounded-full shadow-dark shadow-mainL dark:shadow-mainD"/>
      </div>
    </div>
  );
}

export default HeadEN;
