import { useContext } from "react";
import CartData from "../../contexts/CartData";
import { NavLink } from "react-router-dom";

function CartWidget() {
  const contadorCarrito = useContext(CartData)
  return(
    <NavLink to={'/carrito'} className="cart">
      <i className="bi bi-cart4"></i>
      <p>{contadorCarrito.contCart}</p>
    </NavLink>
  )
}
export default CartWidget;