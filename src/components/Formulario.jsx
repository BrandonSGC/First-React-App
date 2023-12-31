//import "../Formulario.js";
import React, { useEffect, useState } from "react";

export function Formulario() {
  // Para crear un estado clientes que almacenará los datos obtenidos de la API
  const [clientes, setClientes] = useState([]);
  const [clienteSeleccionado, setClienteSeleccionado] = useState(null);
  const [cedulaSeleccionada, setCedulaSeleccionada] = useState("");

  useEffect(() => {
    obtenerClientes();

    async function obtenerClientes() {
      const response = await fetch("/obtenerClientes");
      const data = await response.json();
      setClientes(data);
      if (data.length > 0) {
        setClienteSeleccionado(data[0]);
      }
    }
  }, []);

  const handleCedulaChange = (event) => {
    const cedulaSeleccionada = event.target.value;
    // Arreglar error. Seguro por el tipo de dato...
    const cliente = clientes.find(
      (cliente) => cliente.cedula === parseInt(cedulaSeleccionada)
    );
    setCedulaSeleccionada(cedulaSeleccionada);
    setClienteSeleccionado(cliente);    
  };

  return (
    <form
      action="/actualizarCliente"
      method="post"
      id="formularioClientes"
      className="actualizarCliente__formulario"
    >
      <fieldset>
        <label htmlFor="cedula">Cedula:</label>
        <select
          className="actualizarCliente__input"
          name="cedula"
          id="cedula"
          value={cedulaSeleccionada}
          onChange={handleCedulaChange}
        >
          {clientes.map((cliente) => (
            <option key={cliente.cedula} value={cliente.cedula}>
              {cliente.cedula}
            </option>
          ))}
        </select>

        <label htmlFor="nombre">Nombre:</label>
        <input
          className="actualizarCliente__input"
          type="text"
          name="nombre"
          id="nombre"
          value={clienteSeleccionado ? clienteSeleccionado.nombre : ""}
          readOnly
        />

        <label htmlFor="primerApellido">Primer Apellido:</label>
        <input
          className="actualizarCliente__input"
          type="text"
          name="primerApellido"
          id="primerApellido"
          value={clienteSeleccionado ? clienteSeleccionado.primerApellido : ""}
          readOnly
        />

        <label htmlFor="segundoApellido">Segundo Apellido:</label>
        <input
          className="actualizarCliente__input"
          type="text"
          name="segundoApellido"
          id="segundoApellido"
          readOnly
          value={clienteSeleccionado ? clienteSeleccionado.segundoApellido : ""}
        />

        <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
        <input
          className="actualizarCliente__input"
          type="text"
          name="fechaNacimiento"
          id="fechaNacimiento"
          readOnly
          value={clienteSeleccionado ? clienteSeleccionado.fechaNacimiento : ""}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="telefono">Teléfono:</label>
        <input
          className="actualizarCliente__input"
          type="number"
          name="telefono"
          id="telefono"
          readOnly
          value={clienteSeleccionado ? clienteSeleccionado.telefono : ""}
        />

        <label htmlFor="email">Email:</label>
        <input
          className="actualizarCliente__input"
          type="email"
          name="email"
          id="email"
          readOnly
          value={clienteSeleccionado ? clienteSeleccionado.email : ""}
        />

        <label htmlFor="sexo">Sexo:</label>
        <input
          className="actualizarCliente__input"
          type="text"
          name="sexo"
          id="sexo"
          readOnly
          value={clienteSeleccionado ? clienteSeleccionado.sexo : ""}          
        />

        <label htmlFor="estado" className="">
          Estado:
        </label>
        <select className="actualizarCliente__input" name="estado" id="estado">
          <option value="0">Inactivo</option>
          <option value="1">Activo</option>
        </select>
        <button
          id="btnActualizarCliente"
          className="actualizarCliente__boton"
          type="submit"
        >
          Actualizar Cliente
        </button>
      </fieldset>
    </form>
  );
}