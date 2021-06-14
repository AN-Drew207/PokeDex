import React from 'react'  
import 'bootstrap/dist/css/bootstrap.css'
import './style/App.scss' 


function PokeImg(props){
    const style = {
        display:props.display
    }
    return(
        <div className="poke-container">
            <h2 className="title">{props.name}</h2>
            <img className="img-responsive poke-img" src={props.image} alt="Poke" />
            <div className="row">
                <p className="title" style={style}>Main Attack: {props.mainAbility}</p>
            </div>
        </div>
    )
}

export default PokeImg