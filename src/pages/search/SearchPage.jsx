import React, {Component} from 'react';

import SearchBar from './components/SearchBar/index';
import Logo from './components/Logo/index';
import Credits from './components/Footer/index';



export default class SearchPage extends Component{
    render(){
        return (
            <>
                
                <Logo />
                <SearchBar/>
                <Credits />
            </>
        )
    }
}