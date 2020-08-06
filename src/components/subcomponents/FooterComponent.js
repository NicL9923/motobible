import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

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
    let db = firebase.firestore();

    //TODO: Database check for email state, if already in, display info alert FOR no duplicates in DB
    db.collection("newsletter").doc(this.state.email).set({
      email: this.state.email
    })
    .then(docRef => {
      //console.log("Document written with ID: ", docRef.id);
    })
    .catch(error => {
      //console.error("Error adding document: ", error);
    });
    
    //Change to something more fancy later
    alert("Successfully subscribed!");
    this.setState({ email: "" });
  }

  render() {
        return(
          <footer>
            <div>
              <h5 className="footerHdr">Sign up for our biweekly newsletter:</h5>
              <form className="newsletterForm" onSubmit={this.subscribe} method="POST">
                <input className="subscribeEmail" onChange={this.handleChange} type="email" name="email" placeholder="Email"/>
                <input className="subscribeBn" type="submit" value="Subscribe"/>
              </form>
              <p>Based in Houston, TX</p>
              <p><a href="/terms">Terms</a> | <a href="/privacy">Privacy</a></p>
            </div>

            <div>
              <h5 className="footerHdr">About Us</h5>
              <p>The Motorcyclist's Bible, or Moto Bible, was made
                to bring together riders from all over. We aim to keep you
                connected to other riders and sharp on your riding skills and knowledge. 
                If you love motorcycles, you have a home here!
              </p>
            </div>
            
            <div>
              <h5 className="footerHdr">Social Media</h5>
              <div className="socialMediaIcons">
                <a href="https://twitter.com/MotoBible"><i class="fa fa-twitter fa-2x" aria-hidden="false"></i></a>
                <a href="https://www.instagram.com/motorcyclistsbible/"><i class="fa fa-instagram fa-2x" aria-hidden="false"></i></a>
                <a href="https://www.youtube.com/channel/UCavSc27ZHAqRpMc4C-BGsbw"><i class="fa fa-youtube-play fa-2x" aria-hidden="false"></i></a>
              </div>
              <p>This site was self-built using ReactJS and Google Firebase</p>
              <p>© 2020 themotobible.com All Rights Reserved</p>
            </div>
          </footer>
        );
    }
}

export default FooterComponent;