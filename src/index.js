import React from 'react';
import ReactDOM from 'react-dom';
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import Home from './Home'
import PokemonDetails from './PokemonDetails'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


ReactDOM.render(
  <Router>
    <Switch>
       <Route path="/" exact component = {Home} />
       <Route path=":/PokemonId" exact component={PokemonDetails}/>
    </Switch>  
  </Router>,
  document.getElementById('root')
);

