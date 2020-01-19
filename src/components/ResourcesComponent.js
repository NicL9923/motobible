import React from 'react';
import StateLaws from './subcomponents/StateLaws';

class ResourcesComponent extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="card">
                    <h2 className="card-header">Community</h2>
                    <div className="card-body">
                        <div className="mb-2">
                            <h4>Reddit</h4>
                            <a href="https://www.reddit.com/r/motorcycles/">r/motorcycles</a>
                        </div>
                        <div className="my-2">
                            <h4>Youtube Channels</h4>
                            <p><a href="https://youtube.com/user/TTheEveryThingg">DirtbikeLunatic</a></p>
                            <p><a href="https://youtube.com/user/dirtyhusky69">Motomadness</a></p>
                            <p><a href="https://youtube.com/user/Stubbs928">DanDanTheFireman</a></p>
                            <p><a href="https://youtube.com/user/TheGardenSnake">Jake TheGardenSnake</a></p>
                            <p><a href="https://youtube.com/user/Walterrificonline">Walterrific</a></p>
                            <p><a href="https://youtube.com/user/6Foot4Honda">6Foot4Honda</a></p>
                            <p><a href="https://youtube.com/user/snowcatxx87">Snowcat</a></p>
                            <p><a href="https://youtube.com/user/chaseontwowheels">Chase OnTwoWheels</a></p>
                        </div>
                        <div>
                            <h4>Gear Stores</h4>
                            <a href="https://revzilla.com">Revzilla</a>
                        </div>
                    </div>
                </div>

                <div className="card my-4">
                    <h2 className="card-header">How to Get YOUR Class M License</h2>
                    <div className="card-body mb-2">
                        <p>To start, there are a couple ways to go about getting
                            that coveted 'M' on your driver's license. These are the general steps
                            and lack region-specific requirements so check your local DPS (Department of
                            Public Safety) for yours to be sure. A general requirement seems to be that you must
                            have your standard class C drivers license beforehand, however.
                        </p>

                        <h4>The DPS Test Route</h4>
                        <p>Dependent upon your location, this method of getting your motorcycle license 
                            generally involves:
                        </p>
                        <ol>
                            <li>Getting your motorcycle learner's license</li>
                            <li>Practicing, gaining experience, and studying your state DPS' motorcycle operator manual</li>
                            <li>Taking a written and riding test at the DMV</li>
                        </ol>
                        <p>Unless you just have an intense stroke of independency, I highly advise taking a look at this next
                            option as it is likely to provide you with much more knowledge and numerous skills to keep you upright
                            on your bike.
                        </p>

                        <h4>The Motorcycle Course Route</h4>
                        <p>Now this was the route I personally took (shoutout to <a href="https://www.awesomecycles.com/">Awesome Cycles</a>,
                            great course with outstanding instructors and classmates). The reason I took this route is that, in my opinion, this is the
                            quickest, most direct, and best-for-learning way to get your motorcycle license hands down. It'll probably cost you somewhere
                            around ~$300, but think of it as an investment in your safety and to kickstart your riding career. All this route involves is:
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

                        <p>So as I said above, my personal recommendation for the sake of your time, knowledge, and skill would be the latter route, but so long as
                            the end result is you riding and staying safe out there so you can keep throwing out those two finger salutes, I'm a happy rider.
                        </p>

                        <h3 className="mt-2">...or for my INTERNATIONAL riders</h3>
                        <p>Unfortunately for this one man operation and the sake of space, I will only be compiling a list
                            of resources for you to reference for your specific country. The "main" ones are listed but if 
                            you feel your country should be included and it isn't currently, you can contact me on the home page.
                        </p>
                        <p><b>European Union:</b> <a href="https://europa.eu/youreurope/citizens/vehicles/driving-licence/get-driving-licence/index_en.htm">EU Driving License Info</a></p>
                        <p><b>Russia:</b> <a href="https://en.wikipedia.org/wiki/Driving_licence_in_Russia">Russia Driving License Info</a></p>
                        <p><b>Japan:</b> <a href="https://www.japanistry.com/getting-a-motorcycle-license-in-japan/">Japan Motorcycle/Driving License Info</a></p>
                        <p><b>Australia:</b> <a href="https://www.sa.gov.au/topics/driving-and-transport/licences/motorcycle-licences/applying-for-a-motorcycle-licence">Australia Motorcycle License Info</a></p>
                        <p><b>Mexico:</b> <a href="https://en.wikipedia.org/wiki/Driving_licence_in_Mexico">Mexico Driving License Info</a></p>
                        <p><b>India:</b> <a href="https://www.bankbazaar.com/driving-licence.html">India Motorcycle/Driving License Info</a></p>
                    </div>
                </div>

                <StateLaws/>
            </div>
        );
    }
};

export default ResourcesComponent;