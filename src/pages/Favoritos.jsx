import FavoritesData from "../contexts/FavoritesData";
import React, { useContext } from "react";
import ItemFav from "../components/ItemFav";
import EmptyFav from "../components/EmptyFav";


function Favoritos() {
  const favoritosContext = useContext(FavoritesData)
  const listaFavoritos = favoritosContext.favoritos

  return (
    <section className="favoritos">
      <div className="favoritos-list">
        {listaFavoritos.length == 0 ?
          <EmptyFav/> : listaFavoritos.map((x) => <ItemFav key={x.id} game={x}/>)}
      </div>
    </section>
  );
}

export default Favoritos;