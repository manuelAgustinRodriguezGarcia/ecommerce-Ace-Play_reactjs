import Item from "./Item";
const CategoryList = ( { games } ) => {
  return (  
    <div className="juegos">
      {games.find((x) => <Item key={x.id} game={x}/>)}
    </div>
  );
}

export default CategoryList;