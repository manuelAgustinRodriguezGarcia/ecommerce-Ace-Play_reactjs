import { useContext } from "react";
import CartData from "../../contexts/CartData";
import FavoritesData from "../../contexts/FavoritesData";
import { NavLink } from "react-router-dom";

function FavCartWidget() {
  const contadorCarrito = useContext(CartData)
  const contadorFavoritos = useContext(FavoritesData)
  return(
    <div className= "nav-gen-cartFav">
      <NavLink to={'/favoritos'} className="fav">
        <i className="bi bi-heart"></i>
        <p>{contadorFavoritos.contFav}</p>
      </NavLink>
      <NavLink to={'/carrito'} className="cart">
        <i className="bi bi-cart"></i>
        <p>{contadorCarrito.contCart}</p>
      </NavLink>
    </div>
  )
}
export default FavCartWidget;