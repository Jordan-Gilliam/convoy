import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { firebaseApp, db, defaultAuth } from '../../firebase';


import './SignIn.css';

class SignIn extends Component {
    state = {
        email: '',
        password: '',
        error: {
            message: ''
        }
    };
    
    convoyHelper = (user, param) => {
        console.log("profileId props: "+ JSON.stringify(user, null, 4));
        db.ref(`/profiles/${user.uid}`).set({
            convoys: false,
            email: this.state.email,
            username: this.state.username
        });
        console.log(this.props.location);
        
                console.log(this.props.location.pathname);
                let path = this.props.location.pathname;
                let convoyId = path.substr(-20, 20); 
                let userId = this.props.user.uid;
                
            if (convoyId) {
                        console.log("queries being fired");
                        var updates = {};
                        updates[`/profiles/${userId}/convoys/${convoyId}`]=true;
                        updates[`/convoys/${convoyId}/members/${userId}`]=true;
                        return db.ref().update(updates);
         }
    }

    signIn = () => {
        console.log('this.state', this.state);
        const { email, password } = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                this.convoyHelper(user);
                console.log("firebase signIn successful");
                console.log('fb props', this.props);
                // if there is a convoy id, add it to this user
                
                    // if (convoyId) {
                    //     db.ref(`profiles/${userId}/convoys/${convoyId}`).set(true);
                    //     db.ref(`convoys/${convoyId}/members/${userId}`).set(true);
                    // }
                    // if (convoyId) {
                    //     console.log("queries being fired");
                    //     var updates = {};
                    //     updates[`/profiles/${userId}/convoys/${convoyId}`]=true;
                    //     updates[`/convoys/${convoyId}/members/${userId}`]=true;
                    //     return db.ref().update(updates);
                    //     // db.ref(`profiles/${userId}/convoys/${convoyId}`).set(true);
                    //     // db.ref(`convoys/${convoyId}/members/${userId}`).set(true);
                    // }
            })
            .catch(error => {
                console.log('error', error);
                this.setState({ error });
            });
    }
    
    componentDidMount() {
        document.body.className = 'bodyBackground';
        let path = this.props.location.pathname;
        let convoyId = path.substr(-20, 20); 
        console.log(convoyId);
        console.log("this.props: ", this.props);
 
          
    }
  
    componentWillUnmount() {
        document.body.removeAttribute('class');
    }
    
    render() {
        console.log('SignIn props', this.props);
        const { from } = this.props.location.state || { from: { pathname: '/convoys/' + this.props.location.pathname.substr(-20, 20) } }
        const { user } = this.props;
        
    
        if (user) {
            console.log("redirecting to " + JSON.stringify(from));
            return <Redirect to={from} />;
        }
    
        return (
            <div>
        
                <div className='container'>
         
                    <div className='row' id='about'>
                        <div className='col s12'>
                        
                            <div id="textBox">
                            
                                <div className="form-inline" style={{margin: '5%'}}>
                                    <h3>Sign In</h3>
                                    <div className="form-group">
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
                                            onClick={() => this.signIn()}
                                        > 
                                            Sign In
                                        </button>
                                    </div>
                                    <div>{this.state.error.message}</div>
                                    <div><Link to={'/signup/' + this.props.location.pathname.substr(-20, 20)}>Sign up instead</Link></div>
                                </div>
                                
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
           
        );
    }
}

export default SignIn;