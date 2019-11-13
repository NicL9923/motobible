import React from 'react';
import WidgetBot from '@widgetbot/react-embed';
import "bootstrap/dist/css/bootstrap.min.css";

class ChatroomComponent extends React.Component {
    render() {
        return(
            <div className="container-fluid">
                <WidgetBot
                server="643902009644154900"
                channel="643902009644154903"
                shard="https://disweb.dashflo.net"
                
                height="80vh"
                width="55vw"
                />
            </div>
        );
    }
};

export default ChatroomComponent;