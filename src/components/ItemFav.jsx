import { useContext } from "react";
import FavoritesData from "../contexts/FavoritesData";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";


const ItemFav = ( { game } ) => {
  const Favorito = useContext(FavoritesData)
  const listaFavoritos = Favorito.favoritos;
  function eliminarFavorito() {
    const nuevoFavoritos = listaFavoritos.filter((x) => x.id !== game.id);
    Favorito.setFavoritos(nuevoFavoritos)
    const Toast = Swal.mixin({ 
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 2500,
      timerProgressBar: true,
      background: 'rgb(54, 54, 54)',
      color:'#fff',
      width: '20em',
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    Toast.fire({
      icon: 'error',
      iconColor:'rgb(255, 0, 0, 0.8)',
      title: 'Eliminado de tus Favoritos!'
    })
  }
  return (
    <div to={`/game/${game.id}`} className="favoritos-list-item">
      <NavLink to={`/game/${game.id}`}>
        <img src={game.img} alt={game.name}/>
        <h3>{game.name} ({game.launchDate})</h3>
      </NavLink>
      <button onClick={() => eliminarFavorito()}>Eliminar</button>
    </div>
  )
}
export default ItemFav;