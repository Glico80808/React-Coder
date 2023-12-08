// creacion del contexto
import React, { useState, createContext } from 'react';

export const CartContext = createContext();

// Context Provider
export const CartProvider = ({ children }) => {
  // el estado global que analiza el carrito de compras
  const [cart, setCart] = useState([]);
  const [total,setTotal] = useState(0)
  const [cantidadTotal,setCantidadTotal] = useState(0)

  // funcion que se encargue de agregar productos al carrito
const addToCart = (producto, cantidad) => {
    const productoExistente = cart.find((prod) => prod.producto.id === producto.id);

    if (!productoExistente) {
        // si el producto no esta en el carrito, agregalo
        setCart((prev) => [...prev, { producto, cantidad }]);
        setCantidadTotal((prev) => prev + cantidad);
        setTotal((prev) => prev + producto.precio * cantidad);
    } else {
        // si el producto esta en el carrito, chquear si agregando mas excederia el stock
        const totalQuantity = productoExistente.cantidad + cantidad;

        if (totalQuantity <= producto.stock) {
            // si al agregar mas no se excede el stock, actualizar carrito
            const carritoActualizado = cart.map((prod) =>
                prod.producto.id === producto.id ? { ...prod, cantidad: prod.cantidad + cantidad } : prod
            );

            setCart(carritoActualizado);
            setCantidadTotal((prev) => prev + cantidad);
            setTotal((prev) => prev + producto.precio * cantidad);
        } else {
            alert('No puedes agregar más productos, alcanzaste el límite de stock.');
        }
    }
};

  // funcion que determina si un producto ya está en el carrito
  const isInCart = (itemId) => {
    return cart.some((i) => i.producto.id === itemId);
  };

  // funcion encargada de remover productos del carrito
  const removeItem = (id) => {
    const productoEliminado = cart.find((prod) => prod.producto.id === id);
  
    if (productoEliminado) {
      const carritoActualizado = cart.filter((item) => item.producto.id !== id);
      setCart(carritoActualizado);
  
      // Sustraer la cantidad del producto eliminado de cantidadTotal
      setCantidadTotal((prev) => prev - productoEliminado.cantidad);
  
      // Sustraer el precio del producto eliminado de total
      setTotal((prev) => prev - productoEliminado.producto.precio * productoEliminado.cantidad);
    }
  };

  // funcion que permite limpiar el carrito
  const clearCart = () => {
    setCart([]);
    setCantidadTotal(0);
    setTotal(0);
  };

  return (
    <div>
      <CartContext.Provider
        value={{
          cart,
          setCart,
          addToCart,
          isInCart,
          total,
          cantidadTotal,
          removeItem,
          clearCart,
        }}
      >
        {children}
      </CartContext.Provider>
    </div>
  );
};

