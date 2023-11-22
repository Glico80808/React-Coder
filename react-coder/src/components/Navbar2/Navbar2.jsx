import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import "./Navbar2.css"


const Navbar2 = () => {

      const enlaces = ["buzos y camperas","pantalones", "remeras","calzado","Contacto","Ubicacion"]

    return (
        <nav>
            < Link to= {"/React-Coder/"}>
             <p> LOGO </p>
            </Link>
            <ul>
                {enlaces.map((e,id) =>
                <li key={id}>
                    <Link to={`/React-Coder/${e}`}> 
                    {e} 
                    </Link>

                </li>
                
                )}
            </ul>
            <CartWidget/>
        </nav>
    );
};

export default Navbar2;