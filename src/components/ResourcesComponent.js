import React from 'react';

class ResourcesComponent extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <h3>Community</h3>
                    <h5>Reddit</h5>
                    <p>r/motorcycles</p>
                    <a>https://www.reddit.com/r/motorcycles/</a>

                    <h5>Youtube Channels</h5>
                    <p>DirtbikeLunatic</p>
                    <a>youtube.com/user/TTheEveryThingg</a>
                    <p>Motomadness</p>
                    <a>youtube.com/user/dirtyhusky69</a>
                    <p>DanDanTheFireman</p>
                    <a>youtube.com/user/Stubbs928</a>
                    <p>Jake TheGardenSnake</p>
                    <a>youtube.com/user/TheGardenSnake</a>
                    <p>Walterrific</p>
                    <a>youtube.com/user/Walterrificonline</a>
                    <p>6Foot4Honda</p>
                    <a>youtube.com/user/6Foot4Honda</a>
                    <p>Snowcat</p>
                    <a>youtube.com/user/snowcatxx87</a>
                    <p>Chase OnTwoWheels</p>
                    <a>youtube.com/user/chaseontwowheels</a>


                    <h5>Gear Stores</h5>
                    <p>Revzilla</p>
                    <a>www.revzilla.com</a>
                </div>

                <div>
                    <h3>How to get YOUR Class M license</h3>
                    <p>insert step by step here (cost, courses, classes, process, etc.)</p>

                    <h3>...or your INTERNATIONAL motorcycle license</h3>
                    <p>insert step by step here (cost, courses, classes, process, etc.)</p>
                </div>

                <div>
                    <h3>Laws: I live in <select name="places" onChange="">
                        <optgroup label="United States">
                            <option value="texas">Alabama</option>
                            <option value="virginia">Alaska</option>
                            <option value="virginia">Arizona</option>
                            <option value="virginia">Arkansas</option>
                            <option value="virginia">California</option>
                            <option value="virginia">Colorado</option>
                            <option value="virginia">Connecticut</option>
                            <option value="virginia">Delaware</option>
                            <option value="virginia">Florida</option>
                            <option value="virginia">Georgia</option>
                            <option value="virginia">Hawaii</option>
                            <option value="virginia">Idaho</option>
                            <option value="virginia">Illinois</option>
                            <option value="virginia">Indiana</option>
                            <option value="virginia">Iowa</option>
                            <option value="virginia">Kansas</option>
                            <option value="virginia">Kentucky</option>
                            <option value="virginia">Louisiana</option>
                            <option value="virginia">Maine</option>
                            <option value="virginia">Maryland</option>
                            <option value="virginia">Massachusetts</option>
                            <option value="virginia">Michigan</option>
                            <option value="virginia">Minnesota</option>
                            <option value="virginia">Mississippi</option>
                            <option value="virginia">Missouri</option>
                            <option value="virginia">Montana</option>
                            <option value="virginia">Nebraska</option>
                            <option value="virginia">Nevada</option>
                            <option value="virginia">New Hampshire</option>
                            <option value="virginia">New Jersey</option>
                            <option value="virginia">New Mexico</option>
                            <option value="virginia">New York</option>
                            <option value="virginia">North Carolina</option>
                            <option value="virginia">North Dakota</option>
                            <option value="virginia">Ohio</option>
                            <option value="virginia">Oklahoma</option>
                            <option value="oregon">Oregon</option>
                            <option value="pennsylvania">Pennsylvania</option>
                            <option value="rhodeisland">Rhode Island</option>
                            <option value="southcarolina">South Carolina</option>
                            <option value="southdakota">South Dakota</option>
                            <option value="tennessee">Tennessee</option>
                            <option value="texas">Texas</option>
                            <option value="utah">Utah</option>
                            <option value="vermont">Vermont</option>
                            <option value="virginia">Virginia</option>
                            <option value="washington">Washington</option>
                            <option value="westvirginia">West Virginia</option>
                            <option value="wisconsin">Wisconsin</option>
                            <option value="wyoming">Wyoming</option>
                        </optgroup>

                        <optgroup label="International">
                            <option value="uk">United Kingdom</option>
                            <option value="germany">Germany</option>
                        </optgroup>
                        </select>.</h3>
                    <p>*(Helmet, lanesplitting, etc. for that state/country)</p>
                </div>
            </div>
        );
    }
};

export default ResourcesComponent;