import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// import { logUser } from '../actions';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import Convoys from './Convoys/Convoys';
import Map from './Map/Map';
import Home from './Home/Home';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => {
    return rest.user ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/signin',
        state: { from: props.location }
      }} />
    );
  }} />
);

class App extends Component {
  state = {
    isLoading: true,
    user: null
  };
  
  constructor(props) {
    super(props);
    
    firebaseApp.auth().onAuthStateChanged(user => {
      console.log('user has signed in or up', user);
      this.setState({ user, isLoading: false });
    });
  }

  signOut() {
    firebaseApp.auth().signOut();
    return <Redirect to={{
      pathname: '/signin',
      state: { from: this.props.location }
    }} />;
  }

  render() {
    const { isLoading, user } = this.state;
    
    if (isLoading) {
      return <div class="progress"><div class="indeterminate"></div></div>;
    }
    
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/signin" render={props => <SignIn user={user} {...props} />} />
          <Route path='/signup' render = {props=> <SignUp user={user} {...props} />} />
          <Route path='/signout' render={() => this.signOut()} />
          <PrivateRoute path='/convoys' component={Convoys} user={user} />
          <PrivateRoute path='/map' component={Map} user={user} />
          {/*<Route path='/convoys' component={Convoys} />*/}
          <Route render={() => <p>Not Found</p>} />
        </Switch>
      </Router>
    );
  }
}

export default App;
