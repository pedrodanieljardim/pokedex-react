import React, {Component} from 'react';


export default class Pokedex extends Component{


    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        <img src="https://fontmeme.com/permalink/200906/d0eb6f10e3e06f865c0145f73b161d39.png" alt="poke-react" border="0" />
                    </p>
                    <p className="to-search">
                        Procure por qualquer pokémon!
                    </p>

                    <form>
                        <input id = "pokemon" placeholder="ex: pikachu"/>
                    </form>
                    <button className="search-button" type="submit"> Procurar</button>
                    <p className="copyright-pokeapi">
                    Usando dados da PokeAPi para o Back-end!
                    </p>
                </header>
            </div>
        )
    }
}