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

function App() {

  const language = useSelector(state => state.language);

  return (
    <div className="App">
      <Nav />
      {language ? (
        <>
        <Head />
        <Resumen />
        <Proyectos />
        <Estudios />
        <Contactame />
        </>
      ) : (
        <>
        <HeadEN />
        <ResumenEN />
        <ProyectosEN />
        <EstudiosEN />
        <ContactameEN />
        </>
      )}
    </div>
  );
}

export default App;
