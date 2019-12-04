import React from 'react';
import fire from '../firebase';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import CreateBlogPost from './subcomponents/CreateBlogPost';

class AdminComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            hasAccess: false
        }
    }

    componentDidMount() {
        this.authCheck();
    }

    authCheck = () => {
        //Note to self: never use currentUser(), always use this way due to init time
        fire.auth().onAuthStateChanged(user => {
            if (user && user.email === "nicl9923@gmail.com") {
                this.setState({ hasAccess: true });
            } else if (user) {
                user.providerData.forEach(profile => { 
                    if (profile.email === "nicl9923@gmail.com") {
                        this.setState({ hasAccess: true });
                    }
                    });
            }
            else {
                this.setState({ user: null });
            }
            console.log(user);
        });
    }
    
    render() {
        return(
            <div className="container my-4">
            {this.state.hasAccess ?
                (<div>
                   <CreateBlogPost/>

                <div className="card card-body my-4">
                    <h3>Manage leaderboards</h3>
                </div>

                <div className="card card-body my-4">
                    <h3>Manage contact messages (display them in chronological order from DB here)</h3>
                </div>
            </div>) : 
                (<div className="alert alert-danger" role="alert">You do not have access to this page.</div>)}
            </div>
        );
    }
};

export default AdminComponent;