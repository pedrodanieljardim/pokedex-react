import React, {Component} from 'react';
import './SearchPage.css';

export default class SearchPage extends Component{


    render(){
        return (
            <div className="App">
                <header>
                    <p className="logo">
                        <img src="https://fontmeme.com/permalink/200906/d0eb6f10e3e06f865c0145f73b161d39.png" alt="poke-react"/>
                    </p>
                </header>

                <body>
                    <div className="box">
                        <input type="text" className="search" placeholder="Procure por qualquer Pokémon digitando apenas o nome!" />
                    </div>
                    <br></br>
                    <button type="submit" className="button">Pesquisar</button>

                </body>

                <footer>
                    <p >
                        Page use ReactJS and PokeAPi.
                    </p>

                    <p>
                        Created by Pedro Daniel Jardim
                    </p>
                </footer>
            </div>
        )
    }
}