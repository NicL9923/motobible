import React from 'react';
import Clock from './subcomponents/Clock';

class HomeComponent extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <img src="asd" alt="Cruising motorcycle"/>
                    <img src="asd" alt="Static motorcycle"/>
                    <div>buttons to change moto (cruiser, sport, standard)</div>
                    <Clock/>
                </div>
                
                <div>
                    <h3>Motorcyclist's Bible</h3>
                    <p>Welcome to the Motorcyclist's Bible, or Moto Bible for short! Here we aim
                        to offer all riders valuable information, guidance, and ways to get connected
                        with the whole community!
                    </p>
                    <p>Here you'll find:</p>
                    <ul>
                        <li>A <b>blog</b> about the latest and greatest gear, riding tips, community, etc.</li>
                        <li>A <b>live chatroom</b> to connect with fellow riders</li>
                        <li>Some <b>minigames</b> to test your riding skills</li>
                        <li>Great <b>resources</b> on gear, skills, and the riding community</li>
                    </ul>
                    <p>Thanks for stopping by and we hope you find the Moto Bible useful!</p>
                    <br/>
                    <p>Ride free brothers and sisters,</p>
                    <p>Nicolas Layne</p>
                </div>

                <div>
                    <h3>Contact Us</h3>
                    <form name="contactUsForm" onSubmit="" action="" method="post">
                        <h4>Name:</h4>
                        <input type="text" placeholder="Name" name="name" required/>

                        <h4>Email:</h4>
                        <input type="email" placeholder="Email" name="_replyto" required/>

                        <h4>Message:</h4>
                        <textarea rows="4" cols="50" placeholder="Message" name="message" required/>

                        <input type="submit" value="Send"/>
                    </form>
                </div>
            </div>

        );
    }
};

export default HomeComponent;