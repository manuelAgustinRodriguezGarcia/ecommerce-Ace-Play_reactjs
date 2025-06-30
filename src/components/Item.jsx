import { NavLink } from "react-router-dom";
function Item({ game }) {
  return (  
    <div className="juegos-item">
      <img src={game.img} alt="Imagen de videojuego" />
      <h3>{game.name}</h3>
      <h4>${game.price}</h4>
      <NavLink to={`/game/${game.id}`} className={"juegos-item-link"}>link a item detail</NavLink>
    </div>
  );
}
export default Item;