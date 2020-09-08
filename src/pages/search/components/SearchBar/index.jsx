import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';

export default props => {

    const handleChange = (e) => {
        const pokeItem = e.target.value.toLowerCase();
        localStorage.setItem("searchedPokemon", pokeItem);
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    return (
        <form className="all" onSubmit = {handleSubmit}>
            <label className="box">
                <input type="text" className="search" id="pokemon" onChange={handleChange}   placeholder="Procure por qualquer Pokémon digitando apenas o nome ou seu número na National Dex!" />
            </label>
            <br></br>
            <Link to="/result">
                <button type="submit"value="submit" className="button" >Pesquisar</button>
            </Link>
        </form>
    )
}
    