import React from 'react';
import firebase from 'firebase';


class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            author: "",
            created: "",
            body: ""
        }
    }

    //Make sure to convert TIMESTAMP to Month/Day/Year format to render on post
    //this.props.match.params.NAMEofPARAM
    componentDidMount() {
        this.gatherDataForFetch();
        this.fetchPost();
    }

    gatherDataForFetch = () => {
        //Take url parameters and convert them into something useful to query firebase with
    }

    fetchPost = () => {
        //Get the specified post based on the date
        const db = firebase.firestore();
    }

    render() {
        return (
            <div className="card card-body my-2">
                <h3>{this.state.title}</h3>
                <h5>by {this.state.author}</h5>
                <h6>{this.state.created}</h6>

                <p>{this.state.body}</p>
            </div>
        );
    }
};