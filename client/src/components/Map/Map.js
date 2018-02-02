import React, { Component } from 'react';
import './Map.css';
import MapContainer from './../mapwrapper'
import Geolocation from './../userLocation'
import GeolocationContainer from './../GeolocationContainer'
import { firebaseApp, db } from '../../firebase';
var NavLink = require('react-router-dom').NavLink;

class Map extends Component {
    state = {
        // latitude,
        // longitude,
        // convoy: this.props.convoy
    }
     componentDidMount() {
        console.log('Map.js props', this.props);
        console.log(" user: ", this.props.user.uid, " convoy: ", this.props.match.params.ID);
        var instance = window.M.Modal.init(this.modal);
        console.log(" user: ", this.props.user.uid, " convoy: ", this.props.convoy);
        console.log('Map.js state', this.state);
     }
     
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo center">{this.props.location.state.convoyName}</a>
                        TODO: Convoy Name
                        <ul id="nav-mobile" className="left">
                            <li>
                                <NavLink to='/convoys'><i className="material-icons">arrow_back</i></NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            
                <div className='map'>
                    <GeolocationContainer>
                        <MapContainer
                        uid={this.props.user.uid}
                        convoy={this.props.match.params.ID}
                        />
                    </GeolocationContainer>
                    
                    <a className="btn-floating btn-large waves-effect waves-light red modal-trigger" href="#modal2" id="button"><i className="material-icons">add</i></a>
                  
                    <div id="modal2" className="modal bottom-sheet" ref={ (modal) => this.modal = modal }>
                        <div className="modal-content">
                            <h4>{this.props.location.state.convoyName}</h4>
                            <h5>{this.props.uid}</h5>
                            <p>
                                
                                    {this.state.latitude}
                                
                            </p>
                            {/*<button onClick = {() => this.MapUpdater}>Update Map</button>*/}
                        </div>
                       
                    </div>
                </div>
            </div>
        );
  }
}

export default Map;