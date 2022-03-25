import './CartWidget.css'
import cart from './cart.png'

const Cart = () =>{
    return(
        <div className='carrito'>
            <img  src={cart} alt="carrito de compras" />
            <p>3</p>
        </div>
        
    )

}


export default Cart;