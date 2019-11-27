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
                            that coveted 'M' on your driver's license. These are the general steps
                            and lack region-specific requirements so check your local DPS (Department of
                            Public Safety) for yours to be sure.
                        </p>

                        <h4>The DPS Test Route</h4>
                        <p>Through this method of getting your motorcycle license, 
                            the general flow of things involves:
                        </p>
                        <ol>
                            <li>Getting your motorcycle PERMIT</li>
                            <li>Practicing, gaining experience, and taking the online course</li>
                            <li>Taking a written and riding test at the DMV</li>
                        </ol>
                        <p>asd</p>

                        <h4>The Motorcycle Course Route</h4>
                        <p>Now this was the route I personally took (shoutout to <a href="https://www.awesomecycles.com/">Awesome Cycles</a>,
                            great course with outstanding instructors and classmates). The reason I took this route is that, in my opinion, this is the
                            quickest, most direct, and best-for-learning way to get your motorcycle license hands down. All this route involves is:
                        </p>
                        <ol>
                            <li>Taking a <b>DPS-approved</b> Motorcycle Safety Course, the most common (and thorough) of which I think you'll find
                                is the Motorcycle Safety Foundation's (MSF) Basic Rider Course. There are a few classroom hours, but about 75% or more
                                of the course is outside on a bike.
                            </li>
                            <li>Passing the written test (nobody, and I mean nobody, fails this) and the riding test (pay attention in class and you'll be
                                perfectly fine; seriously, have fun with it as it's yet another opportunity to ride until you get your license soon after) 
                                at the end of the two or three day long class.
                            </li>
                            <li>Get your certificate of completion, take that sucker to the DMV, take a vision test, and walk out with your new Class M license.</li>
                        </ol>
                        <p></p>
                    </div>
                    <br/>
                        <p>So as I said above, my personal recommendation for the sake of your time, knowledge, and skill would be the latter route, but so long as
                            the end result is you riding and staying safe out there so you can keep throwing out those two finger salutes, I'm a happy rider.
                        </p>
                    <br/>
                    <br/>
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