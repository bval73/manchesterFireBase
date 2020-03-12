import React from 'react';
import ReactDOM from 'react-dom';
import './Resources/css/app.css';
//import './index.css';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
//import * as serviceWorker from './serviceWorker';

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));


