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
        
            <div className='map'>
            
                <MapContainer />
                
                <a className="btn-floating btn-large waves-effect waves-light red modal-trigger" id="button"><i class="material-icons">add</i></a>
              
                <div id="modal1" className="modal bottom-sheet">
                    <div className="modal-content">
                        <h4>Modal Header</h4>
                        <p>A bunch of text</p>
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
                    </div>
                </div>
              
            </div>
        </div>
    );
  }
}

export default Map;