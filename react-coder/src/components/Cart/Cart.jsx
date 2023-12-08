import React, {useContext} from 'react';
import { CartContext } from '../../Context/CartContext';
import Item from '../Item/Item';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import './Cart.css';


const Cart = () => {
    const {cart,total,clearCart,removeItem} = useContext(CartContext)
    
    return (
        <div>
            <h1>Tu Carrito</h1>
            {
                cart.length == 0  ?
                <div>
                    <h2>No hay productos en el carrito</h2>
                    <Link to = {"/React-Coder/"}>Ir al inicio</Link>
                </div>
                :
                <div>
                  {
                    cart.map((p)=> (
                        <CartItem key= {p.producto.id} cartItem = {p} removeItem = {removeItem}/>
                    ))
                  }
                  <button onClick={clearCart}>Vaciar carrito</button>
                  <h2>Monto total de la compra: ${total}</h2>
                  <Link to ={"/React-Coder/Checkout"} className= "buttonLink"style={{ color: 'white' }}>IR AL CHECKOUT</Link>
                </div>
            }
            
        </div>
    );
};

export default Cart;