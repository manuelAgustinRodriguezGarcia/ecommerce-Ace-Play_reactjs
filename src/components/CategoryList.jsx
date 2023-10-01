import Item from "./Item";
const CategoryList = ( { games } ) => {
  return (  
    <div className="juegos">
      {games.filter((game) => <Item key={game.id} game={game}/>)}
    </div>
  );
}

export default CategoryList;