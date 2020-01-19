import React from 'react';

class TermsComponent extends React.Component {
    render() {
        return(
            <div className="card card-body my-2">
                <h2>Terms of Use</h2>
                <p>By using/browsing <a href="/">www.themotobible.com</a>, you agree to having
                some personal data shared/stored for user experience and data analytics purposes.
                These items may include <b>email, phone number, IP addresses, passwords, and user agents </b>
                (as per Google's <a href="https://firebase.google.com/support/privacy">Firebase terms and privacy policy</a>).
                Additionally, browser <b>cookies</b> may be stored and used.</p>

                <p>Purely coming from myself, the owner/creator/developer, <b>the only thing I need/see is emails/usernames</b> (possibly 
                    phone numbers) for authentication and account related features on The Motorcyclist's Bible. No malicious intent here,
                    and Google does all the heavy lifting with regards to data storage and security.
                </p>
            </div>
        );
    }
};

export default TermsComponent;