import React, { Component } from 'react';
import './Convoys.css';


class Convoys extends Component {


  render() {
    return (
      <div>
        
        
        <nav>
            <div class="nav-wrapper">
              <a href="#" class="brand-logo center">My Convoys</a>
              <ul id="nav-mobile" class="left">
                <li><a href="sass.html"><i class="material-icons">arrow_back</i></a></li>
              </ul>
            </div>
        </nav>
        
        <div className='container'>
    
          <div className='row'>
            <div className='col s10 offset-s1'>
              
                <ul class="collection">
                  <li class="collection-item"><a>Convoy I</a></li>
                </ul>
                <ul class="collection">
                  <li class="collection-item"><a>Convoy II</a></li>
                </ul>
                <ul class="collection">
                  <li class="collection-item"><a>Convoy III</a></li>
                </ul>
                <ul class="collection">
                  <li class="collection-item"><a>Convoy IV</a></li>
                </ul>
              
            </div>
          </div>  
          
          <div className='row'>
            <div className='col s8 offset-s2'>
              <a class="waves-effect waves-light btn">New Convoy</a>
            </div>
          </div>


        </div>
      </div>
    );
  }
}

export default Convoys;