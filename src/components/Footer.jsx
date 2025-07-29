
import React from 'react'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2 className='degrade' data-text="acePlay">acePlay</h2>
          <p>No te pierdas las últimas novedades y ofertas de tus juegos favoritos.</p>
        </div>

        <div className="footer-section links">
          <h3>Navegación</h3>
          <ul>
            <li><NavLink to={"/"}>Inicio</NavLink></li>
            <li><NavLink to={"/juegos/page/1"}>Juegos</NavLink></li>
            <li><NavLink to={"/lanzamientos"}>Lanzamientos</NavLink></li>
            <li><NavLink to={"/categorias"}>Categorías</NavLink></li>
            <li><NavLink to={"/pedidos"}>Pedidos</NavLink></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h3>Seguinos</h3>
          <ul className="social-icons">
            <li><a href="#"><i className="bi bi-facebook"></i></a></li>
            <li><a href="#"><i className="bi bi-instagram"></i></a></li>
            <li><a href="#"><i className="bi bi-twitter-x"></i></a></li>
            <li><a href="#"><i className="bi bi-youtube"></i></a></li>
          </ul>
        </div>

        <div className="footer-section api">
          <h3>R A W G</h3>
          <p>Toda la información, imágenes y datos presentados en este sitio fueron obtenidos a través de la API gratis de <a href="https://rawg.io/" target="_blank" rel="noopener noreferrer nofollow">RAWG</a></p>
          
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 AcePlay. Todos los derechos reservados.</p>
        <p>Política de privacidad | Términos y condiciones</p>
      </div>
    </footer>
  )
}