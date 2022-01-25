'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { store } from './reducers/store';
import { Provider } from 'react-redux'

import Navigation from './components/parts/Navigation';
import PageRoutes from './components/routes';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navigation/>
        <PageRoutes/>
      </Router>
    </Provider>
  )
};

ReactDOM.render(<App/>, document.getElementById('root'));
