import React from 'react'
import { NavLink } from 'react-router-dom';

export const JuegoItem = ({ data }) => {

  const ratingCheck = () => {
    const rating = parseFloat(data.rating);
    const entero = Math.floor(rating);
    const decimal = rating - entero;
    const estrellasLlenas = Array(entero).fill(<i className="bi bi-star-fill"></i>);
    const mediaEstrella = decimal >= 0.4 ? <i className="bi bi-star-half"></i> : null;
    return (
      <>
        {estrellasLlenas.map((star, index) => (
          <span key={index}>{star}</span>
        ))}
        {mediaEstrella}
        <p className='juegos_list_item_rating_value'>{rating.toFixed(1)}</p>
      </>
    );
  }

  const released = parseInt(data.released.substring(0, 4));
  const currentYear = new Date().getFullYear();
  const antiguedad = currentYear - released;
  const price = Math.max(5, 69 - antiguedad * 3);


  return (
    <div className='juegos_list_item' to={`/juegos/${data.id}`}>
      <img src={data.background_image} alt={"Imagen portada de " + data.name} />
      <h4 className='juegos_list_item_title' title={data.name}>{data.name}</h4>
      <div className='juegos_list_item_info'>
        <p className='juegos_list_item_info_category' title={data.genres[0].name}>{data.genres[0].name.toUpperCase()}</p>
        <div className='juegos_list_item_info_rating'>{ratingCheck()}</div>
      </div>
      <h5>${price}.99</h5>
      <NavLink to={`/juegos/juego/${data.id}`}>Comprar</NavLink>
    </div>
  )
}