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

    //Currently just a method to dangerouslySetInnerHTML
    //Handles HTML tags (<br>, <b>, etc are main use case)
    decodeText = postBody => {
        //Find some way to handle tabs and newlines (\n)
        return({
            __html: postBody
        });
    }

    render() {
        return ( 
            <article className="card card-body my-2">
                {this.state.postExists ? (<div>
                    {this.state.post.image && <img src={this.state.imgURL} className="img-fluid mx-auto d-block" style={{maxHeight: "50vh"}} alt="Cover img"/>}
                    <h3><b>{this.state.post.title}</b></h3>
                    <h5>by {this.state.post.author}</h5>
                    <h6 className="text-muted">{this.convertTimestampToDate(this.state.post.created)}</h6>
                    {this.state.post.lastEdited && <h6 className="text-muted">Edited: {this.convertTimestampToDate(this.state.post.lastEdited)}</h6>} <br/>
                    <p dangerouslySetInnerHTML={this.decodeText(this.state.post.body)}></p>
                    <br/>
                    <h6>As always, ride smart brothers and sisters,</h6>
                    <h6>{this.state.post.author}</h6>
                </div>) : (<div>
                    <h3>Oops! Likes like there wasn't a post published on</h3>
                    <h3>{this.props.match.params.month}/{this.props.match.params.day}/{this.props.match.params.year}</h3>
                </div>)}
            </article>
        );
    }
};

export default BlogPost;