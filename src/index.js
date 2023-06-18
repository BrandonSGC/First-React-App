import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Main } from "./components/Main"
import './Normalize.css';
import './Styles.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Header logo="ReactJS" enlace1="Inicio" enlace2="Crear Cliente" enlace3="Ver Clientes"/>
    <Main clientName="Cliente #2 - React"/>
  </>
);
