import React from 'react'
import PokeFormComponent from './PokeFormComponent'
import PokeImg from './PokeImg'
import WhoIsThat from '../img/who_pokemon.jpg'


class PokeForm extends React.Component{
    state={
        name:"",
        image:WhoIsThat
    }

    handleChange=(event)=>{
        this.setState({name:event.target.value})        
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`)
        .then(response => response.json())
        .then(response =>{
            const {name, sprites}= response
            const {front_default:image} = sprites
            this.setState({name:name, image:image})
            console.log(image)
        })
        console.log(this.state)
    }
    
    render(){
        return(
            <div>
                <PokeImg
                    image={this.state.image}
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