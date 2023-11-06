import React from "react";
import Head from "./components/head.jsx";
import HeadEN from "./components/headEN.jsx";
import Resumen from "./components/resumen.jsx";
import ResumenEN from "./components/resumenEN.jsx";
import Proyectos from "./components/proyectos.jsx";
import ProyectosEN from "./components/proyectosEN.jsx";
import Estudios from "./components/estudios.jsx";
import EstudiosEN from "./components/estudiosEN.jsx";
import Contactame from "./components/contactame.jsx";
import ContactameEN from "./components/contactameEN.jsx";
import Nav from "./components/nav.jsx";
import "./App.css";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const language = useSelector((state) => state.language);

  return (
    <div className="bg-radial-light dark:bg-radial-dark h-auto from-45%">
      <div className="App mx-48">
        <Nav />
        {language ? (
          <>
            <Head />
            <ToastContainer position="top-right" autoClose={1500} />
            <Resumen />
            <Estudios />
            <Proyectos />
            <Contactame />
          </>
        ) : (
          <>
            <HeadEN />
            <ToastContainer position="top-right" autoClose={1500} />
            <ResumenEN />
            <EstudiosEN />
            <ProyectosEN />
            <ContactameEN />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
