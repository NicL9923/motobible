import React from 'react';
import firebase from 'firebase';
import { SocialIcon } from 'react-social-icons';

class FooterComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      subscribed: false
    }
  }
  
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value})
  }

  subscribe = e => {
    e.preventDefault();
    const db = firebase.firestore();

    //Send info to DB
    //TODO: Database check for email state, if already in, display info alert FOR no duplicates in DB
    db.collection("newsletter").add({
          email: this.state.email
    })
    .then(docRef => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(error => {
        console.error("Error adding document: ", error);
    });
    
    //Change to something more fancy later
    alert("Successfully subscribed!");
  }

  render() {
        return(
        <footer className="footer bg-dark text-light p-2">
            <div className="container-fluid row p-6">
              <div className='col'>
                <div className="container text-center">
                  <h5>Sign up for our biweekly newsletter:</h5>
                  <form onSubmit={this.subscribe}><input onChange={this.handleChange} type="email" className="form-control" name="email" placeholder="Email"/>
                  <input className="btn btn-primary mt-1" type="submit" value="Subscribe"/></form>
                  <br/>
                  <p>Based in Houston, TX</p>
              </div>
            </div>
              <div className='col text-center'>
                <h5>About Us</h5>
                <p>The Motorcyclist's Bible, or Moto Bible, was made
                  to bring together riders from all over. We aim to keep you
                  connected to other riders and sharp on your riding skills and knowledge.
                </p>
              </div>
              <div className='col text-center'>
                <h5>Social Media</h5>
                <div className="row mx-auto">
                  <SocialIcon className="img-fluid mx-auto" url="twitter.com"/>
                  <SocialIcon className="img-fluid mx-auto" url="instagram.com" bgColor="#833ab4" fgColor="#e1306c"/>
                  <SocialIcon className="img-fluid mx-auto" url="youtube.com"/>
                  <SocialIcon className="img-fluid mx-auto" url="facebook.com"/>
                </div>
                <p>This site was self-built using React and Firebase</p>
                <p>© 2019 themotobible.com All Rights Reserved</p>
              </div>
            </div>
        </footer>
        );
    }
}

export default FooterComponent;