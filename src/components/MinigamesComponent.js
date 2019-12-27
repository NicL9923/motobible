import React from 'react';
import MotoQuiz from './subcomponents/MotoQuiz';

class MinigamesComponent extends React.Component {
    render() {
        return(
            <div>
                <MotoQuiz/>
                <div>TODO: More minigames, same cartoony style as home page gif about identifying/avoiding hazards</div>
                <div>TODO: leaderboards (only for other games, not quiz)</div>
            </div>
        );
    }
};

export default MinigamesComponent;