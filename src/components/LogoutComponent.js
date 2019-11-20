import React from 'react';
import fire from '../firebase';

class LogoutComponent extends React.Component {
    logout = e => {
        fire.auth().signOut();
    }
    
    componentDidMount() {
        this.logout();
    }

    render() {
        return(
            <div className="container alert alert-success my-4" role="alert">
                You have successfully logged out!
            </div>
        );
    }
};

export default LogoutComponent;