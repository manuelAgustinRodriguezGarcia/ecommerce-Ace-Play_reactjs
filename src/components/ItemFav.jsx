import { useContext } from "react";
import FavoritesData from "../contexts/FavoritesData";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { FavoritesContext } from "../contexts/FavoritesContext";


//       id: id,
//       name: juego.name,✅
//       img: juego.background_image,✅
//       price: price,
//       date: juego.released,
//       tags: juego.tags?.slice(0, 5),
//       genre: juego.genres?.[0]?.name,
//       platforms: juego.parent_platforms,
//       rating: juego.rating

const ItemFav = ( { game } ) => {
  console.log('Game recibido en ItemFav:', game);
  const datosFavoritos = useContext(FavoritesContext)
  const listaFavoritos = datosFavoritos.fav;
  function eliminarFavorito() {
    const nuevoFavoritos = listaFavoritos.filter((x) => x.id !== game.id);
    datosFavoritos.setFav(nuevoFavoritos)
    datosFavoritos.counterFav > 0 && datosFavoritos.setCounterFav(datosFavoritos.counterFav - 1);
  }
  return (
    <div className="favoritos-list-item">
      <NavLink to={`/game/${game.id}`}>
        <h3>{game.name}</h3>
        <img src={game.img}/>
      </NavLink>
        <div>
          
          <button onClick={() => eliminarFavorito()}>Eliminar</button>
        </div>
    </div>
  )
}
export default ItemFav;