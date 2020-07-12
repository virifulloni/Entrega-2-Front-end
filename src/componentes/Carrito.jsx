import React from 'react';
import CarritoContext from './CarritoContext';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function Carrito(){

    const { productosCarritos, actualizarCarrito } = React.useContext(CarritoContext);
    var total = 0;
    productosCarritos.map(producto => {
        var subTotal = parseInt(producto.data.precio) * parseInt(producto.cantidad);
        total = total + subTotal;
    })

    console.log(productosCarritos);

    return(
        <main id="carrito-grande">

                <div className="portada-shop"></div>

                <div className="contenedor-carrito">

                    <div id="contenedor-articulo">

                         <div className="articulo">   
                            <ul>
                                <li className="borrar">ARTÍCULO</li>
                                <li>DESCRIPCIÓN</li>
                                <li className="borrar">PRECIO UNITARIO</li>
                                <li>CANTIDAD</li>
                                <li>SUBTOTAL</li>
                            </ul>
                        </div>

                    {productosCarritos.map(producto => 
                        <div className="articulo-pasar">   
                            <ul>
                                <li className="borrar"><div className="img-producto-carrito"><img src={`/${producto.data.img}`}/></div></li>
                                <li>{producto.data.nombre}</li>
                                <li className="borrar">${producto.data.precio}</li>
                                <li>{producto.cantidad}</li>
                                <li>${parseInt(producto.data.precio) * parseInt(producto.cantidad)}</li>
                            </ul>
                        </div>
                    )}

                        <div className="cupon">
                            <input className="cupon-input" type="text"></input>
                            <Link className="ver-carrito" to="/">APLICAR CUPON</Link>
                        </div>

                    </div>
                    
                    <div className="checkout">
                        <div className="tu-compra">TU COMPRA</div>
                        <div className="subtotal">Subtotal: <span>${total}</span> </div>
                        <div className="total">Total: <span>${total}</span> </div>
                        <Link className="ver-carrito" to="/compra">FINALIZAR COMPRA</Link>
                        
                    </div>
                </div>
        </main>
      
         
    )
}

export default Carrito;