import React, { Component } from 'react';
import './Convoys.css';
import dummydata from "./dummydata.json";
var Link = require('react-router-dom').Link;


var NavLink = require('react-router-dom').NavLink;


class Convoys extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dummydata,
        };
    }

    render() {
        return (
            <div>
          
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo center">My Convoys</a>
                        <ul id="nav-mobile" className="right">
                            <li>
                                <NavLink to='/'>Sign Out</NavLink>
                            </li>              
                        </ul>
                    </div>
                </nav>
                
                <div className='container'>
            
                    <div className='row'>
                        <div className='col s10 offset-s1'>
                            
                            <ul className="collection">
                              <li className="collection-item"><a>Convoy I</a></li>
                            </ul>
                            {this.state.dummydata.map(data => {
                                return (
                                    <ul className='collection'>
                                        <Link to={{pathname: '/map'}}>
                                            <li className='collection-item'>
                                                {data.Test2.name}, 
                                                {data.Test2.users.user.name}    
       
                                            </li>
                                        </Link>
                                    </ul>
                                )
                            })}
                        </div>
                    </div>  
                  
                    <div className='row'>
                        <div className='col s8 offset-s2'>
                            <button data-target="modal1" className="btn modal-trigger">New Convoy</button>
                          
                            <div id="modal1" className="modal">
                                <div className="modal-content">
                                    <h4>New Convoy</h4>
                                    <form>
                                        <input placeholder="Convoy Name" id="convoyName" type="text" class="validate" />
                                        <input placeholder="email" class="inviteEmail" type="text" class="validate" />
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
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

