import React,{useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import "./Item.css"
const Item = ({product}) => {

    const [quantity,setQuantity] = useState(0)
    const onAdd = (quantity) => {
        setQuantity(quantity)
    }
    return (
        <>
        <div className = 'contenedor'>
            <Link to={`/React-Coder/item/${product.id}`}>
            <h1>{product.nombre}</h1>
            </Link>

            <img src = {product.img} alt = ""/>
            <p>Precio: {product.precio}</p>

        </div>
        
        </>
    );
};

export default Item;