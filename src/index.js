import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import SearchPage from '../src/pages/search/SearchPage';
import ResultPage from '../src/pages/result/ResultPage';

ReactDOM.render(  
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={SearchPage} />
          <Route exact path='/result' component={ResultPage} />
        </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);


serviceWorker.unregister();
