import React from 'react';
import firebase from 'firebase';


class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            imgURL: "",
            edited: undefined,
            postExists: false
        }
        this.imgRef = firebase.storage().ref();
    }

    componentDidMount() {
        this.fetchPost();
    }

    fetchPost = () => {
        //Gets the specified post based on the date (*Note: JS Date months go from 0-11)
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
                this.getImageURL();
            });
        });
    }

    //If having issue in future, issue may be result of preceding '0' on day/month
    convertTimestampToDate = timestamp => {
        let timePosted = timestamp.toDate().toString().substr(4, 17);

        return(
            <>{timePosted}</>
        );
    }

    getImageURL = e => {
        this.imgRef.child(`blogImages/${this.state.post.image}`).getDownloadURL().then(url => {
            this.setState({ imgURL: url });
        });
    }

    render() {
        return ( 
            <article className="card card-body my-2">
                {this.state.postExists ? (<div>
                    <h3>{this.state.post.title}</h3>
                    {this.state.post.image && <img src={this.state.imgURL} className="img-fluid" alt="Cover img"/>}
                    <h5>by {this.state.post.author}</h5>
                    <h6>{this.convertTimestampToDate(this.state.post.created)}</h6>
                    {this.state.post.lastEdited && <h6>Edited: {this.convertTimestampToDate(this.state.post.lastEdited)}</h6>}

                    <p>{this.state.post.body}</p>
                </div>) : (<div>
                    <h3>Oops! Likes like there wasn't a post published on</h3>
                    <h3>{this.props.match.params.month}/{this.props.match.params.day}/{this.props.match.params.year}</h3>
                </div>)}
            </article>
        );
    }
};

export default BlogPost;