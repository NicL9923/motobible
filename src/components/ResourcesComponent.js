import React from 'react';

class ResourcesComponent extends React.Component {
    render() {
        return(
            <div className="container bg-light">
                <div className="container card card-body">
                    <div className="container my-2">
                        <h3>Community</h3>
                        <h5>Reddit</h5>
                        <a href="https://www.reddit.com/r/motorcycles/">r/motorcycles</a>
                    </div>
                    <div className="container my-2">
                        <h5>Youtube Channels</h5>
                        <p><a href="https://youtube.com/user/TTheEveryThingg">DirtbikeLunatic</a></p>
                        <p><a href="https://youtube.com/user/dirtyhusky69">Motomadness</a></p>
                        <p><a href="https://youtube.com/user/Stubbs928">DanDanTheFireman</a></p>
                        <p><a href="https://youtube.com/user/TheGardenSnake">Jake TheGardenSnake</a></p>
                        <p><a href="https://youtube.com/user/Walterrificonline">Walterrific</a></p>
                        <p><a href="https://youtube.com/user/6Foot4Honda">6Foot4Honda</a></p>
                        <p><a href="https://youtube.com/user/snowcatxx87">Snowcat</a></p>
                        <p><a href="https://youtube.com/user/chaseontwowheels">Chase OnTwoWheels</a></p>
                    </div>
                    <div className="container">
                        <h5>Gear Stores</h5>
                        <a href="https://revzilla.com">Revzilla</a>
                    </div>
                </div>

                <div className="container card card-body my-4">
                    <div className="container my-2">
                        <h3>How to get YOUR Class M license</h3>
                        <p>To start, there are a couple ways to go about getting
                            that coveted 'M' on your driver's license.
                        </p>

                        <h4>The DPS Test Route</h4>
                        <p>asd</p>

                        <h4>The Motorcycle Course Route</h4>
                        <p>asd</p>
                    </div>
                    <div className="container my-2">
                        <h3>...or your INTERNATIONAL motorcycle license</h3>
                        <p>insert step by step here (cost, courses, classes, process, etc.)</p>
                    </div>
                </div>

                <div className="container-fluid card card-body my-4">
                    <h3>Laws: I live in
                    <select name="places" onChange="">
                            <option hidden disabled selected value></option>
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
                        </select>
                        .</h3>
                    <p>*(Helmet, lanesplitting, etc. for that state/country)</p>
                </div>
            </div>
        );
    }
};

export default ResourcesComponent;