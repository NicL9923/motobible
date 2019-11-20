import React from 'react';
import ContactForm from './subcomponents/ContactForm';
import Clock from './subcomponents/Clock';
import cruiseGIF from '../resources/MotoCruiseGIF.gif';

class HomeComponent extends React.Component {
    render() {
        return(
            <div className="container bg-light">
                <div className="container-fluid text-center">
                    <img className="img-responsive mx-auto" src={cruiseGIF} alt="Cruising motorcycle"/>
                    {/*buttons to change moto (cruiser, sport, standard)
                    buttons to change environment (woodlands, desert, snow)*/}
                    <Clock/>
                </div>
                
                <div className="container card card-body my-4">
                    <h3>Motorcyclist's Bible</h3>
                    <p>Welcome to the Motorcyclist's Bible, or Moto Bible for short! Here we aim
                        to offer all riders valuable information, guidance, and ways to get connected
                        with the whole community!
                    </p>
                    <p>Here you'll find:</p>
                    <ul>
                        <li>A <b>blog</b> about the latest and greatest gear, riding tips, community, etc.</li>
                        <li>A <b>live chatroom</b> to connect with fellow riders</li>
                        <li>Some <b>minigames</b> to test and hone your riding skills</li>
                        <li>Great <b>resources</b> on gear, skills, and the riding community</li>
                    </ul>
                    <p>Thanks for stopping by and we hope you find the Moto Bible useful!</p>
                    <br/>
                    <p>Ride free brothers and sisters,</p>
                    <p>Nicolas Layne</p>
                </div>

                <ContactForm/>
            </div>

        );
    }
};

export default HomeComponent;