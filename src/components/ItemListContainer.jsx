import { useContext, useEffect, useState } from "react";
import ItemList from "./ItemList";
import { NavLink ,useParams } from "react-router-dom";
import AllGames from "../contexts/AllGames";

const ItemListContainer = () => {
  const contextJuegos = useContext(AllGames)
  const listaJuegos = contextJuegos.productos

  const { categoria } = useParams()
  const juegos = listaJuegos.filter((x) => x.categoria.toLowerCase().includes(categoria.toLowerCase()))
  return(
    <section className="itemListContainer">
      <NavLink to={`/categorias`} className={"linkCategorias"}>Volver a categorías...</NavLink>
      <h1>{categoria.toUpperCase()}</h1>
      <div className= "itemListContainer-items">
        {<ItemList games={juegos} />}
      </div>
    </section>
  )
}
export default ItemListContainer;