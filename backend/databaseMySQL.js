// Este archivo vamos a tener la configuración de la base de datos
// MySQL y la lógica relacionada.
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "webservices",
});

// Conectar a la base de datos MySQL e usamos la misma conexion para los metodos.
connection.connect((error) => {
  if (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
});

async function actualizarClienteMySQL(cedula, estado) {
  try {

    // Se especifica la consulta SQL con marcadores de posición "?" para los valores.
    const query = "UPDATE Cliente SET estado = ? WHERE cedula = ?";
    // Se proporciona un arreglo values con los valores correspondientes en el mismo orden.
    const values = [estado, cedula];

    connection.query(query, values, (error, results) => {
      if (error) {
        console.error("Error al actualizar los datos del Cliente:", error);
      } else {
        console.log("Datos del Cliente actualizados correctamente");
      }
    });
  } catch (error) {
    console.error("Error al actualizar los datos del cliente:", error);
  }
}

async function obtenerClientesMySQL() {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM Cliente", (error, results) => {
      if (error) {
        reject(error);
      } else {        
        resolve(results);
      }
    });
  });
}

module.exports = {
  actualizarClienteMySQL,
  obtenerClientesMySQL,
};
