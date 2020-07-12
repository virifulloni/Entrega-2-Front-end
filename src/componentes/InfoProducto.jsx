import React from 'react';
import CarritoContext from './CarritoContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function InfoProducto(props){

    var guardarTalle = '';

    function anadirAlCarrito() {
        
        if(guardarTalle == ''){
            toast('Debes seleccionar un talle');    
        }
        else{
            actualizarCarrito([...productosCarritos, {
                data: props.data,
                talle: guardarTalle,
                cantidad: cantidad
            }]);
            toast('Añadido a carrito');
        }
        
    
    }

    const { productosCarritos, actualizarCarrito } = React.useContext(CarritoContext);

    {/*Funciones Boton Añadir*/}
    
    const [cantidad, cambiarCantidad] = React.useState(1)

    function handleChange(e){
        cambiarCantidad(e);
    }

    {/*Funciones Talles*/}
    
    function seleccionarTalle(talle){
        guardarTalle = talle;
        console.log(guardarTalle);
    }

    
    return(

        <div className="info-producto">
                    <ToastContainer />
                    <div className="contenedor-nombre">
                        <h3>{props.data.nombre}</h3>
                        <p>{props.data.precio}</p>
                    </div>

                    <div className="contenedor-talles">
                        <p>TALLE</p>
                        <div className="contenedor-talles-botones">
                            {props.data.talles.map(task => <button onClick = {() => seleccionarTalle(task)} className="boton-talle">{task}</button>)}
                        </div>
                    </div>


                    <div className="contenedor-cantidad-anadir">

                        <input className="numero" value={cantidad} onChange= {e => handleChange(e.target.value)} min="1" max="10" type="number"></input>
                        <button onClick = {anadirAlCarrito} to="/carrito/:id/:talle/:cantidad" className="anadir-boton"><i className="fa fa-cart-plus"></i>AÑADIR</button>
                        
                    </div>


                    <div className="descripcion">

                        <h4>
                            DESCRIPCIÓN
                        </h4>
                        <p>
                            {props.data.descripcion}
                        </p>

                    </div>

        </div>
        
    )
}

export default InfoProducto;