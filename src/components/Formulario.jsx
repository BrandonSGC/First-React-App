export function Formulario() {
  return (
    <form
      action="/crearCliente"
      method="post"
      id="formularioClientes"
      className="crearCliente__formulario"
    >
        <fieldset>
              <label for="cedula">Cedula:</label>
              <input
                className="crearCliente__input"
                type="number"
                name="cedula"
                id="cedula"
              />

              <label for="nombre">Nombre:</label>
              <input
                className="crearCliente__input"
                type="text"
                name="nombre"
                id="nombre"
              />

              <label for="primerApellido">Primer Apellido:</label>
              <input
                className="crearCliente__input"
                type="text"
                name="primerApellido"
                id="primerApellido"
              />

              <label for="segundoApellido">Segundo Apellido:</label>
              <input
                className="crearCliente__input"
                type="text"
                name="segundoApellido"
                id="segundoApellido"
              />

              <label for="fechaNacimiento">Fecha de Nacimiento:</label>
              <input
                className="crearCliente__input"
                type="date"
                name="fechaNacimiento"
                id="fechaNacimiento"
              />
            </fieldset>

            <fieldset>
              <label for="telefono">Teléfono:</label>
              <input
                className="crearCliente__input"
                type="number"
                name="telefono"
                id="telefono"
              />

              <label for="email">Email:</label>
              <input
                className="crearCliente__input"
                type="email"
                name="email"
                id="email"
              />

              <label for="sexo">Sexo:</label>
              <select className="crearCliente__input" name="sexo" id="sexo">
                <option value="">-- Seleccionar Sexo --</option>
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
              </select>

              <label for="estado" className="">Estado:</label>
              <select className="crearCliente__input" name="estado" id="estado">
                <option value="0">Inactivo</option>
              </select>
              <button
                id="btnCrearCliente"
                className="crearCliente__boton"
                type="submit"
              >
                Actualizar Cliente
              </button>
            </fieldset>
    </form>
  );
}