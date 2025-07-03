import React, { useContext } from "react";
import { useParams, NavLink } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import AllGames from "../contexts/AllGames";

const ItemDetailContainer = () => {
  const { id } = useParams();//usa el id de la URL
  const contextJuegos = useContext(AllGames)
  const listaJuegos = contextJuegos.productos; //pone en contexto la lista total de juegos

  const juego = listaJuegos.find((x) => x.id === parseInt(id))
  if (!juego) {
    return <div className="detail-loading">Cargando...</div>
  }
  const otrosJuegos = listaJuegos.filter((x) => x.id !== parseInt(id))
  return(//itemDetail game={juego} pasa por prop el juego que coincide con el ID para usarlo en itemDetail
    <section className="detail">
      <NavLink className={"detail-link"} to={`/categorias/${juego.category}`}><i class="bi bi-arrow-left-circle"></i>{juego.category}</NavLink>
      <ItemDetail game={juego}/> 
      <div className="detail-suggest">
      <h2>Juegos recomendados</h2>
        {otrosJuegos.map(x => 
          <NavLink key={x.id} className={"detail-suggest-item"} to={`/game/${x.id}`} onClick={() => window.scrollTo(0,0)}>
            <img src={x.img}></img>
            <p>Ver Detalles</p>
            <h3>{x.name}</h3>
          </NavLink>)}
      </div>
    </section> 
  )
}

export default ItemDetailContainer;