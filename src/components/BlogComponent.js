import React from 'react';
import firebase from 'firebase';

class BlogComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            numPostsShown: 5
        }
    }

    componentDidMount() {
        this.fetchBlogPosts();
    }
  
    fetchBlogPosts = () => {
        const db = firebase.firestore();
        
        db.collection("blog").orderBy("created", "desc").limit(this.state.numPostsShown).get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                this.setState({ posts: [...this.state.posts, doc.data()] });
                console.log("Posts Array: ", this.state.posts);
            });
        });
    }
    
    convertTimestampToDate = timestamp => {
        let timePosted = timestamp.toDate().toString();

        return(
            <p>{timePosted}</p>
        );
    }

    render() {
        return (
            <div>
                <div className="card my-3">
                    <div className="card-header">
                        <h3 className="card-title">The Moto Blog</h3>
                        <h4 class="card-subtitle text-muted">Our Latest Posts</h4>
                    </div>
                    <div className="card-body overflow-auto" style={{maxHeight: 300}}>
                        { this.state.posts.map((post, index) => {
                            return (<div className="card card-body my-3" key={index}>
                                    <a href="LINKtoPOST"><h3>{ post.title }</h3></a>
                                    <p>by { post.author } on {this.convertTimestampToDate(post.created)}</p>
                                    <p>{ post.body }</p>
                                </div>)
                        })}
                    </div>
                </div>

                <div className="card my-3">
                    <p>Search by date, maybe a cool looking calendar UI?, or just boring click year/month/week</p>
                </div>
            </div>
        );
    }
};

export default BlogComponent;

//Use each parameter to query down to one post