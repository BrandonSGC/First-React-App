import React, { useEffect } from "react";

async function obtenerClientesMySQL() {
  try {
    const response = await fetch("/obtenerClientes");
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error("Error al obtener los clientes:", error);
  }
}

function cargarTiposCuenta() {
    fetch('/obtenerClientes')
    .then(response => response.json())
    .then(clientes => {
        const selectCedula = document.querySelector('#cedula');
        clientes.forEach(element => {        
            const option = document.createElement('option');
            option.textContent = element.descripcion;
            option.value = element.cedula;
            selectCedula.appendChild(option);
            console.log(clientes);
        });        
    })
    .catch(error => {
        console.error(error);
    });
}