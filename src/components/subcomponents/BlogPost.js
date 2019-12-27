import React from 'react';
import firebase from 'firebase';


class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            title: "",
            author: "",
            created: "",
            edited: undefined,
            body: "",
            postExists: false
        }
    }

    componentDidMount() {
        this.fetchPost();
    }

    fetchPost = () => {
        //Get the specified post based on the date (*Note: JS Date months go from 0-11)
        const db = firebase.firestore();
        let timestamp = new Date(this.props.match.params.year, this.props.match.params.month - 1, this.props.match.params.day, 0, 0, 0); 
        let timestamp2 = new Date(this.props.match.params.year, this.props.match.params.month - 1, this.props.match.params.day, 23, 59, 59);
        timestamp = firebase.firestore.Timestamp.fromDate(timestamp);
        timestamp2 = firebase.firestore.Timestamp.fromDate(timestamp2);

        db.collection("blog").where("created", ">", timestamp).where("created", "<", timestamp2).limit(1).get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                this.setState({ post: doc.data(), postExists: true });
            });
        });
    }

    render() {
        return ( 
            <div className="card card-body my-2">
                {this.state.postExists ? (<div>
                    <h3>{this.state.post.title}</h3>
                    <h5>by {this.state.post.author}</h5>
                    <h6>{Date(this.state.post.created.seconds)}</h6>
                    {this.state.post.edited && <h6>Edited: {this.state.post.edited}</h6>}

                    <p>{this.state.post.body}</p>
                </div>) : (<div>
                    <h3>Oops! Likes like there wasn't a post published on</h3>
                    <h3>{this.props.match.params.month}/{this.props.match.params.day}/{this.props.match.params.year}</h3>
                </div>)}
            </div>
        );
    }
};

export default BlogPost;