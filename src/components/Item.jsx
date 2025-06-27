import { NavLink } from "react-router-dom";
function Item({ game }) {
  return (  
    <div className="juegos-item">
      <h3>{game.name}</h3>
      <h4>${game.price}</h4>
      <NavLink to={`/game/${game.id}`} className={"juegos-item-link"}>Ver detalles</NavLink>
    </div>
  );
}
export default Item;