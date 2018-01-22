import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Convoys from './components/Convoys/Convoys';
import Map from './components/Map/Map';

var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
//Switch will handle one specific router and give an error if the route doesnt exist
var Switch = ReactRouter.Switch;

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
        
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/convoys' component={Convoys} />
            <Route path='/map' component={Map} />
            <Route render={() => <p>Not Found</p>} />
          </Switch>
          
        </div>
      </Router>      
    );
  }
}

export default App;