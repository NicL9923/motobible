import React from 'react';
import firebase from 'firebase';

class StateLaws extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            location: null,
            helmetReq: null,
            lanesplit: null
        }
    }
    
    //Figure out what laws we're universally pulling
    //so we can organize how to pull it and display it uniformly

    pullStateInfo = e => {
        this.setState({ location: e.target.value });

        const db = firebase.firestore();
        let docRef = db.collection("statelaws").doc(this.state.location);

        docRef.get().then(doc => {
            if (doc.exists) {
                let stuff = doc.data();
                this.setState({ helmetReq: stuff.helmetReq, lanesplit: stuff.lanesplit });
            }
            else {
                console.log("Document not found!");
            }
        });
    }
    
    render() {
        return(
        <div className="container-fluid card card-body my-4">
        <h3>Laws: I live in
        <select name="places" value={this.state.location} onChange={this.pullStateInfo}>
                <option hidden disabled selected value></option>
            <optgroup label="United States">
                <option value="alabama">Alabama</option>
                <option value="alaska">Alaska</option>
                <option value="arizona">Arizona</option>
                <option value="arkansas">Arkansas</option>
                <option value="california">California</option>
                <option value="colorado">Colorado</option>
                <option value="connecticut">Connecticut</option>
                <option value="delaware">Delaware</option>
                <option value="florida">Florida</option>
                <option value="georgia">Georgia</option>
                <option value="hawaii">Hawaii</option>
                <option value="idaho">Idaho</option>
                <option value="illinois">Illinois</option>
                <option value="indiana">Indiana</option>
                <option value="iowa">Iowa</option>
                <option value="kansas">Kansas</option>
                <option value="kentucky">Kentucky</option>
                <option value="louisiana">Louisiana</option>
                <option value="maine">Maine</option>
                <option value="maryland">Maryland</option>
                <option value="massachusetts">Massachusetts</option>
                <option value="michigan">Michigan</option>
                <option value="minnesota">Minnesota</option>
                <option value="mississippi">Mississippi</option>
                <option value="missouri">Missouri</option>
                <option value="montana">Montana</option>
                <option value="nebraska">Nebraska</option>
                <option value="nevada">Nevada</option>
                <option value="newhampshire">New Hampshire</option>
                <option value="newjersey">New Jersey</option>
                <option value="newmexico">New Mexico</option>
                <option value="newyork">New York</option>
                <option value="northcarolina">North Carolina</option>
                <option value="northdakota">North Dakota</option>
                <option value="ohio">Ohio</option>
                <option value="oklahoma">Oklahoma</option>
                <option value="oregon">Oregon</option>
                <option value="pennsylvania">Pennsylvania</option>
                <option value="rhodeisland">Rhode Island</option>
                <option value="southcarolina">South Carolina</option>
                <option value="southdakota">South Dakota</option>
                <option value="tennessee">Tennessee</option>
                <option value="texas">Texas</option>
                <option value="utah">Utah</option>
                <option value="vermont">Vermont</option>
                <option value="virginia">Virginia</option>
                <option value="washington">Washington</option>
                <option value="westvirginia">West Virginia</option>
                <option value="wisconsin">Wisconsin</option>
                <option value="wyoming">Wyoming</option>
            </optgroup>

            <optgroup label="International">
                <option value="uk">United Kingdom</option>
                <option value="germany">Germany</option>
            </optgroup>
            </select>
            .</h3>
        <p>*(Helmet, lanesplitting, etc. for that state/country)</p>
    </div>
    );
    }
};

export default StateLaws;