import React from 'react';

class HomeComponent extends React.Component {
    render() {
        return(
            <div>
                <div>Home page gif TODO</div>
                
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

                <div>Newsletter signup and/or contact us form?</div>
            </div>

        );
    }
};

export default HomeComponent;