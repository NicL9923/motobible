import React from 'react';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            message: ""
        }
    }
    
    render() {
        return(
            <div className="container">
                    <h3>Contact Us</h3>
                    <form name="contactUsForm" onSubmit="" action="" method="post">
                        <div className="form-group">
                            <h4>Name:</h4>
                            <input className="validate" type="text" placeholder="Name" name="name" required/>
                        </div>

                        <div className="form-group">
                            <h4>Email:</h4>
                            <input className="validate" type="email" placeholder="Email" name="email" required/>
                        </div>

                        <div className="form-group">
                            <h4>Message:</h4>
                            <textarea className="materialize-textarea validate" rows="4" cols="50" placeholder="Message" name="message" required/>
                        </div>

                        <input className="btn btn-primary" type="submit" value="Send"/>
                    </form>
            </div>
        );
    }
}

export default ContactForm;