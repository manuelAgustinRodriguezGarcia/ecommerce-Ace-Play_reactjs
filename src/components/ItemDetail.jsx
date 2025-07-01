import React, { useContext, useEffect, useState } from "react";
import CartData from "../contexts/CartData";
import Swal from 'sweetalert2'
import { NavLink, useParams } from "react-router-dom";
import FavoritesData from "../contexts/FavoritesData";

const ItemDetail = ({ game }) => {
  const { id } = useParams()
  const datosCarrito = useContext(CartData)
  const [cantidad, setCantidad] = useState(1)

  const Favoritos = useContext(FavoritesData)
  const listaFavoritos = Favoritos.favoritos

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
  useEffect(() => {
    setApretado(false)
    setCantidad(1)
  }, [id])

  function yaEnCarrito(game) {
    const juegosCarrito = datosCarrito.productosCarrito
    return juegosCarrito.some(yaEsta => yaEsta.id === game.id)
  }
  function yaEnFavoritos(game) {
    return listaFavoritos.some(yaEsta => yaEsta.id === game.id)
  }

  function agregarCart() {
    setApretado(true)
    if (!yaEnCarrito(game)) {
      datosCarrito.contCart < 9 && datosCarrito.setContCart(datosCarrito.contCart + 1)
      datosCarrito.setProductosCarrito([...datosCarrito.productosCarrito, datosJuego])
      const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        background: 'rgb(54, 54, 54)',
        color: '#fff',
        width: '20em',
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'success',
        iconColor: 'rgb(0, 255, 255, 0.8)',
        title: 'Agregado al Carrito!'
      })
    }
  }

  function agregarFav() {
    if (!yaEnFavoritos(game)) {
      Favoritos.setFavoritos([...listaFavoritos, datosJuego])
      const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        background: 'rgb(54, 54, 54)',
        color: '#fff',
        width: '20em',
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'success',
        iconColor: 'rgb(255, 0, 255, 0.8)',
        title: 'Agregado a Favoritos!'
      })
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        background: 'rgb(54, 54, 54)',
        color: '#fff',
        width: '20em',
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'warning',
        iconColor: 'rgb(255, 0, 255, 0.8)',
        title: 'El producto ya fue agregado a Favoritos!'
      })
    }
  }

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
        <button onClick={agregarCart} className={claseBotonAdd}>{textoBotonAdd}</button>
        <i className="bi bi-heart-fill" onClick={agregarFav}></i>
      </div>
    </div>
  )
}

export default ItemDetail;