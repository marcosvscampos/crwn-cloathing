import React from 'react';

import './App.css';

import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/Homepage.container';
import ShopPage from './pages/shop/Shop.container';
import Header from './components/header/Header.component';
import SignInSignUp from './pages/signin-signup/SignInSignUp.container';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
