import { NavLink } from "react-router-dom";
function Item({ game }) {
  return (  
    <div className="juegos-item">
      <img src={game.img} alt="" />
      <h3>{game.nombre}</h3>
      <h4>${game.precio}</h4>
      <NavLink to={`/game/${game.id}`} className={"juegos-item-link"}>Ver detalles</NavLink>
    </div>
  );
}
export default Item;