import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import SignInAndSignUpPage from "./page/sign-in-and-sign-up/sign-in-and-sign-upcomponent";
import HomePage from "./page/homepage/homepage.component";
import ShopPage from "./page/shop/shop.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
        <Header/>
        <Switch>
            <Route exact path={'/'} component={HomePage}/>
            <Route path={'/shop'} component={ShopPage}/>
            <Route path={'/signin'} component={SignInAndSignUpPage}/>
        </Switch>
    </div>
  );
}

export default App;
