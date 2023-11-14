import React from 'react';

const ItemDetail = ({producto}) => {
    return (
        <div>
             <img src = {producto.img} alt = ""/>
            <h1>{producto.nombre}</h1>
            <p>Precio: {producto.precio}</p>
            <p>Categoría: {producto.categoria}</p>
            <p>Descripción: {producto.descripcion}</p>
            <h2>Stock: {producto.stock}</h2>

        </div>
    );
};

export default ItemDetail;