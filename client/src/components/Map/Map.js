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
        console.log(" user: ", this.props.user.uid, " convoy: ", this.props.convoy);
        var instance = window.M.Modal.init(this.modal);
        console.log(" user: ", this.props.user.uid, " convoy: ", this.props.convoy);
     }
     
    MapUpdater = () => {
     //get current lat, lng
    //  console.log("latitude: ", this.state.latitude, " longitude: ", this.state.longitude) 
     console.log(" user: ", this.props.user.uid, " convoy: ", this.props.convoy);
     console.log("MapUpdater executing");
     //set current lat, lng to UID in convoy/members
     db.ref(`convoys/${this.props.convoy}/members/${this.props.user.uid}`).set({lat: 10, lng: 11})
     //get all from members where member is UID (gets current user name and geolocation)
     //get all from members where member is not UID (gets all other members names and geolocation)
     //pass into array with format {name: name, lat: lat, lng: lng}
     console.log("getCurrentPosition fired");
   }
    
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
                    <GeolocationContainer>
                        <MapContainer />
                        
                        <a className="btn-floating btn-large waves-effect waves-light red modal-trigger" href="#modal2" id="button"><i class="material-icons">add</i></a>
                      
                        <div id="modal2" className="modal bottom-sheet" ref={ (modal) => this.modal = modal }>
                            <div className="modal-content">
                                <h4>Modal Header</h4>
                                <button onClick = {() => this.MapUpdater}>Update Map</button>
                            </div>
                            <div className="modal-footer">
                                <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
                            </div>
                        </div>
                    </GeolocationContainer>  
                </div>
            </div>
        );
  }
}

export default Map;