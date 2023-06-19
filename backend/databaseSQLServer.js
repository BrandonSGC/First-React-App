// Este archivo vamos a tener la configuración de la base de datos
// de SQL Server y la lógica relacionada.

const sql = require("mssql");

// Configuración de la conexión a la base de datos
const config = {
  user: "sa",
  password: "root",
  server: "localhost",
  database: "WebServices",
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

// Funcion para actualizar los clientes.
async function actualizarClienteSQLServer(cedula, estado) {
  try {
    // Crear una nueva pool de conexiones
    const pool = await sql.connect(config);

    // Se especifica la consulta SQL con marcadores de posición "@" para los valores.
    const query = "UPDATE Cliente SET estado = @estado WHERE cedula = @cedula";
    // Se proporciona un objeto con los valores correspondientes.
    const values = { estado, cedula };

    // Ejecutar la consulta con los valores
    const result = await pool
      .request()
      .input("estado", sql.Bit, values.estado)
      .input("cedula", sql.VarChar, values.cedula)
      .query(query);

    console.log("Datos del Cliente actualizados correctamente");
  } catch (error) {
    console.error("Error al actualizar los datos del cliente:", error);
  }
}

// Función para obtener los clientes.
async function obtenerClientesSQLServer() {
  try {
    await sql.connect(config);
    const result = await sql.query("SELECT * FROM Cliente");
    return result.recordset;
  } catch (error) {
    throw error;
  } finally {
    sql.close();
  }
}

// Exportamos las funciones.
module.exports = {
    actualizarClienteSQLServer,
};
