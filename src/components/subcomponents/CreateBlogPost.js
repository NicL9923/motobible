import React from 'react';
import firebase from 'firebase';

//Timestamp also needs to be stored locally in state later???
class CreateBlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            author: "",
            body: ""
        }
    }

    componentDidMount() {
        //Get all posts to put in the edit/delete list
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
        db.collection("blog").add({
            title: this.state.title,
            author: this.state.author,
            body: this.state.body,
            created: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(docRef => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(error => {
            console.error("Error adding document: ", error);
        });

        alert("Blog post created successfully!");
        this.setState({ title: "", body: "" });
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
                    <ul className="list-group">
                        <li className="list-group-item">First Post<button className="btn btn-info">Edit</button><button className="btn btn-danger">Delete</button></li>
                        <li className="list-group-item">Second Post<button className="btn btn-info">Edit</button><button className="btn btn-danger">Delete</button></li>
                        <li className="list-group-item">Third Post<button className="btn btn-info">Edit</button><button className="btn btn-danger">Delete</button></li>
                    </ul>
                    List of blog posts in chrono order with EDIT and DELETE buttons, make are you sure prompt for DEL
                </div>
            </div>
        );
    }
};

export default CreateBlogPost;