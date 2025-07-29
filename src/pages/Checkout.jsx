import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { TicketsContext } from '../contexts/TicketsContext';
import { ItemCart } from '../components/ItemCart';

export const Checkout = () => {
  const pedidos = useContext(TicketsContext);

  const carrito = useContext(CartContext);
  const cartList = carrito.cart

  const precios = cartList.map((x) => x.price);
  const calcularTotal = () => {
    return precios.reduce((total, item) => total + item, 0).toFixed(2);
  }

  const [payment, setPayment] = useState('credit');
  const [fileName, setFileName] = useState('');
  const [termsAgree, setTemsAgree] = useState(false);
  const [checkoutReady, setCheckoutReady] = useState(false);
  const [temporaryTicket, setTemporaryTicket] = useState(0)

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name)
    };
  }

  const [datos, setDatos] = useState({
    name: '',
    lastName: '',
    mail: '',
    cell: 0,
    address: { st: '', stNum: 0 },
    region: { city: '', country: '' },
    payMethod: payment,
    termsAgree: false
  })

  const handlePayChange = (e) => {
    setPayment(e.target.value);
    setDatos({ ...datos, payMethod: e.target.value })
  }

  const handleterms = (e) => {
    setDatos({ ...datos, termsAgree: e.target.checked });
  }

  const handleCheckout = () => {
    const validCustomer =
      datos.name.trim() !== '' &&
      datos.lastName.trim() !== '' &&
      datos.mail.trim() !== '' &&
      datos.cell > 0 &&
      datos.address.st.trim() !== '' &&
      datos.address.stNum > 0 &&
      datos.region.city.trim() !== '' &&
      datos.region.country.trim() !== '' &&
      datos.payMethod.trim() !== '' &&
      datos.termsAgree === true;

    if (!validCustomer) {
      alert('Por favor completá todos los campos obligatorios.');
      return;
    }
    window.scrollTo(0, 0);
    const ticketNum = 10000 + Math.floor(Math.random() * 10000);
    const fecha = new Date();
    const fechaFormateada = fecha.toLocaleDateString('es-AR');

    const newCustomer = { ...datos };
    const newOrder = {
      ticket: ticketNum,
      games: [...cartList],
      total: calcularTotal(),
      date: fechaFormateada
    };

    pedidos.addOrder(newCustomer, newOrder);


    setTemporaryTicket(ticketNum)

    setCheckoutReady(true);
    carrito.setCounterCart(0);
    carrito.setCart([]);

  }

  return (
    <section className='checkout'>
      {checkoutReady ?
        <div className='checkout_finished'>
          <div className='checkout_finished_cont'>
            <i className="bi bi-check-circle-fill"></i>
            <h2>Muchas gracias! Tu pedido fue realizado con éxito!</h2>
            <h3>PEDIDO #{temporaryTicket} </h3>
            <ul>
              {cartList.map((x) => <li>{x.name} <span>{x.price}</span></li>)}
            </ul>
          </div>
          <NavLink className='checkout_finished_link' to={'/'}><span>Seguir Comprando</span></NavLink>
        </div>
        :
        <>
          <h2 className='checkout_title'>Finalizá tu compra</h2>
          <div className='checkout_cont'>
            <div className='checkout_cont_info'>
              <div className='checkout_cont_info_list'>
                {cartList.map((x) => (
                  <ItemCart key={x.id} game={x} />
                ))}
              </div>
              <h3 className='checkout_cont_info_total'>Subtotal<span>${calcularTotal()}</span></h3>
              <form action="" className='checkout_cont_info_data'>
                <h3>Datos Personales</h3>
                <label htmlFor='input-name' className='checkout_cont_info_data--personal'><span>Nombre</span>
                  <input type="text" id='input-name' placeholder='John' required onChange={(e) => setDatos({ ...datos, name: e.target.value })} />
                </label>
                <label htmlFor='input-lastname' className='checkout_cont_info_data--personal'><span>Apellido</span>
                  <input type="text" id='input-lastname' placeholder='Doe' required onChange={(e) => setDatos({ ...datos, lastName: e.target.value })} />
                </label>
                <label htmlFor='input-mail' className='checkout_cont_info_data--personal'><span>Correo electrónico</span>
                  <input type="email" id='input-mail' placeholder='johndoe@mail.com' required onChange={(e) => setDatos({ ...datos, mail: e.target.value })} />
                </label>
                <label htmlFor='input-cell' className='checkout_cont_info_data--personal'><span>Teléfono</span>
                  <input type="number" id='input-cell' placeholder='11 2233 4455' required onChange={(e) => setDatos({ ...datos, cell: e.target.value })} />
                </label>
                <label htmlFor='input-st' className='checkout_cont_info_data--address st'><span>Calle</span>
                  <input type="text" id='input-st' placeholder='Av. 9 de Julio' required onChange={(e) => setDatos({ ...datos, address: { ...datos.address, st: e.target.value } })} />
                </label>
                <label htmlFor='input-st-number' className='checkout_cont_info_data--address number'><span>Número</span>
                  <input type="number" id='input-st-number' placeholder='1810' required onChange={(e) => setDatos({ ...datos, address: { ...datos.address, stNum: e.target.value } })} />
                </label>
                <label htmlFor='input-country' className='checkout_cont_info_data--address country'><span>País</span>
                  <input type="text" id='input-country' placeholder='Argentina' required onChange={(e) => setDatos({ ...datos, region: { ...datos.region, country: e.target.value } })} />
                </label>
                <label htmlFor='input-city' className='checkout_cont_info_data--address city'><span>Ciudad</span>
                  <input type="text" id='input-city' placeholder='C.A.B.A' required onChange={(e) => setDatos({ ...datos, region: { ...datos.region, city: e.target.value } })} />
                </label>
              </form>
              <form htmlFor="payment" className='checkout_cont_info_payment'>
                <h3>Métodos de Pago (podés realizar el pedido y abonar más tarde)</h3>
                <label htmlFor='credit' className={payment === 'credit' ? 'checkout_cont_info_payment_item--checked' : 'checkout_cont_info_payment_item'}>
                  <input
                    type="radio"
                    name="payment-method"
                    id="credit"
                    value="credit"
                    defaultChecked
                    onChange={handlePayChange} />
                  <i className="bi bi-credit-card"></i>
                  <div className='checkout_cont_info_payment_item_text'>
                    <h4>Tarjeta de credito/debito</h4>
                    <p>Pagá de forma rápida y segura con tu tarjeta. El pedido se confirma al instante.</p>
                  </div>
                </label>
                <label htmlFor='transfer' className={payment === 'transfer' ? 'checkout_cont_info_payment_item--checked' : 'checkout_cont_info_payment_item'}>
                  <input
                    type="radio"
                    name="payment-method"
                    id="transfer"
                    value="transfer"
                    onChange={handlePayChange} />
                  <i className="bi bi-bank"></i>
                  <div className='checkout_cont_info_payment_item_text'>
                    <h4>Trasnferencia Bancaria</h4>
                    <p>Una vez realizada la transferencia, envíanos el comprobante para procesar tu pedido.</p>
                  </div>
                </label>
              </form>
              {payment == 'credit' ?
                <div className='checkout_cont_info_credit' title='Por favor, no ingresar ningún dato real en los campos.'>
                  <h3>1. Ingresá los datos de tu tarjeta</h3>
                  <form className='checkout_cont_info_credit_data'>
                    <label htmlFor="num" className='checkout_cont_info_credit_data_item_num'><span>Número de tarjeta</span>
                      <input type="number" id='num' placeholder='XXXX-XXXX-XXXX-XXXX' />
                    </label>
                    <label htmlFor="exp" className='checkout_cont_info_credit_data_item'><span>Fecha de Exp.</span>
                      <input type="number" id='exp' placeholder='XX/XX' />
                    </label>
                    <label htmlFor="cvv" className='checkout_cont_info_credit_data_item'><span>Código de Seguridad</span>
                      <input type="number" id='cvv' placeholder='XXX' />
                    </label>
                  </form>
                </div>
                :
                <div className='checkout_cont_info_transfer' title='Estos son datos ficticios, porfavor no realizar ninguna transferencia a los mismos.'>
                  <h3>1. Realizá la transferencia a la siguiente cuenta</h3>
                  <div className='checkout_cont_info_transfer_data'>
                    <ul>
                      <li>Alias <span>aceplaygames</span></li>
                      <li>Banco<span>Pacific Standard</span></li>
                      <li>CBU<span>1122333445566778899101</span></li>
                      <li>Cuenta corriente<span>1111-2 345-6</span></li>
                      <li>CUIT<span>11-23456789-0</span></li>
                      <li>Razón Social<span>ACEPLAY SRL</span></li>
                    </ul>
                    <img src="../../images/qr.png" alt="" loading='lazy' />
                  </div>
                  <h3>2. Adjunta el comprobante aquí(.PNG, .JPG, .PDF)</h3>
                  <label htmlFor="archivo" className="checkout_cont_info_transfer_data_file">
                    <input
                      type="file"
                      id="archivo"
                      onChange={handleFileChange}
                      hidden
                    />
                    <span className={fileName !== '' ? 'file_uploaded' : "file-btn"}>
                      {fileName ? `Archivo: ${fileName}` : 'Subir comprobante'}
                    </span>
                  </label>
                </div>
              }
              <label htmlFor="terminos" className='checkout_cont_info_terminos'>
                <input type="checkbox" id='terminos' required onChange={handleterms} />
                Acepto los Términos y Condiciones y la Política de Privacidad.
              </label>
            </div>
            <div className='checkout_cont_cta'>
              <h2 className='degrade' data-text="acePlay">acePlay</h2>
              <p>¡Compartimos tu pasión por los videojuegos!</p>
              <h3 className='checkout_cont_cta_total'>Total<span>${calcularTotal()}</span></h3>
              <button onClick={handleCheckout}>Realizar pedido</button>
            </div>
          </div>
        </>
      }
    </section>
  )
}