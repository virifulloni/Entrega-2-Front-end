import React from 'react';
import FotosSecundarias from './FotosSecundarias';
import FotoPrincipal from './FotoPrincipal';
import TarjetaDestacados from './TarjetaDestacados';
import InfoProducto from './InfoProducto';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function Producto(props){

    let { id } = useParams();

var loaded = true;
var productoSeleccionado = props.productos.filter(producto => producto.id == id )[0];

if(productoSeleccionado == undefined){
    loaded = false
    fetch('http://localhost:4000/productos')
    .then(function(respuesta) {
        return respuesta.json();
    })
    .then(function (respuestaJSON) {
        console.log("obtuve datos");
        console.log(respuestaJSON);
        productoSeleccionado = respuestaJSON.filter(producto => producto.id == id )[0];
        loaded = true;
    })
}
console.log(productoSeleccionado);
console.log(id);

    return(
        <main id="producto">
            {loaded ? 
                <div className="contenedor-info-producto">

                    <div className="galeria-producto">

                        <FotoPrincipal img = {productoSeleccionado.img}/>
                        {productoSeleccionado.imgSecundarias.map((imagen) =>
                        <FotosSecundarias img = {imagen}/>   
                        )} 

                    </div>

                    <InfoProducto data = {productoSeleccionado}/>

                </div>
            : 
            <div className="cargando"><p>Cargando...</p></div>}

            {loaded ? 
                <div className="tepuede-interesar">

                    <h4>TE PUEDE INTERESAR</h4>

                    <div className="tepuede-interesar-tarjetas">
                        {props.productosDestacados.map((producto) =>
                        <TarjetaDestacados key={producto.id} img = {producto.img} nombre = {producto.nombre}  />  
                    )} 
                    </div>

                </div>

            : 
            null}
        </main>
        
    )
}

export default Producto;