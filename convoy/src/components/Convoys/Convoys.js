import React, { Component } from 'react';
import './Convoys.css';
import dummydata from "./dummydata.json";
import icons from './icons.json';
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
    
    sendGrid() {
        const SENDGRID_API_KEY = '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';
        console.log('sending!');
        const { emails } = this.state;
        console.log({emails});
        
        
        const sgMail = require('@sendgrid/mail');
        // const sg = require("sendgrid")(SENDGRID_API_KEY);
        sgMail.setApiKey(SENDGRID_API_KEY);
        
        const msg = {
          to: ['gilliamja.te@gmail.com', 'isa.oambrosio@gmail.com', 'gregory.jimr@gmail.com', 'mbradleystylist@gmail.com'],
          from: 'test@example.com',
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
            console.log("email sent");
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
                                        <input placeholder="Convoy Name" id="convoyName" className="validate" />
                                        <input
                                            placeholder="email"
                                            className="inviteEmail validate"
                                            value={this.state.email}
                                            onKeyPress={(e) => {
                                               //console.log('e', e.key); 
                                               this.setState({ email: this.state.email + e.key });
                                               if (e.key === 'Enter') {
                                                   let { emails } = this.state;
                                                   emails.push({
                                                       id: emails.length,
                                                       label: this.state.email,
                                                   });
                                                   this.setState({ emails, email: '' });
                                               }
                                            }}
                                        />
                                        {
                                            this.state.emails.map(data => {

                                              return (
                                                <Chip
                                                  key={data.id}
                                                  label={data.label}
                                                  onDelete={this.handleDelete(data)}
                                                  //className={classes.chip}
                                                />
                                              );
                                            })
                                        }
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