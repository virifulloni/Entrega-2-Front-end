import React from 'react';
import BotonCarrito from './BotonCarrito';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Nav(){
    return(
        <nav id="nav-pc">
            <ul>
                <li><Link to="/"><div id="buscar-icono">
                    </div>
                    </Link>
                </li>
                <li><Link to="/">INICIO</Link></li>
                <li><Link to="/shop">SHOP</Link></li>
                <li className="logo"><img src="/img/logo.png" alt="logotipo"/></li>
                <li><Link to="/">INFO</Link></li>
                <li><Link to="/">CONTACTO</Link></li>
                <li><Link to="/">
                    <BotonCarrito />
                    </Link>
                </li>
            </ul>
            
        </nav>
    )
}

export default Nav;