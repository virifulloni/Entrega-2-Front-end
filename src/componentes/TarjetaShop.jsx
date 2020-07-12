import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
  } from "react-router-dom";

function TarjetaShop(props){
    return(
        <div className="tarjeta-shop">
            <div className="img-tarjeta-shop"><img src={`${props.img}`}/></div>
            <div className="body-tarjeta-shop">
                <h5>{props.nombre}</h5>
                <p>{props.descripcion}</p>
                <Link to={"/producto/" + props.id}>SHOP NOW</Link>
            </div>
        </div>
        
    )
}

export default TarjetaShop;