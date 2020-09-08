import React from 'react';
import axios from 'axios';
import './style.css'

export default props => {
    const [pokemon, setPokemon] = React.useState(localStorage.getItem('searchedPokemon'));
    const [pokemonData, setPokemonData] = React.useState([]);   
    const [pokemonType, setPokemonType] = React.useState([]);
    const [pokemonSprite, setPokemonSprite] = React.useState([]);

    const getPokemon = async () => {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const toArray = [];
        const toTypes = [];
        try{
            const res = await axios.get(url);
            toArray.push(res.data);
            toTypes.push(res.data.types[0].type.name)
            setPokemonType(toTypes);
            setPokemonData(res.data);
            setPokemonSprite(pokemonData.sprites["front_default"]);
        }catch(e){
            console.log(e);
        }
    }

    getPokemon();
    return (
        <div className='table'>
            <h1 className="poke-name"> {pokemonData.name} </h1>

            <img src={pokemonSprite} alt='auto' className="poke-sprite"/>
            <div className ='poke-informations'>
                <p>Número na National Dex: #{pokemonData.order}</p>
                <p>Tipagem: {pokemonType} </p>
                <p>Experiência Base: {pokemonData.base_experience} xp</p>
            </div>
        </div>
    )
}
    