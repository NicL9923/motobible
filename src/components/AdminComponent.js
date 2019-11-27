import React from 'react';
import fire from '../firebase';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

class AdminComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            userEmail: "",
            hasAccess: false
        }
    }

    componentDidMount() {
        //BUG: timeframe thing on auth instantiation
        this.authCheck();
        
        if (this.state.userEmail === 'nicl9923@gmail.com') {
            this.setState({ hasAccess: true });
        }
    }

    authCheck = () => {
        let user = fire.auth().currentUser;
        if (user) {
            // User is signed in.
            if (user.email) {
                this.setState({ userEmail: user.email });
            }
            else {
                this.setState({ userEmail: user.providerData.forEach(profile => { return profile.email; })});
            }
        } else {
            // User is signed out.
            this.setState({ user: null });
        }
    }
    
    render() {
        return(
            <div className="container my-4">
            {this.state.hasAccess ?
                (<div><div className="card card-body my-4">
                    <h2>Manage blog posts</h2>
                    
                    <form name="" onSubmit="">
                        <h3>Title</h3>
                        <h3>Content</h3>
                        <h3>Other stuff?</h3>
                    </form>

                    <div>
                        Ability to delete blog posts
                    </div>
                </div>

                <div className="card card-body my-4">
                    Manage leaderboards
                </div>

                <div className="card card-body my-4">
                    Manage contact messages (display them in chronological order from DB here)
                </div></div>) : (<div className="alert alert-danger" role="alert">You do not have access to this page.</div>)}
            </div>
        );
    }
};

export default AdminComponent;