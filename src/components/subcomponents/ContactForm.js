import React from 'react';
import firebase from 'firebase';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            message: "",
            formWasSubmitted: false
        }
    }
    
    inputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    sendData = e => {
        e.preventDefault();
        this.setState({ formWasSubmitted: true });

        const db = firebase.firestore();

        //Send info to DB
        db.collection("messages").add({
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        })
        .then(docRef => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(error => {
            console.error("Error adding document: ", error);
        });

        this.setState({ formWasSubmitted: true });

    }

    render() {
        return(
            <div className="container card card-body my-5">
                    <h3>Contact Us</h3>
                    <form name="contactUsForm" onSubmit={this.sendData}>
                        <div className="form-group">
                            <h4>Name:</h4>
                            <input className="form-control" type="text" value={this.state.name} onChange={this.inputChange} placeholder="Name" name="name" required/>
                        </div>

                        <div className="form-group">
                            <h4>Email:</h4>
                            <input className="form-control" type="email"value={this.state.email} onChange={this.inputChange} placeholder="Email" name="email" required/>
                        </div>

                        <div className="form-group">
                            <h4>Message:</h4>
                            <textarea className="form-control" value={this.state.message} onChange={this.inputChange} placeholder="Message" name="message" required/>
                        </div>
                        {this.state.formWasSubmitted ? (<div className="alert alert-success" role="alert">Your message was successfully sent! We will get back to you shortly.</div>) : (<input className="btn btn-primary" type="submit" value="Send"/>)}
                        
                    </form>
            </div>
        );
    }
}

export default ContactForm;