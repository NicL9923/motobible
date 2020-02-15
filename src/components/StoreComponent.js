import React from 'react';
import { Helmet } from 'react-helmet';

class StoreComponent extends React.Component {
    render() {
        return(
        <div className="card my-3">
            <Helmet>
                    <title>Moto Bible | Store</title>
                    <meta
                        name="description"
                        content="The official merchandise store of The Motorcyclist's Bible"
                    />
                    <meta name="keywords" content="motorcycle, motorcycles, moto, motobible, rider, riding, cruising, cruiser, bike, bible, motorcyclist, 
                    motorcyclist's, minigames, chatroom, blog, resources, license, store, merchandise, merch, shop"/>
                </Helmet>

            <h3 className="card-header">Moto Merch</h3>
            <div className="card-body">
                <h5>*Under Construction*</h5>
                <p>MotoBible Merch and Gear</p>
            </div>
        </div>
        );
    }
};

export default StoreComponent;