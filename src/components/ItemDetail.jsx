import React, { useContext, useEffect, useState } from "react";
import CartData from "../contexts/CartData";
import Swal from 'sweetalert2'
import { NavLink, useParams } from "react-router-dom";
import FavoritesData from "../contexts/FavoritesData";

const ItemDetail = ({ game }) => {
  const { id } = useParams()
  const [cantidad, setCantidad] = useState(1)

  const datosJuego = {
    id: game.id,
    name: game.name,
    price: game.price,
    img: game.img,
    launchDate: game.launchDate,
    info: game.info,
    category: game.category,
    cantidad: cantidad
  }
  const [apretado, setApretado] = useState(false)

  const textoBotonAdd = apretado ? <NavLink to={'/carrito'}>Ver en el carrito</NavLink> : 'Agregar al carrito';
  const claseBotonAdd = apretado ? 'detail-game-buttons-apretado' : 'detail-game-buttons-add';
  const claseBotones = apretado ? 'detail-game-buttons-btn-hide' : 'detail-game-buttons-btn';
  const claseCantidad = apretado ? 'detail-game-buttons-cant-hide' : 'detail-game-buttons-cant';

  return (
    <div className="detail-game">
      <div className="detail-game-data">
        <img src={game.img} alt="" />
        <div className="detail-game-data-text">
          <h2>{game.name} ({game.launchDate})</h2>
          <h3>${game.price}</h3>
          <h4>Género: {game.category}</h4>
          <p>{game.info}</p>
        </div>
      </div>
      <div className="detail-game-buttons">
        <button onClick={() => cantidad > 1 && setCantidad(cantidad - 1)} className={claseBotones}>-</button>
        <p className={claseCantidad}>{cantidad}</p>
        <button onClick={() => setCantidad(cantidad + 1)} className={claseBotones}>+</button>
        <button className={claseBotonAdd}>{textoBotonAdd}</button>
        <i className="bi bi-heart-fill"></i>
      </div>
    </div>
  )
}

export default ItemDetail;