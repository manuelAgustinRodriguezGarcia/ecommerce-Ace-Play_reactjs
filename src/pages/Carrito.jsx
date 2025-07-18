import { useContext } from "react";
import { ItemCart } from "../components/ItemCart";
import { NavLink } from "react-router-dom";
import { EmptyCart } from "../components/EmptyCart";
import { EmptyPage } from "../components/EmptyPage";
import { CartContext } from "../contexts/CartContext";


export const Carrito = () => {
  const carrito = useContext(CartContext);
  const cartList = carrito.cart
  const precios = cartList.map((x) => x.price);
  const calcularTotal = () => {
    return precios.reduce((total, item) => total + item, 0).toFixed(2);
  }
  return (
    <section className="carrito">
      <EmptyPage></EmptyPage>
      <h2 className="carrito_title">Tu lista de juegos en <span className="degrade" data-text='Carrito'>Carrito</span></h2>
      <div className="carrito_info">
        <div className="carrito_info_list">
          {cartList.length === 0 ? <EmptyCart />
          : 
          <>
            {cartList.map((x) => <ItemCart key={x.id} game={x} />)}
            <div className="carrito_info_list_total">
              <h2>Total: $ {calcularTotal()}</h2>
              <NavLink className={'carrito_info_list_total_button'} to={'/checkout'}>Procesar compra</NavLink>
            </div>
          </>}
        </div>
        <div className="carrito_info_check">
          {/*lista con precios de juego con un max height y sino un scroll en esa lista con overflow hidden*/}
        </div>
      </div>
    </section>
  );
}