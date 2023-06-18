export function Tabla() {
  return (
    <table className="tabla">
      <thead className="tabla__header">
        <tr className="tabla__fila">
          <th className="tabla__columna">Cédula</th>
          <th className="tabla__columna">Nombre Completo</th>
          <th className="tabla__columna">Télefono</th>
          <th className="tabla__columna">Email</th>
          <th className="tabla__columna">Fecha de Nacimiento</th>
          <th className="tabla__columna">Sexo</th>
          <th className="tabla__columna">Estado</th>
        </tr>
      </thead>
      <tbody className="tabla__datos"></tbody>
    </table>
  );
}
