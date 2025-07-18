import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FavoritesContext } from "../contexts/FavoritesContext";
import { CartContext } from "../contexts/CartContext";

export const ItemFav = ({ game }) => {
  console.log('Game recibido en ItemFav:', game);
  const datosFavoritos = useContext(FavoritesContext)
  const listaFavoritos = datosFavoritos.fav;

  const carrito = useContext(CartContext);
  const cartList = carrito.cart;

  function eliminarFavorito() {
    const nuevoFavoritos = listaFavoritos.filter((x) => x.id !== game.id);
    datosFavoritos.setFav(nuevoFavoritos)
    datosFavoritos.counterFav > 0 && datosFavoritos.setCounterFav(datosFavoritos.counterFav - 1);
  }

  const alreadyCart = (id) => {
    return cartList.some((a) => a.id === id);
  }

  const agregarCart = () => {
    if (alreadyCart(game.id) === false) {
      carrito.setCounterCart(carrito.counterCart + 1);
      carrito.setCart([...cartList, datosCarrito]);
    } else {
      console.log('Ya en carrito');
    }
  }

  let datosCarrito = {
    id: game.id,
    name: game.name,
    img: game.img,
    price: game.price,
    platforms: game.platforms
  }
  return (
    <div className="favoritos_list_item">
      <NavLink className="favoritos_list_item_image" to={`/juegos/page/1/juego/${game.id}`}>
        <img src={game.img} />
      </NavLink>
      <div className="favoritos_list_item_info">
        <div className="favoritos_list_item_info_title">
          <NavLink to={`/juegos/page/1/juego/${game.id}`}>
            <h3>{game.name}</h3>
          </NavLink>
          <div className="favoritos_list_item_info_title_tags">
            <h5>{game.genre}</h5>
            {game.tags.slice(0, 5).map((tag, i) => (
              <h5 key={i}>{tag.name}</h5>
            ))}
          </div>
        </div>
        <h4>Lanzamiento: {game.date}</h4>
        <h4>Calificaciones: {game.rating} <i className="bi bi-star-fill"></i></h4>
        <div className="favoritos_list_item_info_platforms">{game.platforms.slice(0, 4).map((item, index) => (
          <h4 key={index}>{item.platform.name}</h4>))}
        </div>
        <div className="favoritos_list_item_info_cta">
          <h3>${game.price}</h3>
          {alreadyCart(game.id) ? <NavLink to={'/carrito'}>Ver carrito</NavLink> : <button onClick={agregarCart}><span>Agregar a carrito</span></button>}
        </div>
      </div>
      <button className="favoritos_list_item_delete" onClick={() => eliminarFavorito()}><i className="bi bi-trash3"></i></button>
    </div>
  )
}