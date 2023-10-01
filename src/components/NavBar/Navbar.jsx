import React from "react";
import logo from '../../images/logo.png'
import CartWidget from './CartWidget'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
      <header className="nav">
        <div className="nav-top">
          <NavLink to="/"><img src= {logo}/></NavLink>
          <input type="text" placeholder="Buscá tu juego aquí..." id="inputBuscador"/>
          <CartWidget />
        </div>
        <div className="nav-bottom">
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/categorias">Categorias</NavLink>
          <NavLink to="/tendencias">Tendencias</NavLink>
          <NavLink to="/nuevoslanzamientos">Nuevos Lanzamientos</NavLink>
        </div>
      </header>
    )
}

export default Navbar;