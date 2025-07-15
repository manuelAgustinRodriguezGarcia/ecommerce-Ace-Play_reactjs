import React from "react";
import FavCartWidget from './FavCartWidget'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
      <header className="nav">
        <div className="nav-gen">
          <NavLink to="/"><h1 className="nav-gen-title degrade" data-text="acePlay">acePlay</h1></NavLink>
          <div className="nav-gen-center">
            <NavLink to="/lanzamientos">Lanzamientos</NavLink>
            <NavLink to="/ofertas">Ofertas</NavLink>
            <NavLink to="/juegos/page/1">Juegos</NavLink>
            <NavLink to="/categorias">Categorias</NavLink>
          </div>
          <FavCartWidget />
        </div>
      </header>
    )
}
export default Navbar;