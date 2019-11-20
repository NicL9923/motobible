import React from 'react';

class AdminComponent extends React.Component {
    render() {
        return(
            <div className="container my-4">
                <div className="card card-body my-4">
                    Manage blog
                </div>

                <div className="card card-body my-4">
                    Manage leaderboards
                </div>
            </div>
        );
    }
}

export default AdminComponent;