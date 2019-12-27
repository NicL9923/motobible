import React from 'react';

class MotoQuiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: "",
            rightAnswer: "",
            wrongAnswer1: "",
            wrongAnswer2: "",
            wrongAnswer3: ""
        }
    }

    beginQuiz = e => {
        e.preventDefault();
        //asd
    }

    nextQuestion = e => {
        e.preventDefault();
        //asd
    }
    
    render() {
        return(
            <div className="card card-body my-2">
                <div className="container card-title">
                    <h2>The Moto Quiz</h2>
                    <p>15 questions that will test your knowledge of motorcycles and riding to the extreme</p>
                </div>

                <div className="mx-auto text-center mb-4">
                    <h4>When ready, click begin</h4>
                    <button className="btn btn-primary" onClick={this.beginQuiz}>Begin Quiz</button>
                </div>
            </div>
        );
    }
};

export default MotoQuiz;

/*
-15 questions for now
-state -> current question
-List of question# objects with question, rightAnswer, and wrongAnswer1/2/3 properties

-Initial page -> (TL -> The Moto Quiz, under have brief desc)
    - (Center of card -> "When ready, click begin")


-Randomize question order?
    -Method 1: Rand between 1 and 15, check if already been added and if so, reroll
        maybe keep track of an array of questions that havent been added yet to rand from

-Time limit?
-Scoring mechanism -> if selected value (onClickNextButton) === rightAnswer, increase score
-Results page at end, share with friends (email, twitter, etc.)?
-On click next, if answer is correct, make it green/success alert, if not, mark correct answer like before and make
selected answer red/danger alert


<form>
    <List of answers>
    <input type="submit" className="btn btn-primary">
</form>
*/