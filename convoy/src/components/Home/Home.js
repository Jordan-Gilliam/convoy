import React, { Component } from 'react';
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
                                      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                                    </p>
                                </div>
                            </div>
                            
                            <div className='row' id='loginButton'>
                                <div className='col s8 offset-s2'>
                                    <a className="waves-effect waves-light btn red color" a href='./sigin'>Login</a>
                                    <a className="waves-effect waves-light btn red color" a href='./signup'>Sign Up</a>
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