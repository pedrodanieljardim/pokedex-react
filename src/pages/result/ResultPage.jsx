import React, {Component} from 'react';

import Logo from './components/Logo/index';
import Table from './components/Table/index';
import Footer from './components/Footer/index';

export default class ResultPage extends Component{
    render(){
        return (
            <>
                <Logo /> 
                <Table />
                <Footer />
            </>
        )
    }
}