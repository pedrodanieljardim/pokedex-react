import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchPage from '../src/pages/search/SearchPage';
import * as serviceWorker from './serviceWorker';




ReactDOM.render(
  <React.StrictMode>
    <SearchPage />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
