import { useContext, useEffect, useState } from "react";
import { ItemCart } from "../components/ItemCart";
import { NavLink } from "react-router-dom";
import { EmptyCart } from "../components/EmptyCart";
import { CartContext } from "../contexts/CartContext";
import { JuegoItem } from "../components/juegos/JuegoItem";


export const Carrito = () => {
  const carrito = useContext(CartContext);
  const cartList = carrito.cart
  const precios = cartList.map((x) => x.price);
  const calcularTotal = () => {
    return precios.reduce((total, item) => total + item, 0).toFixed(2);
  }
  
  const [juegosRelacionados, setJuegosRelacionados] = useState([])
  const [isLoadingRelacionados, setIsLoadingRelacionados] = useState(false);

  const getJuegosRelacionados = async () => {
    try {
      const genre = cartList[0]?.genreCart;
      const pageNum = Math.floor(Math.random() * 6) + 1;
      const response = await fetch(`https://api.rawg.io/api/games?key=957f6a2b15fa49f68a9bb400ac60e7f0&genres=${genre}&page=${pageNum}&page_size=10&exclude_additions=true`)
      const related = await response.json();
      setJuegosRelacionados(related.results);
    }
    catch (error) {
      console.error('Error fetching related games!', error);
    }
  }
  
  
  useEffect(() => {
    if(cartList.length > 0) {
      setIsLoadingRelacionados(true);
      getJuegosRelacionados();
      setTimeout(()=> {
        setIsLoadingRelacionados(false);
      }, 1000)
    }
  }, [cartList.length])

  return (
    <section className="carrito">
      {cartList.length === 0 ? <EmptyCart />
        :
        <>
          <h2 className="carrito_title">Tu lista de juegos en <span className="degrade" data-text='Carrito'>Carrito</span></h2>
          <div className="carrito_info">
            <div className="carrito_info_list">
              {cartList.map((x) => <ItemCart key={x.id + 1} game={x} />)}
              <div className="carrito_related">
                <h3>Recomendaciones <span className='degrade' data-text='acePlay'>acePlay</span> para ti</h3>
                <div className="carrito_related_list">
                  {juegosRelacionados.length > 0 ? juegosRelacionados.filter((relatedGame) => !cartList.some((cartGame) => parseInt(cartGame.id) === parseInt(relatedGame.id)))
                  .slice(0,6)
                    .map((relatedGame) => (
                      <JuegoItem key={relatedGame.id} data={relatedGame} page={'1'}/>
                    ))
                    :
                    (
                      <h2 className="carrito_related_loading"><span className ="degrade" data-text={'Cargando...'}>Cargando...</span></h2>
                    )
                  }
                </div>
              </div>
            </div>
            <div className="carrito_info_check">
              <h3 className="degrade" data-text='Detalle de pedido'>Detalle de pedido</h3>
              <ul className="carrito_info_check_list">
                {cartList.map((x) => (<li key={x.id}>{x.name} <span>{x.price}</span></li>))}
              </ul>
              <div className="carrito_info_check_cta">
                <h3>Total<span>${calcularTotal()}</span></h3>
                <NavLink className={'carrito_info_check_cta_buy'} to={'/checkout'}><span>Continuar al pago</span></NavLink>
              </div>
            </div>
          </div>
        </>}
    </section>
  );
}