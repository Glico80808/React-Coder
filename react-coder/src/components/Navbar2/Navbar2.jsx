import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';


const Navbar2 = () => {

      const enlaces = [ "buzos y camperas","pantalones", "remeras","calzado","Contacto","Ubicacion"]

    return (
        <div>
            < Link to= {"/React-Coder/"}>
             <p> LOGO </p>
            </Link>
            <ul>
                {enlaces.map((e,id) =>
                <li key={id}>
                    <Link to={`${e}`}> 
                    {e} 
                    </Link>

                </li>
                
                )}
            </ul>
            <CartWidget/>
        </div>
    );
};

export default Navbar2;