import React from "react";
import logo from '../images/logo.png'
import CartWidget from './CartWidget'
const Navbar = () => {
    return(
      <header className="nav">
        <div className="nav-top">
          <a href="#"><img src= {logo}/></a>
          <input type="text" placeholder="Buscá tu juego aquí..." id="inputBuscador"/>
          <CartWidget/>
        </div>
        <div className="nav-bottom">
          <a href="#">Inicio</a>
          <a href="#">Categorías</a>
          <a href="#">Tendencias</a>
          <a href="#">Nuevos Lanzamientos</a>
        </div>
      </header>
    )
}

export default Navbar;