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
        let timePosted = timestamp.toDate().toString().substr(4, 17);

        return(
            <p>{timePosted}</p>
        );
    }

    generateLinkToPost = timestamp => {
        let timePosted = timestamp.toDate();
        let linkString = "/blog/";
        let year = timePosted.getFullYear();
        let month = timePosted.getMonth() + 1;
        let day = timePosted.getDate();

        if (month.length < 2)
            month = "0" + month;
        if (day.length < 2)
            day = "0" + day;
        
        linkString = linkString + year + "/" + month + "/" + day;

        return linkString;
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
                                    <a href={this.generateLinkToPost(post.created)}><h3>{ post.title }</h3></a>
                                    <p>by { post.author }</p>
                                    <p>{this.convertTimestampToDate(post.created)}</p>
                                    <p className="overflow-hidden" style={{maxHeight: "100px"}}>{ post.body }</p>
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