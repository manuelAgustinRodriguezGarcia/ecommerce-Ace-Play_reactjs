import React, { useContext, useState } from 'react'
import CartData from '../contexts/CartData';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const Carrito = useContext(CartData)
  const [submit, setSubmit] = useState(false)
  const [ compraFinalizada, setCompraFinalizada ] = useState(false);
  const claseCheckout = compraFinalizada ? 'checkout-hide' : 'checkout'
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    mail: "",
    mailConfirmado: "",
    telefono: 0
  })
  
  const handleSubmit = (event) => {
    event.preventDefault()
    if (datos.mail === datos.mailConfirmado) {
      setSubmit(true)
    }
    else {
      const Toast = Swal.mixin({ 
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 2000,
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
        icon: 'warning',
        iconColor:'rgb(255, 0, 255, 0.8)',
        title: 'Los emails no son iguales!'
      })
    }
  }
  const redireccionar = useNavigate();

  const productosTotal = Carrito.productosCarrito.map((x) => x.precio * x.cantidad)
  const precioFinal = productosTotal.reduce((a,b) => a + b , 0)
  
  async function agregarDocumento() {
    setTimeout(() => {
          Swal.fire({
            title: 'Compra realizada con exito!',
            text: `Tu número de orden es: ${Math.floor(Math.random() * 10000)}`,
            icon: 'success',
            iconColor:'rgba(255, 0, 255, 0.70)',
            confirmButtonText: 'Cerrar'
          }).then((confirmButon) => {
            if (confirmButon.isConfirmed) {
              redireccionar('/')
            }
          })
        }, 500);
  }
  const productosUsuario = Carrito.productosCarrito.map((x) => ({
    nombre: x.nombre, 
    id: x.id,
    precio: x.precio,
    cantidad: x.cantidad
  }))

  const datosFinales = {
    nombreUsuario: datos.nombre + " " + datos.apellido,
    mail: datos.mail,
    telefono: parseInt(datos.telefono),
    productosUsuario: productosUsuario,
    total: precioFinal
  }

  function terminarCompra() {
    Swal.fire({
      position: 'center',
      showConfirmButton: false,
      title: 'Estamos procesando tu compra...',
      allowOutsideClick: false,
      allowEnterKey: false,
      timerProgressBar: true,
    })
    agregarDocumento()
    Carrito.setProductosCarrito([])
    Carrito.setContCart(0)
    setCompraFinalizada(true)
  }
  return (
    <section className={claseCheckout}>
      {
        submit ? (
          <div className='checkout-resumen'>
            <h2>Resumen de compra</h2>
            <ul className='checkout-resumen-lista'>
              <li>
                <h3>Juego</h3>
                <h3>Cantidad</h3>
                <h3>Subtotal</h3>
              </li>
              {Carrito.productosCarrito.map((x) =>
                <li key={x.id}>
                  <p>{x.nombre}</p>
                  <p>{x.cantidad} unid.</p>
                  <p>${x.cantidad * x.precio}</p>
                </li>)}
            </ul>
            <div className='checkout-resumen-total'>
              <p>Total:</p>
              <h2>${precioFinal}</h2>
              <button onClick={()=>terminarCompra()}>Finalizar compra</button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2>Ingresá tus datos</h2>
            <label>Nombre:<input type="text" placeholder='Ingresá tu nombre...' 
            onChange={(e) => setDatos({ ...datos, nombre: e.target.value })} required /></label>

            <label>Apellido:<input type="text" placeholder='Ingresá tu apellido...' 
            onChange={(e) => setDatos({ ...datos, apellido: e.target.value })} required /></label>

            <label>Email:<input type="email" placeholder='Ingresá tu email...' 
            onChange={(e) => setDatos({ ...datos, mail: e.target.value })} required /></label>

            <label name='emailConfirm'>Confirmar Email:<input name='emailConfirm' type="email" placeholder='Confirmá tu email...' 
            onChange={(e) => setDatos({ ...datos, mailConfirmado: e.target.value })} required /></label>

            <label>Telefono:<input name='number' type="number" placeholder='Ingresá tu numero de telefono...' 
            onChange={(e) => setDatos({ ...datos, telefono: e.target.value })} required /></label>

            <button type='submit'>Continuar</button>
          </form>
        )
      }
    </section>
  )
}

export default Checkout;