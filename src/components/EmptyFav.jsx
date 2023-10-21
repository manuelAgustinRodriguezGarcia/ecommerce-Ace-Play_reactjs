import React from 'react'
import { NavLink } from 'react-router-dom'

const EmptyFav = () => {
  return (
    <div className= 'carrito-vacio'>
        <i className="bi bi-heartbreak"></i>
        <h2>Todavía no agregaste nada a tus favoritos!
        Encontrá el juego que estás buscando <NavLink to={'/categorias'}>aquí.</NavLink></h2>
    </div>
  )
}
export default EmptyFav;