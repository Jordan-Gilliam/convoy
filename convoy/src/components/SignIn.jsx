import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { firebaseApp } from '../firebase';

class SignIn extends Component {
    state = {
        email: '',
        password: '',
        error: {
            message: ''
        }
    };

    signIn() {
        console.log('this.state', this.state);
        const { email, password } = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log("firebase signIn successful");
            })
            .catch(error => {
                console.log('error', error);
                this.setState({ error });
            });
    }
    
    render() {
        console.log(this.props);
        const { from } = this.props.location.state || { from: { pathname: '/convoys' } }
        const { user } = this.props;
    
        if (user) {
            console.log("redirecting to " + JSON.stringify(from));
            return <Redirect to={from} />;
        }
    
        return (
            <div className="form-inline" style={{margin: '5%'}}>
                <h2>Sign In</h2>
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
                        className="btn btn-primary"
                        type="button"
                        onClick={() => this.signIn()}
                    > 
                        Sign In
                    </button>
                </div>
                <div>{this.state.error.message}</div>
                <div><Link to={'/signup'}>Sign up instead</Link></div>
            </div>
        );
    }
}

export default SignIn;