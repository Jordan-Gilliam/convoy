import React, { Component } from 'react';
import './Convoys.css';
import dummydata from "./dummydata.json";
import icons from './icons.json';
import API from "../../utils/API";
import { db } from '../../firebase';
import firebase from 'firebase';
import SignUp from "../SignUp/SignUp";
import Chip from 'material-ui/Chip';


var Link = require('react-router-dom').Link;

var NavLink = require('react-router-dom').NavLink;

class Convoys extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dummydata: [],
            email: '',
            emails: [],
            icon: null,
            convoyName: '',
            newEmails: [],
            username: '',
            sgEmail: {},
           
            
        };
        this.handleDelete = this.handleDelete.bind(this);
    }
    
    componentDidMount() {
        var instance = window.M.Modal.init(this.modal);
        
        console.log(icons);
        var icon = icons[Math.floor(Math.random()*icons.length)];
        
        //  var icon = icons.map((icon) => {
        //     console.log(icon);
        // })
        console.log('icon ' + icon);
        this.setState({icon});
        // var icon = Math.floor(Math.random() * (1 + Icons.length - 1));
        // console.log(JSON.stringify(icon));
        
        
        var convoydata = dummydata.map((data) => {
            console.log(data);
            
            return {
                convoyName: data.name,
            };
        });
        // console.log(convoydata);
        this.setState({dummydata : convoydata});
        console.log('convoy name: ' + JSON.stringify(convoydata));
    }
    
    /*handleDelete(data) {
        console.log('data', data.target);
        //const { emails } = this.state;
        const emails = [...this.state.emails];
        const emailToDelete = emails.indexOf(data);
        emails.splice(emailToDelete, 1);
        this.setState({ emails });
    }*/
    
    handleDelete = data => () => {
        const emails = [...this.state.emails];
        const emailToDelete = emails.indexOf(data);
        emails.splice(emailToDelete, 1);
        this.setState({ emails });
      };

    
    startSendGrid = () => {
      console.log("sendgrid");
      API.postEmail()
        .then(res => this.setState({ sgEmail : res.data }))
        .catch(err => console.log(err));
      console.log(this.state.sgEmail);
    };
  
    saveAndUpdate = (uid, name, members) => {
        this.startSendGrid();
        // A convoy entry.
        const convoyData = {
            uid: this.state.username,
            name: this.state.convoyName,
            members: this.state.email,
        };
        
        console.log(convoyData.uid);
        // Get a key for a new Convoy.
        const newConvoyKey = db.ref().child('convoys').push().key;
    
        // Write the new convoy's data simultaneously in the convoys list and the profiles list.
        var updates = {};
        updates['/convoys/' + newConvoyKey] = convoyData;
        updates['/profiles/' + uid + '/' + newConvoyKey] = convoyData;
    
        return db.ref().update(updates);
    };
   

    
    render() {
        var dummydata = this.state.dummydata;
        console.log(dummydata);
        
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
    
                    {dummydata.map((data) => {
                        return (
                                <Link to={{pathname: '/map'}}  key={data.convoyName}>
                                    <li className='collection-item avatar'>
                                        {/*<img src={this.state.icon} alt="" class="circle"/>*/}
                                        <img src={icons[Math.floor(Math.random()*icons.length)]} alt="" class="circle"/>
                                        <span class="title">
                                            {data.convoyName}
                                        </span>
                                        <p id='p'>
                                            First Name 
                                            <br/>
                                            Second Name
                                        </p>
                                        <a href="#!" class="secondary-content"><i class="material-icons">chevron_right</i></a>

                                    </li>
                                    <div className='divider'></div>
                                </Link>
                        );
                    })}
                
                </ul>
                
                <div className='container'>
            
                    <div className='row'>
                        <div className='col s12'>
                            
                            {/*<ul className="collection">
                              <li className="collection-item">
                              <Link to={{pathname: '/map'}}>Convoy I</Link>
                              </li>
                            </ul>*/}
              

                        </div>
                    </div>  
                  
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
                                            onKeyPress={(e) => {
                                                this.setState({ convoyName: this.state.convoyName + e.key });
                                                
                                                // if (e.key === 'Enter') {
                                                //     let {emails} = this.state;
                                                //     emails.push({
                                                //         convoyName: this.state.convoyName
                                                //     });
                                                //     this.setState({ emails, convoyName: '' });
                                                //     console.log({emails});
                                                    
                                                // }
                                                console.log(this.stateconvoyName);
                                            }}
                                        />
                                        <input
                                            placeholder="email"
                                            className="inviteEmail validate"
                                            value={this.state.email}
                                            onKeyPress={(e) => {
                                               console.log('event', e.key); 
                                               this.setState({ email: this.state.email + e.key });
                                               if (e.key === 'Enter') {
                                                   let { emails } = this.state;
                                                   emails.push({
                                                       id: emails.length,
                                                       label: this.state.email,
                                                       convoyName: this.state.convoyName,
                                                   });
                                                   this.setState({ emails, email: '' });
                                                   console.log({emails});
                                               }
                                            }}
                                        />
                                        {
                                            this.state.emails.map(data => {
                                                console.log("chip")
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
