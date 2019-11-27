import React from 'react';
import MotoQuiz from './subcomponents/MotoQuiz';

class MinigamesComponent extends React.Component {
    render() {
        return(
            <div>
                <MotoQuiz/>
                <div>TODO: Some gnarly minigames about motorcycle safety from quizzes(?) to identifying hazards</div>
                <div>Maybe some leaderboards and user account integration??</div>
            </div>
        );
    }
};

export default MinigamesComponent;