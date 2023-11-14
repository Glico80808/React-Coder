import React from 'react';
import { Link } from 'react-router-dom';


const Navbar2 = () => {

      const enlaces = [ "buzos y camperas","pantalones", "remeras","calzado","Contacto","Ubicacion"]

    return (
        <div>
            < Link to= {"/React-Coder/"}>
             <p> LOGO </p>
            </Link>
            <ul>
                {enlaces.map((element,id) =>
                <li key={id}>
                    <Link to= {`/React-Coder/${element}`}> 
                    {element} 
                    </Link>

                </li>
                
                )}
            </ul>
        </div>
    );
};

export default Navbar2;