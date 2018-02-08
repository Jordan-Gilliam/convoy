import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { firebaseApp, db, defaultAuth } from '../../firebase';
import API from "../../utils/API";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            passwordInitial: '',
            passwordConfirm: '',
            error: {
                message: ''
            },
        };
    }
    //createUser requires createUser, handleCurrentUser and is called on signup
    

    //function that should be called right after signup to create new profile
    profileId = (user, param) => {
        console.log("profileId props: "+ JSON.stringify(user, null, 4));
        db.ref(`/profiles/${user.uid}`).set({
            convoys: false,
            email: this.state.email,
            username: this.state.username
        });
        console.log(this.props.location);
        //will check for params on route, if exists, connects profile and convoy
        
                console.log(this.props.location.pathname);
                let path = this.props.location.pathname
                let ID = path.substr(-20, 20); 
                console.log(ID);
        
        if (ID) {
            var updates = {};
            updates[`/profiles/${user.uid}/convoys/${ID}`]=true;
            // updates[`/convoys/${ID}/members/${user.uid}`]=true;
            updates[`/convoys/${ID}/members/${user.uid}/name`]=this.state.username;
            return db.ref().update(updates);
                
                 
        }
    }
    
    //  linkConvoy = (convoy) => {
    //         console.log("link convoys to user");
    //         API.linkUserToConvoy(convoy)
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err));
    // }
    
    signUp = () => {
        // console.log('this.state', this.state);
        const { email, passwordInitial, passwordConfirm } = this.state;
        if (passwordInitial === passwordConfirm) {
        firebaseApp.auth().createUserWithEmailAndPassword(email, passwordInitial)
            .then((user) =>
                this.profileId(user)
            )
            .catch(error => {
                console.log('error', error);
                this.setState({error});
            });
        } else {
            alert("check password spelling and try again");
        }
    }
    
    componentDidMount() {
        document.body.className = 'bodyBackground';

    }
  
    componentWillUnmount() {
        document.body.removeAttribute('class');
    }
    
    render() {
        console.log("render props: "+ JSON.stringify(this.props, null, 4));
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
                                            onChange={event => this.setState({passwordInitial: event.target.value})}
                                        />
                                        <input
                                            className="form-control"
                                            type="password"
                                            style={{marginRight: '5px'}}
                                            placeholder="confirm password"
                                            onChange={event => this.setState({passwordConfirm: event.target.value})}
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
                                    <div><Link to={'/signin/' + this.props.location.pathname.substr(-20, 20)}>Already a user? Sign in instead</Link></div>
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


        