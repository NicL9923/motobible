import React from 'react';
import MotoQuiz from './subcomponents/MotoQuiz';
import { Helmet } from 'react-helmet';

class MinigamesComponent extends React.Component {
    render() {
        return(
            <div>
                <Helmet>
                    <title>Moto Bible | Minigames</title>
                    <meta
                        name="description"
                        content="Minigames for The Motorcyclist's Bible"
                    />
                    <meta name="keywords" content="motorcycle, motorcycles, moto, motobible, rider, riding, cruising, cruiser, bike, bible, motorcyclist, 
                    motorcyclist's, minigames, chatroom, blog, resources, license"/>
                </Helmet>

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