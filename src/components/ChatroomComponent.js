import React from 'react';
import WidgetBot from '@widgetbot/react-embed';
import { Helmet } from 'react-helmet';

class ChatroomComponent extends React.Component {
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

                <WidgetBot
                server="643902009644154900"
                channel="643902009644154903"
                shard="https://disweb.dashflo.net"
                
                height="70vh"
                className="container-fluid my-1"
                />

                <div className="card card-body my-1">
                    <h5>Having issues with the chatroom?</h5>
                    <p>Join us on our <a href="https://discord.gg/afe8ZMN">Discord</a></p>
                </div>
            </div>
        );
    }
};

export default ChatroomComponent;