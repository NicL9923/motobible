import React from 'react';
import firebase from 'firebase';

class RandomQuote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomFact: "This is a random fact!",
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
            else {
                console.log("Document not found!");
            }
        });
    }
    
    render() {
        return(
        <div className="container card card-body my-4">
            <blockquote className="blockquote text-center">
                <p class="mb-0">{this.state.randomFact}</p>
                <footer class="blockquote-footer">Courtesy of <cite title="Source Title">{this.state.source}</cite></footer>
            </blockquote>
        </div>
        );
    }
}

export default RandomQuote;