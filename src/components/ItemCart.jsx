import { useContext, useState } from "react";
import CartData from "../contexts/CartData";
import { NavLink } from "react-router-dom";

const ItemCart = ( { game } ) => {
  const Carrito = useContext(CartData)
  const productosEnCarrito = Carrito.productosCarrito;
  function eliminarDeCarrito() {
    const carritoNuevo = productosEnCarrito.filter((x) => x.id !== game.id);
    Carrito.setContCart(Carrito.contCart - 1)
    Carrito.setProductosCarrito(carritoNuevo)
  }
  const [cantidad, setCantidad] = useState(game.cantidad)
  return (
    <div className="carrito-list-item">
      <img src={game.img} alt={game.nombre}/>
      <div className="carrito-list-item-title">
        <h2>{game.nombre}</h2>
        <NavLink to={`/game/${game.id}`}>Ver detalles...</NavLink>
      </div>
      <div className="carrito-list-item-data">
        <h3>${game.precio * cantidad} </h3>
        <div className="carrito-list-item-data-cantidad">
          <button onClick={() => cantidad > 1 && setCantidad(cantidad - 1)}>-</button>
          <p>{cantidad}</p>
          <button onClick={() => setCantidad(cantidad + 1)}>+</button>
        </div>
      </div>
      <button onClick={() => eliminarDeCarrito()}>Eliminar</button>
    </div>
  )
}
export default ItemCart;