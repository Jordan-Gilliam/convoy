import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { firebaseApp } from '../firebase';
// import { Provider } from 'react-redux';
// import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// import { logUser } from '../actions';
// import SignIn from './SignIn';
// import SignUp from './SignUp';
import Convoys from './Convoys/Convoys';
import Map from './Map/Map';
import Home from './Home/Home';


var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
//Switch will handle one specific router and give an error if the route doesnt exist
var Switch = ReactRouter.Switch;

// const PrivateRoute = ({ component: Component, store, ...rest }) => (
//   <Route {...rest} render={props => {
//     console.log(props);
//     return store.email ? (
//       <Component {...props}/>
//     ) : (
//       <Redirect to={{
//         pathname: '/signin',
//         state: { from: props.location }
//       }}/>
//     )
//   }}/>
// );

class App extends Component {
  // constructor(props) {
  //   super(props);
    
  //   firebaseApp.auth().onAuthStateChanged(user => {
  //     if (user) {
  //         console.log('user has signed in or up', user);
  //         const { email } = user;
  //         props.store.dispatch(logUser(email));
  //     } else {
  //         console.log('user has signed out or still needs to sign in.');
  //         //browserHistory.replace('/signin');
  //     }
  //   });
  // }
  
  // signOut() {
  //   firebaseApp.auth().signOut();
  // }

  render() {
    return (
       <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/convoys' component={Convoys} />
            <Route path='/map' component={Map} />
            <Route render={() => <p>Not Found</p>} />
          </Switch>
      </Router>
    );
  }
}

export default App;



// export default connect(mapStateToProps, null)(App);
     
     
    // function mapStateToProps(state) {
    //     console.log('state');
    //     return {};
    //   }
     
     
      // <Provider store={this.props.store}>
      //   <BrowserRouter>
      //     <Switch>
      //       <Route exact path='/' component={Home} />
      //       <Route path="/signin" component={SignIn} />
      //       <Route path="/signup" component={SignUp} />
      //       <Route path='/convoys' component={Convoys} store={this.props.store} />
      //       <Route path='/map' component={Map} />
      //       <Route render={() => <p>Not Found</p>} />
      //     </Switch>
      //   </BrowserRouter>
      // </Provider>