import React from 'react';
import { BrowserRouter as Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Helmet } from 'react-helmet';

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            loggedIn: false,
            loginFailed: false
        }
    }
    
    signIn = e => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(result => {
            this.setState({ loggedIn: true });
        }).catch(error => {
            //console.log(error);
            this.setState({ loginFailed: true });
        });
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    googleSignIn = e => {
        let provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithRedirect(provider);

        firebase.auth().getRedirectResult().then(result => {
            if (result.credential) {
              //This gives you a Google Access Token (Google APIs)
              //let token = result.credential.accessToken;
            }
            //The signed-in user info
            //let user = result.user;

            //API call causes an awkward redirect in-between stage, timeout 
            //seems to reduce that effect a little
            setTimeout(this.setState({ loggedIn: true }), 2000);

          }).catch(error => {
            //console.log(error);
          });
    }
    
    render() {
        return(
            <div className="container card card-body my-5">
                <Helmet>
                    <title>Moto Bible | Login</title>
                    <meta
                        name="description"
                        content="Login to The Motorcyclist's Bible"
                    />
                    <meta name="keywords" content="motorcycle, motorcycles, moto, motobible, rider, riding, cruising, cruiser, bike, bible, motorcyclist, 
                    motorcyclist's, minigames, chatroom, blog, resources, license"/>
                </Helmet>

                <h3>Log In</h3>
                {this.state.loginFailed ? (<div className="alert alert-danger" role="alert">Incorrect email and/or password</div>) : (null)}
                <form name="loginForm" onSubmit={this.signIn}>
                    <div className="form-group">
                        <h4>Email:</h4>
                        <input className="form-control" type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <h4>Password:</h4>
                        <input className="form-control" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <input className="btn btn-primary" type="submit" value="Login"/>
                        <button className="btn btn-info ml-3" onClick={this.googleSignIn}>Sign in with Google</button>
                    </div>
                </form>
                {this.state.loggedIn ? (<Redirect to="/"/>) : (null)}
            </div>
        );
    }
};

export default LoginComponent;