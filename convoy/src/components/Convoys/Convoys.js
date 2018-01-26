import React, { Component } from 'react';
import './Convoys.css';
import dummydata from "./dummydata.json";
import Icons from "./Icons.json";
var Link = require('react-router-dom').Link;

var NavLink = require('react-router-dom').NavLink;


class Convoys extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dummydata: [],
            icon: null,
        };
    }
    
    componentDidMount() {
        var instance = window.M.Modal.init(this.modal);
        
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
                                        <img src="https://images.vexels.com/media/users/3/128427/isolated/preview/f7c407a39ce5080511410aa6bce5f32d-pink-circle-retro-car-by-vexels.png" alt="" class="circle"/>
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
                                        <input placeholder="Convoy Name" id="convoyName" type="text" className="validate" />
                                        <input placeholder="email" className="inviteEmail" type="text" className="validate" />
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Create</a>
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