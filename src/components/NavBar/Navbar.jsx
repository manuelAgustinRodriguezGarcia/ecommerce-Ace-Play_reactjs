import React, { useState } from "react";
import { FavCartWidget } from './FavCartWidget'
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    const [open, setOpen] = useState(false)

    const toggleMenu = () => setOpen(!open)

    return(
      <header className="nav">
        <div className="nav-gen">
          <NavLink to="/"><h1 className="nav-gen-title degrade" data-text="acePlay">acePlay</h1></NavLink>
          <div className={`nav-gen-center ${open ? 'open' : ''}`}>
            <NavLink to="/lanzamientos">Lanzamientos</NavLink>
            <NavLink to="/categorias">Categorias</NavLink>
            <NavLink to="/juegos/page/1">Juegos</NavLink>
          </div>
          <FavCartWidget />
          <button className="nav-toggle" onClick={toggleMenu}>
            <i className="bi bi-list"></i>
          </button>
        </div>
      </header>
    )
}
