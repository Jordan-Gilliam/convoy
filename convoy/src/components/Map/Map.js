import React, { Component } from 'react';
import './Map.css';
import MapContainer from './../mapwrapper'
import Geolocation from './../userLocation'
var NavLink = require('react-router-dom').NavLink;



class Map extends Component {


  render() {
    return (
      <div>
        
        
        <nav>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo center">Convoy 1</a>
              <ul id="nav-mobile" className="left">
                <li>
                <NavLink to='/convoys'><i className="material-icons">arrow_back</i></NavLink>
                </li> 
              </ul>
            </div>
        </nav>
        
        <div className='container'>
    
          <div className='row'>
            <div className='col s12'>
            <div  style={{
                  border: '2px solid lightGray',
                  margin: '20px auto 10px auto',
                  padding: '-40px',
                  width: '5rem',
                }}>
                <MapContainer />
            </div>   
            </div>
          </div>  
          
        <div className='row'>
        <Geolocation/>
        </div>


        </div>
      </div>
    );
  }
}

export default Map;