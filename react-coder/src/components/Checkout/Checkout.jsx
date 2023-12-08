import React, {useState,useEffect,useContext} from 'react';
import {getFirestore,collection,doc, getDoc,addDoc,updateDoc} from "firebase/firestore";
import {CartContext} from '../../Context/CartContext';
const Checkout = () => {

    const [nombre,setNombre] = useState ("");
    const [apellido,setApellido] = useState ("");
    const [telefono,setTelefono] = useState ("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const {cart,total,cantidadTotal,clearCart} = useContext(CartContext)

    const manejadorFormulario = (event) => {

        event.preventDefault()

        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion){
            setError("Completar los campos")
        }
        if(email !== emailConfirmacion){
            setError("Los campos del email no coinciden")
            return;
        }
        //se crea la instancia de la db
        const db = getFirestore()
        //se crea el objeto de la orden de compra
        const orden = {
            items:cart.map((producto)=>({
                id: producto.producto.id,
                nombre: producto.producto.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        
        }

        Promise.all(
            orden.items.map(async(productoOrden)=>{
                const productoRef = doc(db,"productos",productoOrden.id)
                const productoDoc = await getDoc(productoRef)
                const stockActual = productoDoc.data().stock
                await updateDoc(productoRef,{
                    stock: stockActual - productoOrden.cantidad
                
                })
            })
        )
        .then(()=>{
            addDoc(collection(db,"ordenes"),orden)
            .then((docRef)=>{
                setOrdenId(docRef.id);
                clearCart()
            })
            .catch((error)=>{
                setError("Error al crear la orden")
            })
        })
        .catch((error)=>{
            setError("No se puede actualizar el stock, intenta mas tarde")
        })
    }
   
    return (
        <div>
            <h2>Checkout</h2>
            {
                cart.map((producto) => {
                    return(
                    <div key = {producto.producto.id}>
                        <p>Producto agregado: {producto.producto.nombre} x {producto.cantidad}</p>
                        <p>Precio unidad: {producto.producto.precio}</p>
                    </div>
                )
                })
            }

            <form onSubmit={manejadorFormulario}>

            <div>
                <label htmlFor="Nombre">Nombre: </label>
                <input type="text" onChange= {(e)=> setNombre(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="Apellido">Apellido: </label>
                <input type="text" onChange= {(e)=> setApellido(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="Teléfono">Teléfono: </label> 
                <input type="number" onChange= {(e)=> setTelefono(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="Email">Email: </label>
                <input type="email" onChange= {(e)=> setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="Confirmación de email">Confirmación de email: </label>
                <input type="email" onChange= {(e)=> setEmailConfirmacion(e.target.value)}/>
            </div>

            {error && <p style={{color: "red"}}>{error}</p>}

            <button type = "submit">Comprar</button>

            {
                ordenId && (
                    <p>
                        Gracias por tu compra! Tu numero de orden es : {ordenId}
                    </p>
                )
            }
            </form>
            
            
        </div>
       
    );
};

export default Checkout;