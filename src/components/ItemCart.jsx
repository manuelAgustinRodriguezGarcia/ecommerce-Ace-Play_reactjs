import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
export const ItemCart = ( { game } ) => {
  const carrito = useContext(CartContext)
  const listaCarrito = carrito.cart;
  function eliminarDeCarrito() {
    const carritoNuevo = listaCarrito.filter((x) => x.id !== game.id);
    carrito.setCounterCart(carrito.counterCart - 1)
    carrito.setCart(carritoNuevo)
  }
  return (
    <div className="carrito_info_list_item">
      <img src={game.img}/>
      <div className="carrito_info_list_item_title">
        <h2>{game.name}</h2>
      </div>
      <div className="carrito_info_list_item_data">
        <h3>${game.price} </h3>
      </div>
      <button onClick={() => eliminarDeCarrito()}>Eliminar</button>
    </div>
  )
}