import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import CarritoContext from './CarritoContext';

function BotonCarrito(){
    function mostrarOcultar(e) {
        e.preventDefault();
        var carro = document.getElementById('carrito');

        if(carro.style.visibility == "hidden" || carro.style.visibility == ''){
            carro.style.visibility = "visible";
        }else{
            carro.style.visibility = "hidden";
        }
        
    }
const { productosCarritos, actualizarCarrito } = React.useContext(CarritoContext);

 var total = 0;
    productosCarritos.map(producto => {
        var subTotal = parseInt(producto.cantidad);
        total = total + subTotal;
    })




    return(
        <React.Fragment>

            <div onClick={mostrarOcultar} id="carrito-icono">
                <div id="numero-carrito"><span class="count">{total}</span></div>
            </div>
            
    
            <div id="carrito">

                {productosCarritos.map(producto => 
                    <div className="info-carrito">

                    <div className="img-producto-carrito" id="borrar"><img src={`/${producto.data.img}`}/></div>
                        <div className="contenedor-nombre-carrito">
                            <h3>{producto.data.nombre}</h3>
                            <p>${producto.data.precio}</p>
                        </div>
                        <div className="precio-total-carrito">${parseInt(producto.data.precio) * parseInt(producto.cantidad)}</div>
                        
                    </div>
                )}

                    <Link className="ver-carrito" id="margen" to="/carrito">VER CARRITO</Link>
                
            </div>
        

        </React.Fragment>
    )
}

export default BotonCarrito;
