import React, { Component } from 'react';
import './Convoys.css';
// import dummydata from "./dummydata.json";
import icons from './icons.json';
import API from "../../utils/API";
import { firebaseApp, db } from '../../firebase';
import firebase from 'firebase';
import SignUp from "../SignUp/SignUp";
import Chip from 'material-ui/Chip';


var Link = require('react-router-dom').Link;

var NavLink = require('react-router-dom').NavLink;

class Convoys extends Component {
    constructor(props) {
        super(props);
        this.state = {
            convoys: [],
            convoysId: [],
            convoyId: "",
            email: '',
            emails: [],
            icons: null,
            convoyName: '',
            newEmails: [],
            username: '',
            currentConvoy: '',
            emailsHere: [],
        };
        this.handleDelete = this.handleDelete.bind(this);
    }
    
    componentDidMount() {
        console.log("this.props.user.uid: ", this.props.user.uid);
        var instance = window.M.Modal.init(this.modal);
        // var icon = icons[Math.floor(Math.random()*icons.length)];

        
      
            this.setState({icons});
    
        // console.log('icon ' + icon);
        // this.setState({icon});
        // var icon = Math.floor(Math.random() * (1 + Icons.length - 1));
        // console.log(JSON.stringify(icon));
        
        //function to render convoy cards
        db.ref(`profiles/${this.props.user.uid}/convoys`).on("value", (snapshot) => {
            const convoys = [];
            const convoysId = [];
            snapshot.forEach((data) => {
            // console.log("data.key: " + data.key);
            db.ref(`convoys/${data.key}/name`).once("value").then( (results) => {
                //adds convoyId to convoy array
                convoys.push(results.val());
                convoysId.push(data.key);
                //updates the convoy array in this.state to the convoy array from this function
                this.setState({convoys});
                // console.log(convoys);
                this.setState({convoysId});
                })

            })
            // console.log("snapshot: ", snapshot);
            // console.log("JSON.stringify(snapshot): ", JSON.stringify(snapshot));
        });
    }
    
    
    handleDelete = data => () => {
        const emails = [...this.state.emails];
        const emailToDelete = emails.indexOf(data);
        emails.splice(emailToDelete, 1);
        this.setState({ emails });
      };
      
    handleInputConvoy = event => {
        this.setState({ convoyName: event.target.value });
    }
    
