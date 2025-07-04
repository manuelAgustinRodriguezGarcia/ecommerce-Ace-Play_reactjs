import React from 'react'

export const JuegoItem = ({data}) => {
  return (
    <div className='juegos_list_item'>
      <h2>{data.name}</h2>
      <p>{data.released}</p>
    </div>
  )
}