import React from 'react';

class DonateComponent extends React.Component {
    render() {
        return(
        <div className="container card card-body my-3">
            <div>
                <h3>A Message from the Owner</h3>
                <p>
                    It goes without saying that you are under absolutely no obligation
                    to donate to The Motorcyclist's Bible. With that being said, if you
                    enjoy our content and what we do here, every little bit is appreciated
                    and helps keep us up and running, and producing new content.
                </p>
                <p>Listed below are ways you can help out, ranging from a straightforward donation to affiliate links that may catch your interest:</p>
            </div>

            <div className="container">
                <h4>Donate</h4>
                <form>Insert donation form here</form>
            </div>

            <div className="container">
                <h4>Patreon</h4>
                <a href="https://www.patreon.com/themotobible">Support Us on Patreon</a>
                <p>Description of Patreon and ours in particular</p>
            </div>

            <div className="container">
                <h4>Affiliate Links</h4>
                <p><a href="https://mbsy.co/DGCz2">M1 Finance: </a>My personal investment/stock broker. Outstanding for anyone from beginners to experts, 
                I find this broker to be the most user-friendly and accessible.</p>
                {/*<p><a href="">Revzilla: </a>This is my preferred shop for anything motorcycles. It's got great items, deals, and immensely useful videos 
                on each product. Highly recommended.</p>*/}

            </div>
        </div>
        );
    }
};

export default DonateComponent;