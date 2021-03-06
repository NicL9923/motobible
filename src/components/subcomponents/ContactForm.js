import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            subject: "",
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

        let db = firebase.firestore();

        //My odd attempt at handling the off chance of a duplicate subject
        if (db.collection("messages").doc(this.state.subject)) {
            this.setState({ subject: this.state.subject + " Duplicate by " + this.state.name });
        }

        //Send info to DB
        db.collection("messages").doc(this.state.subject).set({
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message,
            created: firebase.firestore.Timestamp.now()
        })
        .then(docRef => {
            //console.log("Document written with ID: ", docRef.id);
        })
        .catch(error => {
            //console.error("Error adding document: ", error);
        });

        this.setState({ name: "", email: "", subject: "", message: ""});
    }

    render() {
        return(
            <div className="contactFormDiv">
                <form className="contactForm" name="contactUsForm" onSubmit={this.sendData} method="POST">
                    <h3>Contact Us</h3>
                    <p className="contactFormSubhdr">Any questions, comments, or feedback on the site are more than welcome!</p>
                    
                    <div>
                        <h4>Name</h4>
                        <input type="text" value={this.state.name} onChange={this.inputChange} placeholder="Name" name="name" required/>
                    </div>

                    <div>
                        <h4>Email</h4>
                        <input type="email"value={this.state.email} onChange={this.inputChange} placeholder="Email" name="email" required/>
                    </div>

                    <div>
                        <h4>Subject</h4>
                        <input type="text" value={this.state.subject} onChange={this.inputChange} placeholder="Subject" name="subject" required/>
                    </div>

                    <div>
                        <h4>Message</h4>
                        <textarea value={this.state.message} onChange={this.inputChange} placeholder="Message" name="message" required/>
                    </div>

                    {this.state.formWasSubmitted ? (<div className="contactFormSubmitted" role="alert">Your message was successfully sent! We will get back to you shortly.</div>) : (<input className="contactFormSubmitBn" type="submit" value="Send"/>)}
                </form>
            </div>
        );
    }
}

export default ContactForm;