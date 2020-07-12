import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function TarjetaDestacados(props){
    return(
        <div className="tarjeta-destacados">
            <div className="img-tarjeta"><img src={`/${props.img}`}/></div>
            <div className="body-tarjeta">
            <Link to={"/producto/" + props.id}>{props.nombre}</Link>
            </div>
            </div>
        
    )
}

export default TarjetaDestacados;