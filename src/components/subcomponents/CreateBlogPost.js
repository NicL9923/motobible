import React from 'react';
import firebase from 'firebase';

class CreateBlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            author: "",
            body: "",
            posts: [],
            editingPost: false,
            editingTitle: "",
            editingAuthor: "",
            editingBody: "",
            editingCreated: "",
            oldTitle: ""
        }
    }

    componentDidMount() {
        this.fetchBlogPosts();
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    createBlogPost = e => {
        e.preventDefault();
        const db = firebase.firestore();

        if (!this.state.title || !this.state.body) {
            alert("Post not created! Please make sure to insert a title and body content.");
            return;
        }

        //Send info to DB
        db.collection("blog").doc(this.state.title).set({
            title: this.state.title,
            author: this.state.author,
            body: this.state.body,
            created: firebase.firestore.FieldValue.serverTimestamp()
        }).then(docRef => {
            alert("Blog post created successfully!");
            this.setState({ title: "", body: "" });
            console.log("Document created successfully!");
        }).catch(error => {
            alert("Error creating blog post!");
            console.error("Error adding document: ", error);
        });

        this.fetchBlogPosts();
    }

    fetchBlogPosts = e => {
        //Get all posts to put in the edit/delete list
        const db = firebase.firestore();

        db.collection("blog").orderBy("created", "desc").get().then(querySnapshot => {
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

    //Below (startEdit/editBlogPost) is my currently horribly rigged way to edit a post (delete old and create entirely new one)
    //but it's the only solution i could think of that worked with firebase and its not a commonly used
    //feature so I think it's fine (for now)
    startEdit = (e, postTitle, postAuthor, postBody, postCreated) => {
        e.preventDefault();
        this.setState({ editingPost: true, editingTitle: postTitle, oldTitle: postTitle, editingAuthor: postAuthor, editingBody: postBody, editingCreated: postCreated });
    }
    
    editBlogPost = e => {
        e.preventDefault();
        const db = firebase.firestore();
        
        if (!window.confirm("Edit " + this.state.editingTitle + " post?")) {
            this.setState({ editingPost: false });
            return;
        }

        if (this.state.editingTitle !== this.state.oldTitle) {
            db.collection("blog").doc(this.state.oldTitle).delete().then( () => {
                alert("Successfully deleted old post!");
            }).catch(error => {
                alert(error);
                console.error("Error removing document: ", error);
            });
        }
        
        db.collection("blog").doc(this.state.editingTitle).set({
            title: this.state.editingTitle,
            author: this.state.editingAuthor,
            body: this.state.editingBody,
            created: this.state.editingCreated,
            lastEdited: firebase.firestore.FieldValue.serverTimestamp()
        }).then(docRef => {
            alert("Blog post edited successfully!");
        }).catch(error => {
            alert("Error editing blog post!");
            console.error("Error editing document: ", error);
        });

        this.setState({ posts: [], editingPost: false });
        this.fetchBlogPosts();
    }

    deleteBlogPost = (e, postToDelete) => {
        e.preventDefault();
        const db = firebase.firestore();

        if (!window.confirm("Delete " + postToDelete + " post?")) {
            return;
        }
        
        //Find way to get post for which delete button is being pressed (replace DOCtoDELETE)

        db.collection("blog").doc(postToDelete).delete().then( () => {
            alert("Successfully deleted post!");
        }).catch(error => {
            alert(error);
            console.error("Error removing document: ", error);
        });

        this.setState({ posts: [] });
        this.fetchBlogPosts();
    }

    render() {
        return(
            <div className="card card-body my-4">
                <h2>Blog Management</h2>
                <div className="container my-2">
                    <h3>Create Post</h3>
                    <form name="createBlogPost" onSubmit={this.createBlogPost}>
                        <div className="form-group">
                            <h4>Title</h4>
                            <input className="form-control" type="text" name="title" placeholder="Title" onChange={this.handleChange} value={this.state.title}/>
                        </div>
                        <div className="form-group">
                            <h4>Author</h4>
                            <input className="form-control" type="text" name="author" placeholder="Author" onChange={this.handleChange} value={this.state.author}/>
                        </div>
                        <div className="form-group">
                            <h4>Body</h4>
                            <textarea className="form-control" name="body" placeholder="Body" onChange={this.handleChange} value={this.state.body}/>
                        </div>

                        <input className="btn btn-primary" type="submit" value="Create Post"/>
                    </form>
                </div>

                <div className="container my-2">
                    <h3>Edit or Delete Posts</h3>
                    <div className="overflow-auto" style={{maxHeight: "300px"}}>
                        <ul className="list-group">
                            { this.state.posts.map((post, index) => {
                            return (<li className="list-group-item my-1" key={index}>
                                    <a href="LINKtoPOST"><h4>{ post.title }</h4></a>
                                    <p>by { post.author } on {this.convertTimestampToDate(post.created)}</p>
                                    <button className="btn btn-info mr-1" onClick={e => {this.startEdit(e, post.title, post.author, post.body, post.created)}}>Edit</button>
                                    <button className="btn btn-danger ml-1" onClick={e => {this.deleteBlogPost(e, post.title)}}>Delete</button>
                                </li>)
                        })}
                        </ul>
                    </div>
                    {this.state.editingPost && 
                    <div>
                        <form name="editBlogPost" onSubmit={this.editBlogPost}>
                            <div className="form-group">
                                <h4>Title</h4>
                                <input className="form-control" type="text" name="editingTitle" placeholder="Title" onChange={this.handleChange} value={this.state.editingTitle}/>
                            </div>
                            <div className="form-group">
                                <h4>Body</h4>
                                <textarea className="form-control" name="editingBody" placeholder="Body" onChange={this.handleChange} value={this.state.editingBody}/>
                            </div>

                            <input className="btn btn-primary" type="submit" value="Edit Post"/>
                        </form>
                    </div>}
                </div>
            </div>
        );
    }
};

export default CreateBlogPost;