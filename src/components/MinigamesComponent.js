import React from 'react';
import MotoQuiz from './subcomponents/MotoQuiz';

class MinigamesComponent extends React.Component {
    render() {
        return(
            <div>
                <MotoQuiz/>
                <div className="card card-body my-2">
                    <h3>Coming Soon:</h3>
                    <p>-More minigames</p>
                    <p>-Leaderboards (for games other than quiz; anonymous or with your username/email)</p>
                </div>
            </div>
        );
    }
};

export default MinigamesComponent;