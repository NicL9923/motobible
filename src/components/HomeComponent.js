import React from 'react';
import ContactForm from './subcomponents/ContactForm';
import Clock from './subcomponents/Clock';
import RandomQuote from './subcomponents/RandomQuote';
import { Helmet } from 'react-helmet';

import cruiseGIF from '../resources/MotoCruiseGIF.gif';
import authorPic from '../resources/AuthorsPic.png';


class HomeComponent extends React.Component {
    render() {
        return(
            <div>
                <Helmet>
                    <title>The Motorcyclist's Bible</title>
                    <meta
                        name="description"
                        content="Homepage of The Motorcyclist's Bible"
                    />
                    <meta name="keywords" content="motorcycle, motorcycles, moto, motobible, rider, riding, cruising, cruiser, bike, bible, motorcyclist, 
                    motorcyclist's, minigames, chatroom, blog, resources, license"/>
                </Helmet>
                <header>
                    <img src={cruiseGIF} alt="Cruising motorcycle"/>
                    {/*buttons to change moto (cruiser, sport, standard)
                    buttons to change environment (woodlands, desert, snow)*/}
                    <Clock/>
                </header>
                
                <div className="welcomeBox">
                    <h2>The Motorcyclist's Bible</h2>
                    <div>
                        <p>
                            Welcome to the Motorcyclist's Bible, or Moto Bible for short! If you 
                            love motorcycles, you came to the right place. Here we aim
                            to offer all riders valuable information, guidance, and ways to get connected
                            with the whole community!
                        </p>
                        
                        <div className="welcomeMid">
                            <div>
                                <p>Here you'll find:</p>
                                <ul>
                                    <li>A <b>blog</b> about the latest and greatest gear, riding tips, community, etc.</li>
                                    <li>A <b>live chatroom</b> to connect with fellow riders</li>
                                    <li>Some <b>minigames</b> to get you in the riding spirit</li>
                                    <li>Great <b>resources</b> on gear, skills, and the riding community</li>
                                </ul>
                                <p>Thanks for stopping by! We hope you find the Moto Bible useful!</p>
                            </div>

                            <img className="authorPic" src={authorPic} alt="Author" height="40%" width="40%"/>
                        </div>
                        
                        <div>
                            <p>Ride free brothers and sisters,</p>
                            <p>Nicolas Layne</p>
                        </div>
                    </div>
                </div>
                
                <RandomQuote/>

                <ContactForm/>
            </div>
        );
    }
};

export default HomeComponent;