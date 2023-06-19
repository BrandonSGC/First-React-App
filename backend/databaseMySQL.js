const mysql = require("mysql");

// Connection.
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "webservices",
});

// Hacemos la conexion para utilizarla en las funciones.
connection.connect((error) => {
  if (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
});

// Funcion para actualizar los clientes.
async function actualizarClienteMySQL(cedula, estado) {
  try {
    // Hacemos la consulta, los ? los pasamos como values en el mismo orden.
    const query = "UPDATE Cliente SET estado = ? WHERE cedula = ?";
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

// Funcion para obtener los clientes.
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

// Exportamos las funciones.
module.exports = {
  actualizarClienteMySQL,
  obtenerClientesMySQL,
};