import { NavLink } from "react-router-dom";
import accion from '../images/categoriaAccion.png'
import aventura from '../images/categoriaAventura.png'
import carreras from '../images/categoriaCarreras.png'

function Categorias() {
  
  return (
    <section className="categoria">
      <NavLink className="categoria-item" to={'/categorias/accion'}>
        <h2>Acción</h2>
        <img src={accion} alt="" />
      </NavLink>
      <NavLink className="categoria-item" to={'/categorias/carreras'}>
        <h2>Carreras</h2>
        <img src={carreras} alt="" />
      </NavLink>
      <NavLink className="categoria-item" to={'/categorias/aventura'}>
        <h2>Aventura</h2>
        <img src={aventura} alt="" />
      </NavLink>
    </section>
  );
}

export default Categorias;