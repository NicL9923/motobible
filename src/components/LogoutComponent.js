import React from 'react';
import { BrowserRouter as Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';

class LogoutComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedOut: false
        }
    }
    
    logout = e => {
        firebase.auth().signOut();
    }
    
    componentDidMount() {
        this.logout();
    }

    render() {
        return(
            setTimeout(() => {this.setState({ loggedOut: true })}, 2000),
            <div className="container alert alert-success my-4" role="alert">
                You have successfully logged out! You will now be redirected to the home page.
                {this.state.loggedOut ? (<Redirect to="/"/>) : (null)}
            </div>
        );
    }
};

export default LogoutComponent;