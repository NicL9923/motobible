import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

class RandomQuote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomFact: "If you're seeing this, something broke!",
            source: "yours truly"
        }
    }

    componentDidMount() {
        const db = firebase.firestore();

        let randNumIndex = Math.floor(Math.random() * 50).toString();
        let docRef = db.collection("motofacts").doc(randNumIndex);

        //Pull a random fact/statistic and its source from the "motofacts" collection
        docRef.get().then(doc => {
            if (doc.exists) {
                let stuff = doc.data();
                this.setState({ randomFact: stuff.fact, source: stuff.source });
            }
        });
    }
    
    render() {
        return(
            <div className="motofactBox">
                <h3>Moto Fact of the Day</h3>
                <blockquote className="motofactQuote">
                    <p>{this.state.randomFact}</p>
                    <p>Courtesy of <cite title="Source Title">{this.state.source}</cite></p>
                </blockquote>
            </div>
        );
    }
}

export default RandomQuote;