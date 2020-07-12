import React from 'react';
import './App.css';
import Principal from './componentes/Principal';
import Shop from './componentes/Shop';
import Nav from './componentes/Nav';
import Footer from './componentes/Footer';
import NavCel from './componentes/NavCel';
import Producto from './componentes/Producto';
import Carrito from './componentes/Carrito';
import CarritoContext from './componentes/CarritoContext';
import Compra from './componentes/Compra';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  const [productosTienda, cambiarProductosTienda] = React.useState([]);

    React.useEffect(function () {
        fetch('http://localhost:4000/productos')
            .then(function(respuesta) {
                return respuesta.json();
            })
            .then(function (respuestaJSON) {
                cambiarProductosTienda(respuestaJSON);
            })
     }, []);

  const productosDestacados = productosTienda.filter(producto => producto.destacado == true ) 
  const [productosCarritos, actualizarCarrito] = React.useState([]);
  const value = { productosCarritos, actualizarCarrito };




  return (
    <Router>
    <CarritoContext.Provider value={value}>
      <div id="contenedor-grid">
        <header>
          <Nav/>
          <NavCel/>
        </header>
          <Switch>
            <Route exact path="/">
              <Principal productosDestacados = {productosDestacados}/>
            </Route>
            <Route path="/shop">
              <Shop productos = {productosTienda}/>
            </Route>
            <Route path="/producto/:id" children={<Producto productosDestacados = {productosDestacados} productos = {productosTienda}/>} >
            </Route>
            <Route path="/carrito" children={<Carrito productos = {productosTienda}/>}>
            </Route>
            <Route path="/compra">
              <Compra/>
            </Route>
          
          </Switch>

        <Footer/>
      </div>
    </CarritoContext.Provider>
    </Router>
  
  )
}

export default App;
