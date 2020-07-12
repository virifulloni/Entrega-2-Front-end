import React from 'react';

function FotoPrincipal(props){
    return(
        
        <div className="foto-principal"><img src={`/${props.img}`}></img></div>                    
        
    )
}

export default FotoPrincipal;