import React from 'react';
import './style.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default props => {

    const [pokemon, setPokemon] = React.useState('');
    const [pokemonData, setPokemonData] = React.useState([]);
    const [pokemonType, setPokemonType] = React.useState([]);

    const getPokemon = async (history) => {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const toArray = [];
        try{
            const res = await axios.get(url);
            toArray.push(res.data);
            setPokemonType(res.data.types[0].name);
            setPokemonData(toArray);
            console.log(res);
        }catch(e){
            console.log(e);
        }
    }

    const handleChange = (e) => {
        setPokemon(e.target.value.toLowerCase());
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getPokemon();
    }
    return (
        <form className="all" onSubmit = {handleSubmit}>
            <label className="box">
                <input type="text" className="search" id="pokemon" onChange={handleChange}    placeholder="Procure por qualquer Pokémon digitando apenas o nome ou seu número na National Dex!" />
            </label>
            <br></br>
            <Link to="/result">
                <button type="submit"value="submit" className="button" >Pesquisar</button>
            </Link>
        </form>
    )
}
    