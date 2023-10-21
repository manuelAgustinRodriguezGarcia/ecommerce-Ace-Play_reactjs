import { NavLink } from "react-router-dom";

function Categorias() {
  return (
    <section className="categoria">
      <NavLink className="categoria-item" to={'/categorias/accion'}>
        <h2>Acción</h2>
        <img src="../images/categoriaAccion.png" alt="Acción" />
      </NavLink>
      <NavLink className="categoria-item" to={'/categorias/carreras'}>
        <h2>Carreras</h2>
        <img src="../images/categoriaCarreras.png" alt="Carreras" />
      </NavLink>
      <NavLink className="categoria-item" to={'/categorias/aventura'}>
        <h2>Aventura</h2>
        <img src="../images/categoriaAventura.png" alt="Aventura" />
      </NavLink>
    </section>
  );
}

export default Categorias;