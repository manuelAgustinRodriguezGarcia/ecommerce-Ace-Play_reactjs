import { useContext} from "react";
import ItemList from "./ItemList";
import { NavLink ,useParams } from "react-router-dom";
import AllGames from "../contexts/AllGames";

const ItemListContainer = () => {
  const contextJuegos = useContext(AllGames)
  const listaJuegos = contextJuegos.productos

  const { category } = useParams();
  const juegos = listaJuegos.filter((x) => x.category.toLowerCase().includes(category.toLowerCase()))
  return(
    <section className="itemListContainer">
      <NavLink to={`/categorias`} className={"linkCategorias"}><i class="bi bi-arrow-left-circle"></i></NavLink>
      <h1>{category.toUpperCase()}</h1>
      <div className= "itemListContainer-items">
        {<ItemList games={juegos} />}
      </div>
    </section>
  )
}
export default ItemListContainer;