import React from 'react'
import { NavLink } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div className='carrito-vacio'>
        <i className="bi bi-controller"></i>
        <h2>Todavía no agregaste nada a tu carrito!
        Encontrá el juego que estás buscando <NavLink to={'/categorias'}>aquí.</NavLink></h2>
    </div>
  )
}
export default EmptyCart;