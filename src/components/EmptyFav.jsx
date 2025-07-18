import React from 'react'
import { NavLink } from 'react-router-dom'

export const EmptyFav = () => {
  return (
    <div className= 'carrito_vacio'>
        <i className="bi bi-heartbreak"></i>
        <h2 className='degrade' data-text='Todavía no agregaste nada a tus favoritos!
        Encontrá el juego que estás buscando en nuestra sección de Juegos!'>Todavía no agregaste nada a tus favoritos!
        Encontrá el juego que estás buscando en nuestra sección de <NavLink to={'/juegos/page/1'}>Juegos!</NavLink></h2>
    </div>
  )
}