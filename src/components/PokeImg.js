import React from 'react'  
import './style/App.scss' 


function PokeImg(props){
    return(
        <div className="poke-container">
            <img className="img-responsive poke-img" src={props.image} alt="Poke" />
        </div>
    )
}

export default PokeImg