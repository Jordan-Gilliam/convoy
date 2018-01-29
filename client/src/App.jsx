import React, { Component } from 'react';
import { firebaseApp } from './firebase';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// import { logUser } from '../actions';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Convoys from './components/Convoys/Convoys';
import Map from './components/Map/Map';
import Home from './components/Home/Home';

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
    user: null,
    profileId: null
  };
  
  constructor(props) {
    super(props);
    
  firebaseApp.auth().onAuthStateChanged(user => {
    this.setState({ user, isLoading: false });
    if (!user) return; // done if user logged out
  
    const profileRef = db.ref(`/profiles/${user.uid}`);
    profileRef.once("value", snapshot => {
      const isNewUser = (snapshot.val() !== null);
      this.setState({ isNewUser }); // detect this in render() and <Redirect to='/profile' /> to edit profile page    
    });
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
