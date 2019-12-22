import React, { Component } from 'react';

import './App.css';

import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/Homepage.container';
import ShopPage from './pages/shop/Shop.container';
import Header from './components/header/Header.component';
import SignInSignUp from './pages/signin-signup/SignInSignUp.container';
import { createUserProfileDocument, auth } from './firebase/firebase.utils';

class App extends Component {

  constructor(){
    super();

    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser : {
              id : snapshot.id,
              ...snapshot.data()
            }
          });
        }) 
      }
      this.setState({ currentUser: userAuth })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
