import React from 'react';

class PageNotFound extends React.Component {
    render() {
        return(
            <div className="card card-body text-center my-2">
                <h3 className="text-muted">404 - Page Not Found</h3>
                <h3>Whoops, looks like you've gotten a little off course!</h3>
                <h5><a href="/">Ride Home?</a></h5>
            </div>
        );
    }
};

export default PageNotFound;