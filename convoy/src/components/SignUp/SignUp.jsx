import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { firebaseApp } from '../../firebase';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            error: {
                message: ''
            }
        };
    }
    
    signUp() {
        console.log('this.state', this.state);
        const { email, password } = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .catch(error => {
                console.log('error', error);
                this.setState({error});
            });
    }
    
    componentDidMount() {
        document.body.className = 'bodyBackground';
    }
  
    componentWillUnmount() {
        document.body.removeAttribute('class');
    }
    
    render() {
        const {user} = this.props;
        
        if (user) {
            return <Redirect to='/convoys' />;
        }
        return (
            <div>
    
                <div className='container'>
         
                    <div className='row' id='about'>
                        <div className='col s12'>
                        
                            <div id="textBox">
                            
                                <div className="form-inline" style={{margin: '5%'}}>
                                    <h4>Sign Up</h4>
                                    <div className="form-group">
                                        <input 
                                            className="form-control"
                                            type="text"
                                            style={{marginRight: '5px'}}
                                            placeholder="username"
                                            onChange={event => this.setState({username: event.target.value})}
                                        />
                                        <input
                                            className="form-control"
                                            type="text"
                                            style={{marginRight: '5px'}}
                                            placeholder="email"
                                            onChange={event => this.setState({email: event.target.value})}
                                        />
                                        <input
                                            className="form-control"
                                            type="password"
                                            style={{marginRight: '5px'}}
                                            placeholder="password"
                                            onChange={event => this.setState({password: event.target.value})}
                                        />
                                        <button
                                            className="btn btn-primary red"
                                            type="button"
                                            onClick={this.signUp}
                                        > 
                                            SignUp
                                        </button>
                                    </div>
                                    <div>{this.state.error.message}</div>
                                    <div><Link to={'/signin'}>Already a user? Sign in instead</Link></div>
                                </div>
                                
                                
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>

     );
    }
}

export default SignUp;


        