import React from 'react';

class ResourcesComponent extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <h3>Community</h3>
                    <p>Reddit(s)</p>
                    <p>Youtubers - Motomadness/DirtbikeLunatic, DanTheFireMan, other good ones</p>
                    <p>Shops for gear (revzilla)</p>
                </div>

                <div>
                    <h3>How to get YOUR Class M license</h3>
                    <p>insert step by step here (cost, courses, classes, process, etc.)</p>

                    <h3>...or your INTERNATIONAL motorcycle license</h3>
                    <p>insert step by step here (cost, courses, classes, process, etc.)</p>
                </div>

                <div>
                    <h3>Laws : I live in _____. *(Dropdown selection menu)</h3>
                    <p>*(Helmet, lanesplitting, etc. for that state/country</p>
                </div>
            </div>
        );
    }
};

export default ResourcesComponent;