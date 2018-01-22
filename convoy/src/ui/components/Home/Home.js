import React, { Component } from 'react';
import './Home.css';
class Home extends Component {


  render() {
    return (
      <div>
        <div className='container'>
        
          <div className='row'>
            <div className='col s6 offset-s3'>
              
              <div
                style={{
                  border: '2px solid lightGray',
                  margin: '80px auto 10px auto',
                  padding: '10px',
                  width: '100%',
                }}
              >
                <img
                  src='http://via.placeholder.com/100x100'
                >
                </img>
              </div>
              
            </div>
          </div>  
          
          
          <div className='row'>
            <div className='col s10 offset-s1'>
              <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
              </p>
            </div>
          </div>
          
          
          <div className='row'>
            <div className='col s6 offset-s3'>
              <a class="waves-effect waves-light btn">Login</a>
              <a class="waves-effect waves-light btn">Sign Up</a>
            </div>
          </div>
          
          
        </div>
      </div>
    );
  }
}

export default Home;