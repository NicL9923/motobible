import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import BlogCalendar from './subcomponents/BlogCalendar';
import { Helmet } from 'react-helmet';
import './stylesheets/BlogComponent.css';

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
                //console.log(doc.id, " => ", doc.data());
                this.setState({ posts: [...this.state.posts, doc.data()] });
                //console.log("Posts Array: ", this.state.posts);
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
            <div>
                <Helmet>
                    <title>Moto Bible | Blog</title>
                    <meta
                        name="description"
                        content="The official blog of The Motorcyclist's Bible"
                    />
                    <meta name="keywords" content="motorcycle, motorcycles, moto, motobible, rider, riding, cruising, cruiser, bike, bible, motorcyclist, 
                    motorcyclist's, minigames, chatroom, blog, resources, license"/>
                </Helmet>

                <div className="card my-3">
                    <div className="card-header">
                        <h3 className="card-title">The Moto Blog</h3>
                        <h4 className="card-subtitle text-muted">Our Latest Posts</h4>
                    </div>
                    <div className="card-body overflow-auto" style={{maxHeight: 500}}>
                        { this.state.posts.map((post, index) => {
                            return (<article className="card card-body my-2" key={index}>
                                        <a href={this.generateLinkToPost(post.created)}><h3>{ post.title }</h3></a>
                                        <h5>by { post.author }</h5>
                                        <h6 className="text-muted">{this.convertTimestampToDate(post.created)}</h6>
                                        <p className="overflow-hidden" style={{maxHeight: "50px"}} dangerouslySetInnerHTML={this.decodeText(post.body)}></p>
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