import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

class ManageMessages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        }
    }

    componentDidMount() {
        this.fetchContactMessages();
    }

    fetchContactMessages = () => {
        //Get all contact messages
        const db = firebase.firestore();

        db.collection("messages").orderBy("created", "desc").get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                // doc.data() is never undefined for query doc snapshots
                //console.log(doc.id, " => ", doc.data());
                this.setState({ messages: [...this.state.messages, doc.data()] });
                //console.log("Messages Array: ", this.state.messages);
            });
        });
    }

    convertTimestampToDate = timestamp => {
        let timePosted = timestamp.toDate().toString();

        return(
            <p>{timePosted}</p>
        );
    }

    deleteContactMessage = (e, messageSubject) => {
        e.preventDefault();
        const db = firebase.firestore();

        if (!window.confirm("Delete " + messageSubject + " message?")) {
            return;
        }

        db.collection("messages").doc(messageSubject).delete().then( () => {
            alert("Successfully deleted message!");
        }).catch(error => {
            alert(error);
            //console.error("Error removing document: ", error);
        });

        this.setState({ messages: [] });
        this.fetchContactMessages();
    }

    render() {
        return (
            <div className="overflow-auto" style={{maxHeight: 300}}>
                <h3>Manage Contact Messages</h3>

                { this.state.messages.map((msg, index) => {
                    return (<div className="card card-body my-3" key={index}>
                            <h3>{ msg.subject }</h3>
                            <h5>Sent on {this.convertTimestampToDate(msg.created)}</h5>
                            <p>{ msg.name }</p>
                            <p>{ msg.email }</p>
                            <p>{ msg.message }</p>
                            <button className="btn btn-danger" onClick={e => {this.deleteContactMessage(e, msg.subject)}}>Delete Message</button>
                        </div>)
                })}
            </div>
        );
    }
};

export default ManageMessages;