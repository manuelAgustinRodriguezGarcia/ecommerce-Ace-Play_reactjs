import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { CartContext } from "../../contexts/CartContext";

export function FavCartWidget() {
  
  const contadorCarrito = useContext(CartContext)
  const contadorFavoritos = useContext(FavoritesContext)
  return(
    <div className= "nav-gen-cartFav">
      <NavLink to={'/favoritos'} className="fav">
        <i className="bi bi-heart"></i>
        <p>{contadorFavoritos.counterFav <= 9 ? contadorFavoritos.counterFav : '+9'}</p>
      </NavLink>
      <NavLink to={'/carrito'} className="cart">
        <i className="bi bi-cart"></i>
        <p>{contadorCarrito.counterCart <= 9 ? contadorCarrito.counterCart : '+9'}</p>
      </NavLink>
    </div>
  )
}