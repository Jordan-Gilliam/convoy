import React, { Component } from 'react';
import './Convoys.css';
import dummydata from "./dummydata.json";
import SENDGRID_API_KEY from "./sendgrid.env";
var Link = require('react-router-dom').Link;

var NavLink = require('react-router-dom').NavLink;

class Convoys extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dummydata: [],
        };
    }
    
    componentDidMount() {
        var instance = window.M.Modal.init(this.modal);
        
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
    
    
    sendGrid() {
        console.log(SENDGRID_API_KEY);
        const sgMail = require('@sendgrid/mail');
        // const sg = require("sendgrid")(SENDGRID_API_KEY);
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        
        const msg = {
          to: [],
          from: '',
          subject: '{friend} has invited you to join Convoy!',
          text: 'Hello and welcome to Convoy! Your friend {user} has invited you to join a convoy for your next trip. Click below to accept the invitation and sign up today. Convoy Description.',
          html: '<button>Join the Convoy!</button>',
        };
        
        // send and sendMultiple methods return a Promise
        // handle success and capture errors:
        // **this is needed for all options
        sgMail
          .send(msg)
          .then(() => {
            //Celebrate
          })
          .catch(error => {
        
            //Log friendly error
            console.error(error.toString());
        
            // //Extract error msg
            const {message, code, response} = error;
        
            // //Extract response msg
            const {headers, body} = response;
          });
  
        sgMail.send(msg);
    }

    
    render() {
        var dummydata = this.state.dummydata;
        console.log(dummydata);
        
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo center">My Convoys</a>
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
                                    <li className='collection-item'>
                                        {data.convoyName}
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
                                        <input placeholder="Convoy Name" id="convoyName" type="text" className="validate" />
                                        <input placeholder="email" className="inviteEmail" type="text" className="validate" />
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat" onClick={() => this.sendGrid()}>Create</a>
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