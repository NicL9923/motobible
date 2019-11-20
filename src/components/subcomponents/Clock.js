import React from 'react';

class Clock extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return(
            <div className="nav-item text-center">
                <h4><b>{this.state.date.toLocaleTimeString()}</b></h4>
            </div>
        );
    }
};

export default Clock;