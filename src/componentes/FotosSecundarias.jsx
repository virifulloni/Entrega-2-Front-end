import React from 'react';

function FotosSecundarias(props){

    console.log(props.img);

    return(
        
        <div className="fotos-secundarias"><img src={`/${props.img}`}></img></div>                    
        
    )
}

export default FotosSecundarias;