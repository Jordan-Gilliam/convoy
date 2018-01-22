import React, { Component } from 'react';
import './Map.css';


class Map extends Component {


  render() {
    return (
      <div>
        
        
        <nav>
            <div class="nav-wrapper">
              <a href="#" class="brand-logo center">Convoy 1</a>
              <ul id="nav-mobile" class="left">
                <li><a href="sass.html"><i class="material-icons">arrow_back</i></a></li>
              </ul>
            </div>
        </nav>
        
        <div className='container'>
    
          <div className='row'>
            <div className='col s12'>
              
              <div
                style={{
                  border: '2px solid lightGray',
                  margin: '20px auto 10px auto',
                  padding: '5px',
                  width: '100%',
                  height: '500px'
                }}
              >
                <span>
                    Map goes here
                </span>
              </div>
              
            </div>
          </div>  


        </div>
      </div>
    );
  }
}

export default Map;