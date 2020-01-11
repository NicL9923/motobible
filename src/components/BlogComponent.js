import React from 'react';
import firebase from 'firebase';
import './stylesheets/BlogComponent.css';
import BlogCalendar from "./subcomponents/BlogCalendar";

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
            <>{timePosted}</>
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

    show5More = e => {
        e.preventDefault();
        this.setState({ posts: [], numPostsShown: this.state.numPostsShown + 5 });
        this.fetchBlogPosts();
    }

    render() {
        return (
            <div>
                <div className="card my-3">
                    <div className="card-header">
                        <h3 className="card-title">The Moto Blog</h3>
                        <h4 className="card-subtitle text-muted">Our Latest Posts</h4>
                    </div>
                    <div className="card-body overflow-auto" style={{maxHeight: 300}}>
                        { this.state.posts.map((post, index) => {
                            return (<article className="card card-body my-2" key={index}>
                                    <a href={this.generateLinkToPost(post.created)}><h3>{ post.title }</h3></a>
                                    <p>by { post.author }</p>
                                    <p>{this.convertTimestampToDate(post.created)}</p>
                                    <p className="overflow-hidden" style={{maxHeight: "50px"}}>{ post.body }</p>
                                    <p className="read-more"><a href={this.generateLinkToPost(post.created)} className="btn btn-info">Read More</a></p>
                                </article>)
                        })}
                        <div className="text-center"><button className="btn btn-primary mx-auto mb-2" onClick={this.show5More}>Show 5 More</button></div>
                    </div>
                </div>

                <BlogCalendar/>
            </div>
        );
    }
};

export default BlogComponent;