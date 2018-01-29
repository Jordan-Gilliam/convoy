import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { firebaseApp, db, defaultAuth } from '../../firebase';
import firebase from 'firebase';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            error: {
                message: ''
            },
            user: firebase.auth.uid,
        };
    }
    //createUser requires createUser, handleCurrentUser and is called on signup
    
    
    //function that should be called right after signup to create new profile
    profileId = () => {
        db.ref(`/profiles`).push({
            convoys: false,
            email: this.state.email,
            username: this.state.username
        }).key;
    }
    
    signUp = () => {
        // console.log('this.state', this.state);
        const { email, password } = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .then(
                this.profileId()
            )
            .catch(error => {
                console.log('error', error);
                this.setState({error});
            });
        this.state.handleCurrentUser;

    }

    //set current user to be the current UID
    handleCurrentUser = () => {
        this.setState({user: firebaseApp.firebase.auth().currentUser});
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
                                            //call create user here?
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


        