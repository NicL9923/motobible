import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import fire from '../firebase';
import firebase from 'firebase';

class RegisterComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            registered: false
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    register = e => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(result => {
            this.setState({ registered: true });
        }).catch(error => {
            console.log(error);
        });
    }

    googleSignIn = e => {
        let provider = new firebase.auth.GoogleAuthProvider();

        fire.auth().signInWithRedirect(provider);

        fire.auth().getRedirectResult().then(result => {
            if (result.credential) {
              // This gives you a Google Access Token (Google APIs)
              //let token = result.credential.accessToken;
            }
            // The signed-in user info
            //let user = result.user;

            this.setState({ registered: true });

          }).catch(function(error) {
            console.log(error);
        });
    }
    
    render() {
        return(
            <div className="container card card-body my-5">
                <h3>Register</h3>
                <form name="registerForm" onSubmit={this.register}>
                    <div className="form-group">
                        <h4>Email:</h4>
                        <input className="form-control" type="email" name="email" placeholder="Email" onChange={this.handleChange} value={this.state.email} required/>
                    </div>
                    <div className="form-group">
                        <h4>Password:</h4>
                        <input className="form-control" type="password" name="password" placeholder="Password" onChange={this.handleChange} value={this.state.password} required/>
                    </div>
                        <div className="form-group">
                        <input className="btn btn-primary" type="submit" value="Register"/>
                        <button className="btn btn-info ml-3" onClick={this.googleSignIn}>Sign in with Google</button>
                    </div>
                </form>
                {this.state.registered ? (<Redirect to="/"/>) : (null)}
            </div>
        );
    }
};

export default RegisterComponent;