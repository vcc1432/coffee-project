import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Varieties from './varieties/pages/Varieties'

function App() {

  let routes;
  return ( 
    <Router>
        <main>
          <Route path="/" exact>
            <Varieties />
          </Route>
          <Route path="/:cid" exact>
           
          </Route> 
          <Redirect to="/" />
        </main>
      </Router>
  );
};

export default App;