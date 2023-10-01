import allGames from "../utils/allGames"
import ItemList from "./ItemList";

import { NavLink ,useParams } from "react-router-dom";
const ItemListContainer = () => {
  const { categoria } = useParams()
  const juegos = allGames.filter((x) => x.categoria.toLowerCase().includes(categoria.toLowerCase()))
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