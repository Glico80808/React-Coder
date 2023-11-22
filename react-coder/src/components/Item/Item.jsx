import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import "./Item.css"
const Item = ({product}) => {

    const onAdd = (quantity) => {
        alert(quantity)
    }
    return (
        <>
        <div className = 'contenedor'>
            <Link to={`/React-Coder/item/${product.id}`}>
            <h1>{product.nombre}</h1>
            </Link>

            <img src = {product.img} alt = ""/>
            <p>{product.precio}</p>

        </div>
        <ItemCount initial ={1} stock = {product.stock} onAdd = {onAdd}/>
        </>
    );
};

export default Item;