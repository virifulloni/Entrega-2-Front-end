  import React from 'react';
  
  
  const CarritoContext = React.createContext({
  productosCarritos: [],
  actualizarCarrito: () => {}
});

export default CarritoContext;