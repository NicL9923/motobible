import React from 'react';
import WidgetBot from '@widgetbot/react-embed';

class ChatroomComponent extends React.Component {
    render() {
        return(
            <div className="container-fluid my-2">
                <WidgetBot
                server="643902009644154900"
                channel="643902009644154903"
                shard="https://disweb.dashflo.net"
                
                height="70vh"
                className="container-fluid"
                />
            </div>
        );
    }
};

export default ChatroomComponent;