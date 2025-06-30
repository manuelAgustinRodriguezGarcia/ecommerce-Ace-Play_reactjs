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
      <NavLink className="categoria-item" to={'/categorias/estrategia'}>
        <h2>Estrategia</h2>
        <img src="../images/categoriaEstrategia.jpg" alt="Aventura" />
      </NavLink>
      <NavLink className="categoria-item" to={'/categorias/terror'}>
        <h2>Terror</h2>
        <img src="../images/categoriaTerror.jpg" alt="Aventura" />
      </NavLink>
      <NavLink className="categoria-item" to={'/categorias/simulacion'}>
        <h2>Simulador</h2>
        <img src="../images/categoriaSimulator.jpg" alt="Aventura" />
      </NavLink>
    </section>
  );
}

export default Categorias;