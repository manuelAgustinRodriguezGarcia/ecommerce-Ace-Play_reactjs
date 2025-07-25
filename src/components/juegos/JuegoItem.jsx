import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

export const JuegoItem = ({ data, page }) => {

  const ratingCheck = () => {
    const rating = parseFloat(data.rating);
    const entero = Math.floor(rating);
    const decimal = rating - entero;
    const estrellasLlenas = Array(entero).fill(<i className="bi bi-star-fill"></i>);
    const mediaEstrella = (decimal > .8) ? <i className="bi bi-star-fill"></i> : <i className="bi bi-star-half"></i>;
    return (
      <>
        <p className='juegos_list_item_rating_value'>{rating.toFixed(2)}</p>
        {estrellasLlenas.map((star, index) => (
          <span key={index}>{star}</span>
        ))}
        {mediaEstrella}
      </>
    )
  }
  
  const navigate = useNavigate();
  const linkToGame = () => {
    navigate(`/juegos/page/${page}/juego/${data.id}`)
  }
  const released = parseInt(data.released?.substring(0, 4));
  const currentYear = new Date().getFullYear();
  const antiguedad = currentYear - released;
  const price = Math.max(5, 69 - antiguedad * 3);


  return (
    <div className='juegos_list_item' onClick={() => linkToGame()}>
      <img src={data.background_image} alt={"Imagen portada de " + data.name} />
      <h4 className='juegos_list_item_title' title={data.name}>{data.name}</h4>
      <div className='juegos_list_item_info'>
        <p className='juegos_list_item_info_category' title={data.genres?.[0].name}>{data.genres?.[0].name.toUpperCase()}</p>
        <div className='juegos_list_item_info_rating'>{ratingCheck()}</div>
      </div>
      <h5>${price}.99</h5>
      <NavLink to={`/juegos/page/${page}/juego/${data.id}`}>Comprar</NavLink>
    </div>
  )
}