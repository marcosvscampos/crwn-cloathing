import React from 'react';

import './App.css';

import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/Homepage.component';

const HatsPage = () => (
  <div>Hats Page</div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
