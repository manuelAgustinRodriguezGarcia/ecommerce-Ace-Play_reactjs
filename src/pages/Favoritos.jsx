import { useContext } from "react";
import ItemFav from "../components/ItemFav";
import EmptyFav from "../components/EmptyFav";
import { FavoritesContext } from '../contexts/FavoritesContext';

export const Favoritos = () => {

  const favoritos = useContext(FavoritesContext);
  const favList = favoritos.fav;

  return (
    <section className="favoritos">
      <div className="favoritos-list">
        {
          favList.length == 0 ? <EmptyFav></EmptyFav>
            :
            (
              favList.map((x) => (
                <ItemFav key={x.id} game={x}></ItemFav>
              ))
            )
        }
      </div>
    </section>
  )
}