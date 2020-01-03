import React from 'react';

class PrivacyComponent extends React.Component {
    render() {
        return(
            <div className="card card-body my-2">
                <h3>Privacy Policy</h3>
                <p>Not having a data breach is highly important to myself, the owner/creator/developer 
                    of <a href="/">www.themotobible.com</a>, so all data is managed through Google's Firebase. 
                    Emails, phone numbers, IP addresses, passwords, and user agents are the only data potentially collected, 
                    and all are managed per Google's <a href="https://firebase.google.com/support/privacy">Firebase terms and privacy policy</a>. 
                    Per The Motorcyclist's Bible's <a href="/terms">Terms of Use </a>, I only ever see and utilize emails and usernames (possibly see phone numbers).
                </p>
            </div>
        );
    }
};

export default PrivacyComponent;