import React from 'react'
import { NavLink } from 'react-router-dom'

export const EmptyPage = () => {
  return (
    <section className='onwork'>
      <div className='onwork_box'>
        <div className='onwork_box_title'>
          <h1  data-text="Estamos trabajando duro en terminar esta página para ti! We're working hard to finish this page for you!" className='degrade'>Estamos trabajando duro en terminar esta página para ti! We're working hard to finish this page for you!</h1>
        </div>
        <i className="bi bi-hammer"></i>
      </div>
      <h2>
        Mientras terminamos con estas secciones, por favor visitá los sitios: 
      </h2>
      <div className='onwork_links'>
        <NavLink to={'/'}>INICIO</NavLink>
        <NavLink to={'/categorias'}>CATEGORIAS</NavLink>
        <NavLink to={'/juegos/page/1'}>JUEGOS</NavLink>
        <NavLink to={'/favoritos'}>FAVORITOS</NavLink>
        <NavLink to={'/carrito'}>CARRITO</NavLink>
      </div>
    </section>
  )
}