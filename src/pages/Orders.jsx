import React, { useContext, useState } from 'react'
import { TicketsContext } from '../contexts/TicketsContext'
import { NavLink } from 'react-router-dom';

export const Orders = () => {
  const pedidos = useContext(TicketsContext);
  const ordersList = pedidos.orders;
  console.log(ordersList)
  window.scrollTo(0, 0);

  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (ticket) => {
    setExpandedId(expandedId === ticket ? null : ticket);
  }
  return (
    <section className='orders'>
      {ordersList.length == 0 ?
        <div className='carrito_vacio'>
          <i className="bi bi-card-list"></i>
          <h2 className='degrade' data-text='Todavía no realizaste ningún pedido!
                Encontrá el juego que estás buscando en nuestra sección de Juegos'>Todavía no realizaste ningún pedido!
            Encontrá el juego que estás buscando en nuestra sección de <NavLink to={'/juegos/page/1'}>Juegos!</NavLink></h2>
        </div>
        :
        <div className='orders_cont'>
          <h2 className='orders_cont_title'>Historial de pedidos</h2>
          {ordersList.map((x) => (
            <div key={x.order.ticket} className='orders_cont_item'>
              <div className='orders_cont_item_info'>
                <h4>PEDIDO #{x.order.ticket}</h4>
                <div className='orders_cont_item_info_text'>
                  <h5>{x.order.date}</h5>
                  <p>-</p>
                  <h5>{x.order.games.length} items</h5>
                  <p>-</p>
                  <h5>Total: ${x.order.total}</h5>
                </div>
                <button onClick={() => toggleExpand(x.order.ticket)}>
                  {expandedId === x.order.ticket ? 'Ocultar' : 'Ver detalles'}
                </button>
              </div>
              <div className={
                expandedId === x.order.ticket
                  ? 'orders_cont_item_detail'
                  : 'orders_cont_item_hiddenDetail'
              }>
                {x.order.games.map((game) => (
                  <h5>{game.name} <span>${game.price}</span></h5>
                ))}
              </div>
            </div>
          ))}
        </div>
      }
    </section>
  )
}