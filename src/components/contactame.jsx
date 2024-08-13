import React from "react";
import linkedin from "../utils/image/linkedin.png";
import twitter from "../utils/image/twitter.png";
import { useSelector } from "react-redux";

function Contactame() {
  const language = useSelector((state) => state.language);

  return (
    <div className="mt-20 pb-20 grid grid-cols-2 text-light dark:text-dark">
      {language ? (
        <div className="text-end pr-1 text-semititulo">!Contáctame!</div>
      ) : (
        <div className="text-end pr-1 text-semititulo">Contact me!</div>
      )}
      <div className="text-start pl-1 flex">
        <a
          href="https://www.linkedin.com/in/franco-adamoli/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={linkedin}
            alt="linkedinIco"
            className="w-12 relative mx-4"
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
            className="w-10 relative top-1 mr-5"
          />
        </a>
      </div>
    </div>
  );
}

export default Contactame;
