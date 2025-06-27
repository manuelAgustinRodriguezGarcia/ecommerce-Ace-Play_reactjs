import React, { useContext } from "react";
import { useParams, NavLink } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import AllGames from "../contexts/AllGames";

const ItemDetailContainer = () => {
  const { id } = useParams()
  const contextJuegos = useContext(AllGames)
  const listaJuegos = contextJuegos.productos
  const juego = listaJuegos.find((x) => x.id === id)
  if (!juego) {
    return <div className="detail-loading">Cargando...</div>
  }
  const otrosJuegos = listaJuegos.filter((x) => x.id !== id)
  return(
    <section className="detail">
      <NavLink className={"detail-link"} to={`/categorias/${juego.category}`}>Volver...</NavLink>
      <ItemDetail game={juego}/>
      <div className="detail-suggest">
      <h2>Juegos recomendados</h2>
        {otrosJuegos.map(x => 
          <NavLink key={x.id} className={"detail-suggest-item"} to={`/game/${x.id}`}>
            <img src={x.img}></img>
            <p>Ver Detalles</p>
            <h3>{x.name}</h3>
          </NavLink>)}
      </div>
    </section> 
  )
}

export default ItemDetailContainer;