    handleInputEmail = event => {
        this.setState({ email: event.target.value });
    }
    
    
    createEmail = () => {
        let emails = [...this.state.emails];
        emails.push({
            id: emails.length,
            label: this.state.email,
            convoyName: this.state.convoyName,
        });
        console.log('emails', emails);
        this.setState({ emails, email: '' });
        return emails;
    }
    
    
    handleonKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.createEmail();
        }
      
    }
    
    startSendGrid = (emailsHere) => {
        console.log("start send grid");
        API.postEmail(emailsHere)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        
    };
    
    saveAndUpdate = (uid, name, members) => {
        // if email input field is not empty (!this.state.email), push it to emails array
        let emails = this.state.emails;
        
        if (this.state.email) {
            console.log('here');
            emails = this.createEmail();
        }
   

        let emailsHere = emails.map(email => email.label);
        console.log('emailsHere', emailsHere);
        this.setState({ emailsHere });
        
        
        this.startSendGrid(emailsHere);
        const {user} = this.props;
        // A convoy entry.

        // // A convoy entry.
        const convoyData = {
            name: this.state.convoyName,
            uid: this.props.user.uid,
            convoyID: this.state.convoyID
        };
        console.log(convoyData);
        console.log(this.state.convoys);
        
        console.log(convoyData.name);
        let convoysHere = [];
        convoysHere.push(convoyData.name);
        console.log(convoysHere);
        
        // Get a key for a new Convoy.
        const newConvoyKey = db.ref().child('convoys').push().key;
        // Write the new convoy's data simultaneously in the convoys list and the profiles list.
        var updates = {};
        // console.log("newConvoyKey: " + newConvoyKey + " convoy.Data.name: " + convoyData.name + " convoy.Data.uid: " + convoyData.uid + " newConvoyKey: " + newConvoyKey)
        //add the convoy's name to the convoy
        updates['/convoys/' + newConvoyKey + '/name'] = convoyData.name;
        // console.log("setting name in convoy record");
        //add the current user UID to the members object
        updates['/convoys/' + newConvoyKey + '/members/' + convoyData.uid] = true;
        
        // updates['/convoys/' + newConvoyKey + '/members/' + convoyData.uid + '/name'] = this.state.username;

        console.log("associating UID on convoy");
        //add the convoykey to the current user's profile
        updates['/profiles/' + convoyData.uid + '/convoys/' + newConvoyKey] = true;
        // console.log("associating convoy ID on profile");
        
        console.log('emailsHere' + this.state.emailsHere);
        return db.ref().update(updates).then(this.setState({ convoyName: '', email: '', emails: []}, () =>console.log("wiped state")));
        
    
    };
    
    
    
    

    render() {
        var convoysKey = this.state.convoysKey;
        return (

            <div>
                <nav>
                    <div className="nav-wrapper">
                        <div href="#" className="brand-logo center">My Convoys</div>
                        <ul id="nav-mobile" className="right">
                            <li>
                                <NavLink to='/signout'>Sign Out</NavLink>
                            </li>              
                        </ul>
                    </div>
                </nav>
                
                <ul className='collection'>

                    {this.state.convoys.map((name, id) => {
                        const ID = this.state.convoysId[id];
                        return (
                                <Link
                                    to={{
                                        pathname: `/map/${ID}`,
                                        state: {
                                            convoyName: name,
                                        },
                                         //search: '?sort=name',
                                    }}
                                    //to={{pathname: `/map/${ID}?convoy=${name}`}}
                                    key={ID}
                                    id={ID}
                                    state={{convoyName: name}}
                                >
                                    <li className='collection-item avatar'>
                                        {this.state.icons.map((oneIcon) => {
                                            // console.log('icon: ' +  oneIcon);
                                            return (
                                                <img src={oneIcon} alt='car avatar' className='circle'/>
                                            );
                                        })}
                                        {/*<img src={icons[Math.floor(Math.random()*icons.length)]} alt="" class="circle"/>*/}
                                        <span className="title">

                                            {name}
                                        </span>
                                        <p id='p'>
                                            First Name 
                                            <br/>
                                            Second Name
                                        </p>
                                        <a href="#!" className="secondary-content"><i className="material-icons">chevron_right</i></a>

                                    </li>
                                    <div className='divider'></div>
                                </Link>
                        
                     
                        );
                       
                    })}
                
                </ul>
                
                <div className='container'>
                  
                    <div className='row'>
                        <div className='col s8 offset-s2'>
                            <button data-target="modal1" className="btn modal-trigger red">New Convoy</button>
                          
                            <div id="modal1" className="modal" ref={ (modal) => this.modal = modal }>
                                <div className="modal-content">
                                    <h4>New Convoy</h4>
                                    <form>
                                        <input 
                                            placeholder="Convoy Name" 
                                            id="convoyName" 
                                            className="validate" 
                                            value={this.state.convoyName}
                                            onChange={this.handleInputConvoy}
                         
                                        />
                                        <input
                                        
                                            placeholder="email"
                                            className="inviteEmail validate"
                                            value={this.state.email}
                                            onChange={this.handleInputEmail}
                                            onKeyPress={this.handleonKeyPress}
                                        />
                                        {
                                            this.state.emails.map(data => {
                                              return (
                                                    <Chip
                                                    key={data.id}
                                                    label={data.label}
                                                      onDelete={this.handleDelete(data)}
                                                    />
                                              );
                                            })
                                        }                                               
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat" onClick={() => this.saveAndUpdate()}>Create</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Convoys;
