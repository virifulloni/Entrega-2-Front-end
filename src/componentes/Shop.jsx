import React from 'react';
import TarjetaShop from './TarjetaShop';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function Shop(props){

  
    return(
    <main id="shop">

        <div className="portada-shop"></div>
        
        <section className="contenido-1-shop">

            <div id="contenedor-menu-shop">

                <div className="menu-shop">
                    <img src="/img/menu-shop-1.png"/>
                    <Link to="/">BIKINIS</Link>
                </div>

                <div className="menu-shop">
                    <img src="/img/menu-shop-2.png"/>
                    <Link to="/">ENTERAS</Link>
                </div>

                <div className="menu-shop">
                    <img src="/img/menu-shop-3.png"/>
                    <Link to="/">SALE</Link>
                </div>

            </div>
            
        </section>

        <section className="contenido-2-shop">

            <div className="titulo-shop">
                <h4>BIKINIS</h4>
            </div>

            <div className="contenedor-tarjetas-shop">
                {props.productos.map(({key, ...props}) =>
                    <TarjetaShop {...props} key={props.id} />  
                )} 
                

            </div>
                
           
                
        </section>

        

    </main>
        
    )
}

export default Shop;