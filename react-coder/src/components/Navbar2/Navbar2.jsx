import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import "./Navbar2.css"


const Navbar2 = () => {

      const enlaces = ["Buzos y camperas","Pantalones", "Remeras","Calzado","Contacto",]

    return (
        <nav>
            < Link className="enlace" to= {"/React-Coder/"}>
             <p> LOGO </p>
            </Link>
            <ul className= "enlacesContainer">
                {enlaces.map((e,id) =>
                <li className="liContainer"key={id}>
                    <NavLink activeclassname="active" to={`/React-Coder/${e}`}> 
                    {e} 
                    </NavLink>

                </li>
                
                )}
            </ul>
            <CartWidget/>
        </nav>
    );
};

export default Navbar2;