import React from "react";
import CartWidget from './CartWidget'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
      <header className="nav">
        <div className="nav-general">
          <NavLink to="/"><img src="../../images/logo.png"/></NavLink>
          <div className="nav-general-center">
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/categorias">Categorias</NavLink>
            <NavLink to="/favoritos">Favoritos</NavLink>
          </div>
          <CartWidget />
        </div>
      </header>
    )
}

export default Navbar;