import { useContext } from "react";
import CartData from "../contexts/CartData";
import Swal from "sweetalert2";

const ItemCart = ( { game } ) => {
  const Carrito = useContext(CartData)
  const productosEnCarrito = Carrito.productosCarrito;
  function eliminarDeCarrito() {
    const carritoNuevo = productosEnCarrito.filter((x) => x.id !== game.id);
    Carrito.setContCart(Carrito.contCart - 1)
    Carrito.setProductosCarrito(carritoNuevo)
    const Toast = Swal.mixin({ 
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 2500,
      timerProgressBar: true,
      background: 'rgb(54, 54, 54)',
      color:'#fff',
      width: '20em',
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    Toast.fire({
      icon: 'error',
      iconColor:'rgb(255, 0, 0, 0.8)',
      title: 'Eliminado de tu carrito!'
    })
  }
  return (
    <div className="carrito-list-item">
      <img src={game.img} alt={game.nombre}/>
      <div className="carrito-list-item-title">
        <h2>{game.nombre}</h2>
      </div>
      <div className="carrito-list-item-data">
        <p>{game.cantidad} unid.</p>
        <h3>${game.precio * game.cantidad} </h3>
      </div>
      <button onClick={() => eliminarDeCarrito()}>Eliminar</button>
    </div>
  )
}
export default ItemCart;