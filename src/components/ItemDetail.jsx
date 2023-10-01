import React from "react";
const ItemDetail = ({ game }) => {
  return (
    <div className="detail-game">
      <div className="detail-game-data">
        <img src={game.img} alt="a ver" />
        <div className="detail-game-data-text">
          <h2>{game.nombre} ({game.lanzamiento})</h2>
          <h3>${game.precio}</h3>
          <h4>Género: {game.categoria}</h4>
          <p>{game.descripcion}</p>
        </div>
      </div>
      <div className="detail-game-buttons">
        <button>Añadir a favoritos</button>
        <button>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemDetail;