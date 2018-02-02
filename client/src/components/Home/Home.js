import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
  
  componentDidMount() {
    document.body.className = 'bodyBackground';
  }
  
    componentWillUnmount() {
    document.body.removeAttribute('class');
  }
  
  
  render() {
    return (
        <div>
    
            <div className='container'>
     
                <div className='row' id='about'>
                    <div className='col s12'>
                    
                        <div id="textBox">
                        
                            <div className='row'>
                                <div className='col s12'>
                                    <p>
                                      Convoy is an app that makes group travel simple. Create a travel group, invite your friends, and view everyone's location with ease.
                                    </p>
                                </div>
                            </div>
                            
                            <div className='row' id='loginButton'>
                                <div className='col s8 offset-s2'>
                                    <Link className="waves-effect waves-light btn red color" to='/signin'>Login</Link>
                                    <Link className="waves-effect waves-light btn red color" to='/signup'>Sign Up</Link>
                                </div>
                            </div>
                            
                        </div>
                    
                    </div>
                </div>
              </div>
        </div>
    );
  }
}

export default Home;