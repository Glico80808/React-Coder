import React, { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import { CartContext } from '../../Context/CartContext';

const ItemDetail = ({ producto }) => {
    const [quantity, setQuantity] = useState(0);
    const { addToCart } = useContext(CartContext);

    const onAdd = (quantity) => {
        setQuantity(quantity);
        addToCart(producto, quantity);
    };

    return (
        <div>
            <img src={producto.img} alt="" />
            <h1>{producto.nombre}</h1>
            <p>Precio: {producto.precio}</p>
            <p>Categoría: {producto.categoria}</p>
            <p>Descripción: {producto.descripcion}</p>
            {producto.stock > 0 ? (
                <>
                    {quantity === 0 ? (
                        <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
                    ) : (
                        <Link to={'/React-Coder/Cart'} className="linkToCart">
                            Ir al Carrito
                        </Link>
                    )}
                </>
            ) : (
                <p style={{ color: 'red' }}>*Producto sin stock disponible*</p>
            )}
        </div>
    );
};

export default ItemDetail;