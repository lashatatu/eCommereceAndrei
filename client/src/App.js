import React, {useEffect} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './App.css';

import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import SignInAndSignUpPage from './page/sign-in-and-sign-up/sign-in-and-sign-upcomponent';
import CheckoutPage from './page/checkout/checkout.component';

import Header from './components/header/header.component';

import {selectCurrentUser} from './redux/user/user.selector';
import {checkUserSession} from './redux/user/user.actions';

const App = ({checkUserSession, currentUser}) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession]);

  return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route
              exact
              path='/signin'
              render={() =>
                  currentUser ? (
                      <Redirect to='/'/>
                  ) : (
                      <SignInAndSignUpPage/>
                  )
              }
          />
        </Switch>
      </div>
    );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);