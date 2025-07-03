import { useContext } from "react";
import CartData from "../contexts/CartData";
import ItemCart from "../components/ItemCart";
import { NavLink } from "react-router-dom";
import EmptyCart from "../components/EmptyCart";


function Carrito() {
  const Carrito = useContext(CartData)
  const preciosCarrito = Carrito.productosCarrito.map((x) => x.price * x.cantidad);
  const calcularTotal = () => {
    return preciosCarrito.reduce((total, item) => total + item ,0).toFixed(2);
  }
  return (
    <section className="carrito">
      <div className="carrito-list">
        {Carrito.productosCarrito.length === 0 ?  <EmptyCart /> : <>

          {Carrito.productosCarrito.map((x) => <ItemCart key={x.id} game={x}/>)}
          <div className="carrito-total">
            <h2>Total: $ {calcularTotal()}</h2>
            <NavLink className={'carrito-button'} to={'/checkout'}>Procesar compra</NavLink>
          </div>
        </>}
      </div>
    </section>
  );
}

export default Carrito;