import "../Formulario.js";
import React, { useEffect, useState } from "react";

export function Formulario() {
  // Para crear un estado clientes que almacenará los datos obtenidos de la API
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    obtenerClientes();

    async function obtenerClientes() {
      const response = await fetch("/obtenerClientes");
      const data = await response.json();
      setClientes(data);
    }
  }, []);
  return (
    <form
      action="/actualizarCliente"
      method="post"
      id="formularioClientes"
      className="actualizarCliente__formulario"
    >
      <fieldset>
        <label htmlFor="cedula">Cedula:</label>
        <select className="actualizarCliente__input" name="cedula" id="cedula">
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
          readOnly
        />

        <label htmlFor="primerApellido">Primer Apellido:</label>
        <input
          className="actualizarCliente__input"
          type="text"
          name="primerApellido"
          id="primerApellido"
          readOnly
        />

        <label htmlFor="segundoApellido">Segundo Apellido:</label>
        <input
          className="actualizarCliente__input"
          type="text"
          name="segundoApellido"
          id="segundoApellido"
          readOnly
        />

        <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
        <input
          className="actualizarCliente__input"
          type="date"
          name="fechaNacimiento"
          id="fechaNacimiento"
          readOnly
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
        />

        <label htmlFor="email">Email:</label>
        <input
          className="actualizarCliente__input"
          type="email"
          name="email"
          id="email"
          readOnly
        />

        <label htmlFor="sexo">Sexo:</label>
        <select className="actualizarCliente__input" name="sexo" id="sexo">
          <option value="M">Masculino</option>
          <option value="F">Femenino</option>
        </select>

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
      <script src="../Formulario.js"></script>
    </form>
  );
}
