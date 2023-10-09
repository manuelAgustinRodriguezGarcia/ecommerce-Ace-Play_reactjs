import { useContext } from "react";
import CartData from "../contexts/CartData";
import ItemCart from "../components/ItemCart";


function Carrito() {
  const Carrito = useContext(CartData)
  const preciosCarrito = Carrito.productosCarrito.map((x) => x.precio * x.cantidad);
  const calcularTotal = () => {
    return preciosCarrito.reduce((total, item) => total + item ,0 )
  }
  return (
    <section className="carrito">
      <div className="carrito-list">
        {Carrito.productosCarrito.length === 0 ? <h1>NO HAY NADA...</h1> :
        Carrito.productosCarrito.map((x) => <ItemCart key={x.id} game={x}/>)}
      </div>
      <h2>Total: $ {calcularTotal()}</h2>
    </section>
  );
}

export default Carrito;