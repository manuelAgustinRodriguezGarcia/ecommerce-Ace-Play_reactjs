import React from "react";
import { useParams, NavLink } from "react-router-dom";
import allGames from "../utils/allGames";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams()
  const juego = allGames.find((x) => x.id === parseInt(id))
  const categoriaActual = juego.categoria

  return(
    <div className="detail">
      <NavLink to={`/categorias/${categoriaActual}`}>Volver...</NavLink>
      <ItemDetail game={juego}/>
    </div> 
  )
}

export default ItemDetailContainer;