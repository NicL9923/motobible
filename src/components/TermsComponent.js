import React from 'react';

class TermsComponent extends React.Component {
    render() {
        return(
            <div className="card card-body my-2">
                <h3>Terms of Use</h3>
                <p>By using/browsing <a href="/">www.themotobible.com</a>, you agree to having
                some personal data shared/stored for user experience and data analytics purposes.
                These items may include email, phone number, IP addresses, passwords, and user agents 
                (as per Google's <a href="https://firebase.google.com/support/privacy">Firebase terms and privacy policy</a>).</p>
                <p>Purely coming from myself, the owner/creator/developer, the only thing I need/see is emails/usernames (possibly 
                    phone numbers) for authentication and account related features on The Motorcyclist's Bible. No malicious intent here,
                    and Google does all the heavy lifting with regards to data storage and security.
                </p>
            </div>
        );
    }
};

export default TermsComponent;