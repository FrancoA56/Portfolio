import React from "react";
import linkedin from "../utils/image/linkedin.png";
import twitter from "../utils/image/twitter.png";
import mail from "../utils/image/mail.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactameEN() {
  const email = "adamoli.franco@gmail.com";

  const copiarEmail = () => {
    navigator.clipboard.writeText(email);
    toast.info("Correo copiado");
  };
  return (
    <div className="mt-20 pb-20 grid grid-cols-2 text-light dark:text-dark">
      <div className="text-end pr-1 text-semititulo">Contact!</div>
      <div className="text-start pl-1 flex">
      <a
            href="https://www.linkedin.com/in/franco-adamoli/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="linkedinIco" className="w-12 relative mx-4"/>
          </a>
          <a
            href="https://twitter.com/FrancoDev56"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} alt="twitterIco" className="w-10 relative top-1 mr-5"/>
          </a>

          <img
            src={mail}
            alt="mailIco"
            onClick={copiarEmail}
            style={{ cursor: "pointer" }}
            className="w-12 relative bottom-2"
          />
      </div>
    </div>
  );
}

export default ContactameEN;