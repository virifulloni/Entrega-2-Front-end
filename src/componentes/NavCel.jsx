import React from 'react';
import BotonCarrito from './BotonCarrito';
import { slide as Menu } from 'react-burger-menu'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function NavCel(){
   
    return(
        
            <div className="nav-cel">

                <Menu>
                    <Link id="home" className="menu-item" to="/">INICIO</Link>
                    <Link id="about" className="menu-item" to="/shop">SHOP</Link>
                    <Link id="contact" className="menu-item" to="/info">INFO</Link>  
                </Menu>
                <div className="logo2"><img src="/img/logo.png"/></div>
                <Link to="/">
                    <BotonCarrito/>
                </Link>
                
            </div>
            
    )
}

export default NavCel;