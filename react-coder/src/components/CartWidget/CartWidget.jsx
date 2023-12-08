import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { BiCart } from "react-icons/bi";
import  {Link} from "react-router-dom"

const CartWidget = () => {

    const{cantidadTotal} = useContext(CartContext)
    return (
        <div>
            <Link to="/React-Coder/Cart">
            <BiCart/>
            </Link>
            <p>{cantidadTotal}</p>
        </div>
    );
};

export default CartWidget;