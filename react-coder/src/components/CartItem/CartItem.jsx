import React from 'react';

const CartItem = ({cartItem,removeItem}) => {
    return (
        <div key={cartItem.producto.id}>
            <img src={cartItem.producto.img} alt={cartItem.producto.nombre}/>
            <h1>{cartItem.producto.nombre}</h1>
            <p>Precio unitario: {cartItem.producto.precio}</p>
            <p>Cantidad: {cartItem.cantidad}</p>
            <p>Total : {cartItem.cantidad*cartItem.producto.precio}</p>
            <button onClick={()=>{removeItem(cartItem.producto.id)}}>Eliminar producto</button>
             
        </div>
    );
};

/*{
    cart.length > 0 ?(
    cart.map((item)=>{
        return <li>
            <Item product={item.producto}/>
            <p>Cantidad:{item.cantidad}</p>
            <button onClick={()=>removeItem(item.producto.id)}>Elminar producto</button>
        </li>
    })
    ) :(
        <h3>No hay productos agregados...</h3>
    )
    }*/
export default CartItem;