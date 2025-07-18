import React from 'react'
import { NavLink } from 'react-router-dom'

export const EmptyCart = () => {
  return (
    <div className='carrito_vacio'>
        <i className="bi bi-controller" ></i>
        <h2 className='degrade' data-text='Todavía no agregaste nada a tu carrito!
        Encontrá el juego que estás buscando en nuestra sección de Juegos'>Todavía no agregaste nada a tu carrito!
        Encontrá el juego que estás buscando en nuestra sección de <NavLink to={'/juegos/page/1'}>Juegos!</NavLink></h2>
    </div>
  )
}