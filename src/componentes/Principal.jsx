import React from 'react';
import TarjetaDestacados from './TarjetaDestacados';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Principal(props){


    return(
        
            <main>

                <div className="portada"></div>

                <section className="contenido-1">

                    <img className="foto-nosotras" src="/img/nosotras.png" alt="nosotras"/>

                    <div className="fondo-verde">
                        <div id="info">
                        
                            <h2>SOBRE NOSOTRAS</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
                            <Link to="/">LEER MÁS</Link>
                        </div>

                        <div id="contenido-1-fondo"></div>
                        
                    </div>
                </section>

                <section className="contenido-2">
                        
                    <h3>- DESTACADOS -</h3>
                    
                        <div id="contenedor-tarjetas">

                            {props.productosDestacados.map((producto) =>
                            <TarjetaDestacados id={producto.id} key={producto.id} img = {producto.img} nombre = {producto.nombre}  />  
                )} 
                        
                        
                        </div>
                        
                </section>


                <section className="contenido-3">
                    <h3><Link to="https://www.instagram.com/morainebikinis/" target="_blank">@morainebikinis</Link></h3>
                    <div className="contenedor-img-instagram">
                    <ul>
                            <li className="img-instagram"><img src="/img/1.png"/></li>
                            <li className="img-instagram"><img src="/img/2.png"/></li>
                            <li className="img-instagram"><img src="/img/3.png"/></li>
                            <li className="img-instagram"><img src="/img/4.png"/></li>
                            <li className="img-instagram"><img src="/img/5.png"/></li>
                            <li className="img-instagram"><img src="/img/6.png"/></li>
                            <li className="img-instagram" id="ocultar"><img src="/img/7.png"/></li>
                        </ul> 
                    </div>

                </section>

            </main>
    
        
    )
}

export default Principal;