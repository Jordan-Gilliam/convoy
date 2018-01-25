import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
// import { Provider } from 'react-redux';
import { BrowserRouter as Router,
         Switch, Route, Redirect, withRouter } from 'react-router-dom';

// import { logUser } from '../actions';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Convoys from './Convoys/Convoys';
import Map from './Map/Map';
import Home from './Home/Home';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => {
    return rest.user ? (
      <Component {...props}/>
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
    user: null
  };
  
  constructor(props) {
    super(props);
    
    firebaseApp.auth().onAuthStateChanged(user => {
      console.log('user has signed in or up', user);
      this.setState({ user });
    });
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.user && !prevState.user) {
  //     this.props.history.push('/convoys');
  //   }
  // }
  
  signOut() {
    firebaseApp.auth().signOut();
    // this.props.history.push('/signin');
    // return <p>Logged out!</p>;
  }

  render() {
    return (
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/signout' render={() => this.signOut()} />
          <PrivateRoute path='/convoys' component={Convoys} user={this.state.user} />
          <PrivateRoute path='/map' component={Map} user={this.state.user} />
          <Route render={() => <p>Not Found</p>} />
        </Switch>
    );
  }
}

export default withRouter(App);
