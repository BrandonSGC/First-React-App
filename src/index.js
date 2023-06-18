import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Main } from "./components/Main"
import { Formulario } from "./components/Formulario";
import { Tabla } from './components/Tabla'
import { Footer } from "./components/Footer";
import './Normalize.css';
import './Styles.css';


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Header logo="ReactJS" enlace1="Inicio" enlace2="Crear Cliente" enlace3="Ver Clientes"/>
    <Main clientName="Cliente #2 - React"/>
    <section className="actualizarCliente">
      
      <div className="actualizarCliente__contenedor">
          <div className="actualizarCliente__display">
            <h3 className="actualizarCliente__heading">Actualizar Cliente</h3>
            <Formulario/>
          </div>
      </div>
    </section>
    <section className="tablaClientes">
      <div className="tablaClientes__contenedor">
          <div className="tablaClientes__display">
            <h1 className="tablaClientes__heading">Tabla Clientes</h1>
            <Tabla/>
          </div>          
      </div>
    </section>
    <Footer/>
  </>
);
