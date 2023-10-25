import React from "react"
import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"
const Navbar= ({links}) => {

console.log (links)
    return (
        <> {/* este fragment <> sirve para contener todo lo que contenga el componente*/}
        <nav>
            <h1 className = "titulo">Hola, bienvenido a Gecko 69</h1>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Categorias</a></li>
                <li><a href="#">Acerca de</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>

           <CartWidget/>
        </nav>
        </> 
    )
}

export default Navbar
