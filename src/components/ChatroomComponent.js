import React from 'react';
import { Helmet } from 'react-helmet';
import firebase from 'firebase/app';
import 'firebase/firestore';

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
        this.chatroom = firebase.firestore().collection("chatroom").onSnapshot(snapshot => {
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
                <div className="card card-body my-1">
                    {this.state.userEmail ? (
                    !this.state.hasJoined ? (
                        <div className="TBD">
                            <p>{this.state.userEmail}</p>
                            <input name="chatName" placeholder="Chat Name" value={this.state.chatName} onChange={this.handleChange} /><br />
                            <button onClick={this.handleJoin}>Join</button>
                        </div>
                        ) : (
                        <div className="TBD">
                            <div className="TBD">
                                {this.state.messages.map(message => {
                                    if (message.email === this.state.userEmail) {
                                        return (
                                            <div className="message" key={message.timestamp}>
                                                <p id="currentUser">{message.chatName}:</p>
                                                <p>{message.content}</p>
                                                <p>{new Date(message.timestamp).toString()}</p>
                                            </div>
                                        );
                                    }

                                    else {
                                        return (
                                            <div className="TBD" key={message.timestamp}>
                                                <p id="otherUsers">{message.chatName}:</p>
                                                <p>{message.content}</p>
                                                <p>{new Date(message.timestamp).toString()}</p>
                                            </div>
                                        );
                                    }
                                })}
                            </div>

                            <input name="msg" placeholder="Enter your message here" onChange={this.handleChange} value={this.state.message} />
                            <button onClick={this.sendMessage}>Send</button>

                            <p>Signed in as: {this.state.userEmail} ({this.state.chatName})</p>
                        </div>
                    )
                    ) : (
                        <div className="TBD">
                            <p>You must have an account and be logged in to chat.</p>
                        </div>
                    )
                }
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