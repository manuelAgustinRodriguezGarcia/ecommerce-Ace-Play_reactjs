import React, { useState } from "react";
import { FavCartWidget } from './FavCartWidget'
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => setMenuOpen((prev) => !prev);
    const handleNavigate = () => setMenuOpen(false);

    return(
      <header className="nav">
        <div className="nav-gen">
          <NavLink to="/" onClick={handleNavigate}><h1 className="nav-gen-title degrade" data-text="acePlay">acePlay</h1></NavLink>
          <nav className={`nav-gen-center ${menuOpen ? 'open' : ''}`}>
            <NavLink to="/lanzamientos" onClick={handleNavigate}>Lanzamientos</NavLink>
            <NavLink to="/categorias" onClick={handleNavigate}>Categorias</NavLink>
            <NavLink to="/juegos/page/1" onClick={handleNavigate}>Juegos</NavLink>
          </nav>
          <div className="nav-gen-right">
            <FavCartWidget />
            <button className={`nav-gen-toggle ${menuOpen ? 'active' : ''}`} aria-label="Abrir menú" onClick={handleToggle}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>
    )
}
