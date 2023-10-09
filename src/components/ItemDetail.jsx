import React, { useContext, useState } from "react";
import CartData from "../contexts/CartData";
import Swal from 'sweetalert2'

const ItemDetail = ({ game }) => {
  const datosCarrito = useContext(CartData)
  const [cantidad, setCantidad] = useState(1)
  const datosJuego = {
    id: game.id,
    nombre: game.nombre,
    precio: game.precio,
    img: game.img,
    cantidad: cantidad
  }
  function agregarCart() {
    if (!yaEnCarrito(game)) {
      datosCarrito.contCart < 9 && datosCarrito.setContCart( datosCarrito.contCart + 1 )
      datosCarrito.setProductosCarrito([...datosCarrito.productosCarrito, datosJuego])
      const Toast = Swal.mixin({ 
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        background: 'rgb(54, 54, 54)',
        color:'#fff',
        width: '20em',
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'success',
        iconColor:'rgb(0, 255, 255, 0.8)',
        title: 'Agregado al Carrito!'
      })
    }
    else {
      const Toast = Swal.mixin({ 
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        background:'rgb(76, 76, 76)',
        color:'#fff',
        width: '20em',
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'warning',
        iconColor:'rgb(255, 0, 255, 0.8)',
        title: 'Ya está en el carrito!'
      })
    }
  }
  function yaEnCarrito(game) {
    const juegosCarrito = datosCarrito.productosCarrito
    return juegosCarrito.some(yaEsta => yaEsta.nombre === game.nombre)
  }
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
        <button onClick={() => cantidad > 1 && setCantidad(cantidad - 1)}>-</button>
        <p>{cantidad}</p>
        <button onClick={() => setCantidad(cantidad + 1)}>+</button>
        <div className="detail-game-buttons-add">
          <button>Añadir a favoritos</button>
          <button onClick={agregarCart}>Agregar al carrito</button>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail;