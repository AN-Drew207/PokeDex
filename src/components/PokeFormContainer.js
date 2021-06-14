import React from 'react'
import PokeFormComponent from './PokeFormComponent'
import PokeImg from './PokeImg'
import WhoIsThat from '../img/who_pokemon.jpg'


class PokeForm extends React.Component{
    state={
        name:"",
        image:WhoIsThat,
        display: "none",
        mainAbility: ""
    }

    handleChange=(event)=>{
        this.setState({name:event.target.value})        
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        const nameprocesed= this.state.name.toLowerCase();
        fetch(`https://pokeapi.co/api/v2/pokemon/${nameprocesed}`)
        .then(response => response.json())
        .then(response =>{
            let {name, sprites, abilities}= response
            name= name[0].toUpperCase()+name.slice(1)
            let mainAbility=abilities[0].ability.name
            mainAbility=mainAbility[0].toUpperCase()+mainAbility.slice(1)
            const {front_default:image} = sprites
            this.setState({name:name, image:image, display:"block", mainAbility:mainAbility})
        })
        .catch(error=>{
            this.setState({name:"Introduzca un nombre válido de pokemon"})
        })
    }
    
    render(){
        return(
            <div>
                <PokeImg
                    name={this.state.name}
                    image={this.state.image}
                    mainAbility={this.state.mainAbility}
                    display={this.state.display}
                />
                <PokeFormComponent
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                />
            </div>
        )
    }


}

export default PokeForm