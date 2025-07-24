import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { EmptyPage } from '../components/EmptyPage';
import { CartContext } from '../contexts/CartContext';
import { ItemCart } from '../components/ItemCart';

export const Checkout = () => {
  const carrito = useContext(CartContext);
  const cartList = carrito.cart

  const precios = cartList.map((x) => x.price);
  const calcularTotal = () => {
    return precios.reduce((total, item) => total + item, 0).toFixed(2);
  }

  const [payment, setPayment] = useState('');

  const handlePayChange = (e) => {
    setPayment(e.target.value);
  };

  return (
    <section className='checkout'>
      <EmptyPage></EmptyPage>
      {cartList.length > 0 ?
        <>
        <h2 className='checkout_title'>Finalizá tu compra</h2>
          <div className='checkout_cont'>
            <div className='checkout_cont_info'>
              <div className='checkout_cont_info_list'>
                {cartList.map((x) => (
                  <ItemCart key={x.id} game={x} />
                ))}
              </div>
              <h3 className='checkout_cont_info_total'>Total<span>${calcularTotal()}</span></h3>
              <form action="" className='checkout_cont_info_data'>
                <h3>DATOS PERSONALES</h3>
                <label htmlFor='input-name' className='checkout_cont_info_data_'>NOMBRE
                  <input type="text" id='input-name' />
                </label>
                <label htmlFor='input-lastname' className='checkout_cont_info_data_'>APELLIDO
                  <input type="text" id='input-lastname' />
                </label>
                <label htmlFor='input-dni' className='checkout_cont_info_data_'>DNI
                  <input type="number" id='input-dni' />
                </label>
                <label htmlFor='input-cell' className='checkout_cont_info_data_'>TELEFONO
                  <input type="number" id='input-cell' />
                </label>
                <h3>DATOS DE DOMICILIO</h3>
                <label htmlFor='input-st' className='checkout_cont_info_data_'>CALLE
                  <input type="text" id='input-st' />
                </label>
                <label htmlFor='input-st-number' className='checkout_cont_info_data_'>NUMERO
                  <input type="number" id='input-st-number' />
                </label>
                <label htmlFor='input-country' className='checkout_cont_info_data_'>PAIS
                  <input type="text" id='input-country' />
                </label>
                <label htmlFor='input-city' className='checkout_cont_info_data_'>CIUDAD
                  <input type="text" id='input-city' />
                </label>
              </form>
              <form htmlFor="payment" className='checkout_cont_info_payment'>
                <label htmlFor='credit' className='checkout_cont_info_payment_item'>
                  Tarjeta de credito/debito
                  <input
                    className='checkout_cont_info_payment'
                    type="radio"
                    name="payment-method"
                    id="credit"
                    value="credit"
                    defaultChecked
                    onChange={handlePayChange} />
                </label>
                <label htmlFor='transfer' className='checkout_cont_info_payment_item'>
                  Transferencia bancaria
                  <input
                    className='checkout_cont_info_payment'
                    type="radio"
                    name="payment-method"
                    id="transfer"
                    value="transfer"
                    onChange={handlePayChange} />
                </label>
              </form>
              {payment == 'transfer' ?
                <div className='checkout_cont_info_transfer'>
                  <h3>1. Realizá la transferencia a la siguiente cuenta</h3>
                  <div className='checkout_cont_info_transfer_data'>
                    <ul>
                      <li>Alias <span>aceplaygames</span></li>
                      <li>Banco<span>Pacific Standard</span></li>
                      <li>CBU<span>1122333445566778899101</span></li>
                      <li>Cuenta corriente<span>1111-2 345-6</span></li>
                      <li>CUIT<span>11-23456789-0</span></li>
                      <li>Razon Social<span>ACEPLAY SRL</span></li>
                    </ul>
                    <img src="../../images/qr.png" alt="" className='imagen' />
                  </div>
                  <h3>2. Adjunta el comprobante aquí</h3>
                  <label htmlFor='archivo'>
                    <input type="file" name="" id="archivo" />
                  </label>
                </div>
                :
                <div>
                  <form className='checkout_cont_info_credit'>
                    <label htmlFor="num">Número de tarjeta
                      <input type="number" id='num' placeholder='XXXX-XXXX-XXXX-XXXX' />
                    </label>
                    <label htmlFor="exp">Fecha de Exp.
                      <input type="number" id='exp' placeholder='XX/XX' />
                    </label>
                    <label htmlFor="cvv">Código de Seguridad
                      <input type="number" id='cvv' placeholder='XXX' />
                    </label>
                  </form>
                </div>
              }
            </div>
            <div className='checkout_cont_cta'>
              <h2>logo de acePlay</h2>
              <button>Finalizar compra</button>
            </div>
          </div>
        </>
        :
        <h2>Esto esta vacio</h2>
      }
    </section>
  )
  // const Carrito = useContext(CartData)
  // const [submit, setSubmit] = useState(false)
  // const [ compraFinalizada, setCompraFinalizada ] = useState(false);
  // const claseCheckout = compraFinalizada ? 'checkout-hide' : 'checkout'
  // const [datos, setDatos] = useState({
  //   nombre: "",
  //   apellido: "",
  //   mail: "",
  //   mailConfirmado: "",
  //   telefono: 0
  // })

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   if (datos.mail === datos.mailConfirmado) {
  //     setSubmit(true)
  //   }
  //   else {
  //     const Toast = Swal.mixin({ 
  //       toast: true,
  //       position: 'bottom-end',
  //       showConfirmButton: false,
  //       timer: 2000,
  //       timerProgressBar: true,
  //       background: 'rgb(54, 54, 54)',
  //       color:'#fff',
  //       width: '20em',
  //       didOpen: (toast) => {
  //         toast.addEventListener('mouseenter', Swal.stopTimer)
  //         toast.addEventListener('mouseleave', Swal.resumeTimer)
  //       }
  //     })
  //     Toast.fire({
  //       icon: 'warning',
  //       iconColor:'rgb(255, 0, 255, 0.8)',
  //       title: 'Los emails no son iguales!'
  //     })
  //   }
  // }
  // const redireccionar = useNavigate();

  // const productosTotal = Carrito.productosCarrito.map((x) => x.precio * x.cantidad)
  // const precioFinal = productosTotal.reduce((a,b) => a + b , 0)

  // async function agregarDocumento() {
  //   setTimeout(() => {
  //         Swal.fire({
  //           title: 'Compra realizada con exito!',
  //           text: `Tu número de orden es: ${Math.floor(Math.random() * 10000)}`,
  //           icon: 'success',
  //           iconColor:'rgba(255, 0, 255, 0.70)',
  //           confirmButtonText: 'Cerrar'
  //         }).then((confirmButon) => {
  //           if (confirmButon.isConfirmed) {
  //             redireccionar('/')
  //           }
  //         })
  //       }, 500);
  // }
  // const productosUsuario = Carrito.productosCarrito.map((x) => ({
  //   nombre: x.nombre, 
  //   id: x.id,
  //   precio: x.precio,
  //   cantidad: x.cantidad
  // }))

  // const datosFinales = {
  //   nombreUsuario: datos.nombre + " " + datos.apellido,
  //   mail: datos.mail,
  //   telefono: parseInt(datos.telefono),
  //   productosUsuario: productosUsuario,
  //   total: precioFinal
  // }

  // function terminarCompra() {
  //   Swal.fire({
  //     position: 'center',
  //     showConfirmButton: false,
  //     title: 'Estamos procesando tu compra...',
  //     allowOutsideClick: false,
  //     allowEnterKey: false,
  //     timerProgressBar: true,
  //   })
  //   agregarDocumento()
  //   Carrito.setProductosCarrito([])
  //   Carrito.setContCart(0)
  //   setCompraFinalizada(true)
  // }
  // return (
  //   <section className={claseCheckout}>
  //     {
  //       submit ? (
  //         <div className='checkout-resumen'>
  //           <h2>Resumen de compra</h2>
  //           <ul className='checkout-resumen-lista'>
  //             <li>
  //               <h3>Juego</h3>
  //               <h3>Cantidad</h3>
  //               <h3>Subtotal</h3>
  //             </li>
  //             {Carrito.productosCarrito.map((x) =>
  //               <li key={x.id}>
  //                 <p>{x.nombre}</p>
  //                 <p>{x.cantidad} unid.</p>
  //                 <p>${x.cantidad * x.precio}</p>
  //               </li>)}
  //           </ul>
  //           <div className='checkout-resumen-total'>
  //             <p>Total:</p>
  //             <h2>${precioFinal}</h2>
  //             <button onClick={()=>terminarCompra()}>Finalizar compra</button>
  //           </div>
  //         </div>
  //       ) : (
  //         <form onSubmit={handleSubmit}>
  //           <h2>Ingresá tus datos</h2>
  //           <label>Nombre:<input type="text" placeholder='Ingresá tu nombre...' 
  //           onChange={(e) => setDatos({ ...datos, nombre: e.target.value })} required /></label>

  //           <label>Apellido:<input type="text" placeholder='Ingresá tu apellido...' 
  //           onChange={(e) => setDatos({ ...datos, apellido: e.target.value })} required /></label>

  //           <label>Email:<input type="email" placeholder='Ingresá tu email...' 
  //           onChange={(e) => setDatos({ ...datos, mail: e.target.value })} required /></label>

  //           <label name='emailConfirm'>Confirmar Email:<input name='emailConfirm' type="email" placeholder='Confirmá tu email...' 
  //           onChange={(e) => setDatos({ ...datos, mailConfirmado: e.target.value })} required /></label>

  //           <label>Telefono:<input name='number' type="number" placeholder='Ingresá tu numero de telefono...' 
  //           onChange={(e) => setDatos({ ...datos, telefono: e.target.value })} required /></label>

  //           <button type='submit'>Continuar</button>
  //         </form>
  //       )
  //     }
  //   </section>
  // )
}