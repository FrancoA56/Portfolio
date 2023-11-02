import React from "react";
import { changeLanguage } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import DarkMode from "./darkmode";

function Nav() {
  const dispatch = useDispatch();
  const language = useSelector(state => state.language)

  const cambiarIdioma = () => {
    dispatch(changeLanguage());
  };

  return (
    <div className="flex text-light text-parrafo dark:text-dark">
      <button onClick={cambiarIdioma} className="pointer mr-10">
        {language ? (<div>ES</div>) : (<div>EN</div>)}
      </button>
      <div className="relative top-0.5">
      <DarkMode/>
      </div>
    </div>
  );
}

export default Nav;
