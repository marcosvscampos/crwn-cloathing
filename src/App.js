import React from 'react';

import './App.css';

import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/Homepage.container';
import ShopPage from './pages/shop/Shop.container';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
