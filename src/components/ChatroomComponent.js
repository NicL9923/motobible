import React from 'react';
import { Helmet } from 'react-helmet';
import firebase from 'firebase/app';
import 'firebase/firestore';

/* TODOs:
-Put edit button by signed-in name to pop up a simple text/button form
to change user's nickname
-Format Date object function
-Similar to BlogComponent, pull only X most recent, with button to retrieve
Y more older messages if clicked

*/

class ChatroomComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasJoined: false,
            chatName: null,
            userEmail: null,
            msg: "",
            messages: []
        }
    }

    componentDidMount() {
        this.authCheck();

        //Listen (real-time) for changes (ie new messages sent)
        this.chatroom = firebase.firestore().collection("chatroom").orderBy("timestamp").onSnapshot(snapshot => {
            snapshot.forEach((snap) => {
                this.setState({ messages: [...this.state.messages, snap.data()] });
            });
        });
    }

    componentWillUnmount() {
        //Should theoretically close the realtime listening 
        //per Firebase's documentation
        this.chatroom();
    }

    //Also checks for the user's chat name if one exists in the DB
    authCheck = () => {
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            // User is signed in.
            if (user.email) {
              this.setState({ userEmail: user.email });
            }
            else {
              this.setState({ userEmail: user.providerData.forEach(profile => { return profile.email; })});
            }

            //Check 'chatNames' collection for nickname
            //If we find it, hasJoined = true
            firebase.firestore().collection("chatNames").where("email", "==", this.state.userEmail).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    //console.log(doc.id, " => ", doc.data());
                    this.setState({ chatName: doc.data().chatName, hasJoined: true });
                });
            })
            .catch(error => {
                //console.log("Error getting documents: ", error);
            });
          } else {
            // User is signed out.
            this.setState({ userEmail: null });
          }
        });
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleJoin = e => {
        //Add chatname/email to 'chatNames' collection
        firebase.firestore().collection("chatNames").add({
            chatName: this.state.chatName,
            email: this.state.userEmail
        })
        .then(docRef => {
            //console.log("Document written with ID: ", docRef.id);
        })
        .catch(error => {
            //console.error("Error adding document: ", error);
        });

        this.setState({ hasJoined: true });
    }

    sendMessage = () => {
        //Post necessary stuff to 'chatroom' collection in DB
            //Structure of docs: content, timestamp, email
        firebase.firestore().collection("chatroom").add({
            content: this.state.msg,
            timestamp: Date.now(),
            chatName: this.state.chatName,
            email: this.state.userEmail
        })
        .then(docRef => {
            //console.log("Document written with ID: ", docRef.id);
        })
        .catch(error => {
            //console.error("Error adding document: ", error);
        });

        this.setState({ msg: "", messages: [] });
    }

    formatDateObject = () => {
        //TODO: Will take in Date object from map function and format
        //it to something pleasant
    }
    
    render() {
        return(
            <div className="container-fluid my-2">
                <Helmet>
                    <title>Moto Bible | Chatroom</title>
                    <meta
                        name="description"
                        content="The chatroom for The Motorcyclist's Bible"
                    />
                    <meta name="keywords" content="motorcycle, motorcycles, moto, motobible, rider, riding, cruising, cruiser, bike, bible, motorcyclist, 
                    motorcyclist's, minigames, chatroom, blog, resources, license"/>
                </Helmet>

                <div className="card my-1">
                    <h2 className="card-header">Live Chatroom</h2>

                    <div className="card-body">
                        {this.state.userEmail ? (
                        !this.state.hasJoined ? (
                            <div className="TBD">
                                <p>Email: {this.state.userEmail}</p>
                                <input name="chatName" className="form-control" placeholder="Chat Name" value={this.state.chatName} onChange={this.handleChange} /><br />
                                <button onClick={this.handleJoin}>Join</button>
                            </div>
                            ) : (
                            <div className="TBD">
                                <div className="boxOfMessages">
                                    {this.state.messages.map(message => {
                                        if (message.email === this.state.userEmail) {
                                            return (
                                                <div className="message" key={message.timestamp}>
                                                    <p id="currentUser">{message.chatName}:</p>
                                                    <p>{message.content}</p>
                                                    <p><small>{new Date(message.timestamp).toLocaleString()}</small></p>
                                                </div>
                                            );
                                        }

                                        else {
                                            return (
                                                <div className="message" key={message.timestamp}>
                                                    <p id="otherUsers">{message.chatName}:</p>
                                                    <p>{message.content}</p>
                                                    <p><small>{new Date(message.timestamp).toLocaleString()}</small></p>
                                                </div>
                                            );
                                        }
                                    })}
                                </div>
                                <div className="input-group my-1 mt-2">
                                    <input name="msg" className="form-control mr-2"placeholder="Enter your message here" onChange={this.handleChange} value={this.state.message} />
                                    <button className="btn btn-primary" onClick={this.sendMessage}>Send</button>
                                </div>

                                <p className="mt-3"><small><b>Signed in as:</b> {this.state.userEmail} ({this.state.chatName})</small></p>
                            </div>
                        )
                        ) : (
                            <div className="TBD">
                                <p>You must have an account and be logged in to chat.</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="card card-body my-1">
                    <h5>Having issues with the chatroom?</h5>
                    <p>Join us on our <a href="https://discord.gg/afe8ZMN">Discord</a></p>
                </div>
            </div>
        );
    }
};

export default ChatroomComponent;