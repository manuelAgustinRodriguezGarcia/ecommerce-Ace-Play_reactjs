import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { NavLink } from "react-router-dom";

export const ItemCart = ({ game }) => {
  const carrito = useContext(CartContext)
  const listaCarrito = carrito.cart;

  function eliminarDeCarrito() {
    const carritoNuevo = listaCarrito.filter((x) => x.id !== game.id);
    carrito.setCounterCart(carrito.counterCart - 1)
    carrito.setCart(carritoNuevo)
  }
  return (
    <div className="carrito_info_list_item">
      <NavLink className="carrito_info_list_item_image" to={`/juegos/page/1/juego/${game.id}`}>
        <img src={game.img} alt={game.name}/>
      </NavLink>
      <div className="carrito_info_list_item_data">
        <div className="carrito_info_list_item_data_title">
          <NavLink to={`/juegos/page/1/juego/${game.id}`}><h3>{game.name}</h3></NavLink>
          <div className="carrito_info_list_item_data_title_platforms">
            {game.platforms.slice(0, 4).map((item, index) => (
              <h5 key={index}>{item.platform.name}</h5>))}
          </div>
        </div>
        <h3 className="carrito_info_list_item_data_price">${game.price}</h3>
      </div>
      <button onClick={() => eliminarDeCarrito()}><i className="bi bi-trash3"></i></button>
    </div>
  )
}