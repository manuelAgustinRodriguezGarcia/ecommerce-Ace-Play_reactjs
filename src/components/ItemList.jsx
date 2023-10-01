import Item from "./Item";
const ItemList = ( { games } ) => {
  return (  
    <div className="juegos">
      {games.map((game) => <Item key={game.id} game={game}/>)}
    </div>
  );
}

export default ItemList;