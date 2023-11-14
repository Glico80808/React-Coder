import React from "react"
import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"
const Navbar= ({links}) => {

console.log (links)
    return (
        <> 
        <nav>
            <h1 className = "titulo">Hola, bienvenido a Gecko 69</h1>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Categorías</a></li>
                <li><a href="#">Acerca de</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>

           <CartWidget/>
        </nav>
        </> 
    )
}

export default Navbar
