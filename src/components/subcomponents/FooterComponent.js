import React from 'react';

class FooterComponent extends React.Component {
    render() {
        return(
        <footer className="footer bg-dark text-light">
            <div className="container-fluid row p-6">
              <div className='col'>
                <div className="container">
                  <p>Sign up for our weekly newsletter:</p>
                  <input onSubmit="" type="email" className="form-control" name="newsletterEmail" placeholder="Email"/>
                  <input className="btn btn-primary mt-1" type="submit" value="Subscribe"/>
                </div>
                <div className="container">
                  <p>support@themotobible.com</p>
                  <p>Based in Houston, TX</p>
                </div>
              </div>
              <div className='col text-center'>
                <h5>About Us</h5>
                <p>The Motorcyclist's Bible, or Moto Bible, was made
  
                </p>
              </div>
              <div className='col text-right'>
                <p>Social icon links</p>
                <p>© 2019 themotobible.com All Rights Reserved</p>
              </div>
            </div>
        </footer>
        );
    }
}

export default FooterComponent;