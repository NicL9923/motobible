import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Facebook, Twitter, Reddit, Email } from 'react-sharingbuttons';
import 'react-sharingbuttons/dist/main.css';

class MotoQuiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: "",
            rightAnswer: "",
            answers: [],
            selectedAnswer: "",
            quizNotStarted: true,
            onFinalQuestion: false,
            showScorePage: false,
            waitingToCheckAnswer: false,
            questionsAlreadyDone: [],
            questionCounter: 0,
            score: 0
        }
    }
    
    beginQuiz = e => {
        e.preventDefault();
        this.setState({ quizNotStarted: false });
        this.getNextQuestion();
    }

    checkAnswer = e => {
        e.preventDefault();

        if (!this.state.selectedAnswer) {
            return;
        }

        //"Show Score" button on last question
        //*Change waitCheck state due to render conditionals for buttons
        if (this.state.questionCounter === 15) {
            this.setState({ onFinalQuestion: true });
        }

        this.setState({ waitingToCheckAnswer: false });

        //Perform the check and highlight right/wrong answer
        if (this.state.selectedAnswer === this.state.rightAnswer) {
            this.setState({ score: this.state.score + 1, rightAnswerClass: "" });
            for (let i = 1; i <= 4; i++) {
                if (document.getElementById(`answer${i}`).innerHTML === this.state.rightAnswer) {
                    document.getElementById(`answer${i}`).className = "list-group-item list-group-item-action list-group-item-success";
                }
            }
        }
        else {
            for (let i = 1; i <= 4; i++) {
                if (document.getElementById(`answer${i}`).innerHTML === this.state.rightAnswer) {
                    document.getElementById(`answer${i}`).className = "list-group-item list-group-item-action list-group-item-success";
                }
                if (document.getElementById(`answer${i}`).innerHTML === this.state.selectedAnswer) {
                    document.getElementById(`answer${i}`).className = "list-group-item list-group-item-action list-group-item-danger";
                }
            }
        }
    }

    //Random question from 0 to 29 pulled from DB
    getNextQuestion = e => {
        if (e) { e.preventDefault(); }
        const db = firebase.firestore();
        let goodForNextQ;
        let randNum = Math.floor(Math.random() * 30);

        //Reset answer check visuals from last question
        //Button rendering
        //Update question counter
        //Clear prior questions
        this.setState({ questionCounter: this.state.questionCounter + 1,
            rightAnswer: "",
            answers: [],
            waitingToCheckAnswer: true });

        //Reset styling from last answer check
        if (this.state.questionCounter > 1) {
            for (let i = 1; i <= 4; i++) {
                document.getElementById(`answer${i}`).className = "list-group-item list-group-item-action";
            }
        }

        //If we've already encountered Question[randNum], reroll until we find one we haven't
        do {
            goodForNextQ = true;

            for (let i = 0; i < this.state.questionsAlreadyDone.length; i++) {
                if (randNum === this.state.questionsAlreadyDone[i]) {
                    goodForNextQ = false;
                    randNum = Math.floor(Math.random() * 30);
                    break;
                }
            }

        } while (!goodForNextQ);

        //Once we have the next question num for sure, add it to the qAD state array
        this.setState({ questionsAlreadyDone: [...this.state.questionsAlreadyDone, randNum] });

        //Pull from DB and store into state
        db.collection("questions").doc("Question" + randNum).get().then(doc => {
            let questionData = doc.data();
            this.setState({ question: questionData.question, rightAnswer: questionData.rightAnswer,
            answers: [questionData.rightAnswer, questionData.wrongAnswer1, questionData.wrongAnswer2, questionData.wrongAnswer3] });

            this.randomizeAnswerOrder();
        }).catch(error => {
            //console.log("Error fetching question data: ", error);
        });
    }

    setShowScorePage = e => {
        e.preventDefault();
        this.setState({ showScorePage: true });
    }

    selectAnswer = e => {
        for (let i = 1; i <= 4; i++) {
            document.getElementById(`answer${i}`).className = "list-group-item list-group-item-action";
        }

        this.setState({ selectedAnswer: e.target.innerHTML });
        e.target.className = "list-group-item list-group-item-action active";
    }

    randomizeAnswerOrder = () => {
        let newArray = this.state.answers;

        //Sometimes I leave these little notes to remind myself of absolute brainfarts
        //so here goes: Math.random() is a function, not a property
        //Time spent figuring that out? Way too long :(
        for (let i = 0; i < newArray.length; i++) {
            const randIndex = Math.floor(Math.random() * 4);
            const temp = newArray[randIndex];
            newArray[randIndex] = newArray[i];
            newArray[i] = temp;
        }

        this.setState({ answers: newArray });
    }
    
    render() {
        return(
            <div className="card card-body my-2">
                {this.state.quizNotStarted ? (<>
                    <div className="container card-title">
                        <h2>The Moto Quiz</h2>
                        <p className="text-muted">15 questions that will test your knowledge of motorcycles and riding to the extreme</p>
                    </div>

                    <div className="mx-auto text-center mb-4">
                        <h4>When ready, click begin</h4>
                        <button className="btn btn-primary" onClick={this.beginQuiz}>Begin Quiz</button>
                    </div>
                </>) : 
                (!this.state.showScorePage ? (<div>
                    <h4>Question {this.state.questionCounter}:</h4>
                    <h5>{this.state.question}</h5>
                    <div>
                        <div className="list-group my-2">
                            {this.state.answers.map((answer, index) => { return (
                                <button key={index} id={`answer${index + 1}`} className="list-group-item list-group-item-action" onClick={this.selectAnswer}>{answer}</button>
                            );
                            })}
                        </div>
                        {this.state.waitingToCheckAnswer ? (<button className="btn btn-primary" onClick={this.checkAnswer}>Check Answer</button>) :
                        (!this.state.onFinalQuestion ? (<button className="btn btn-primary" onClick={this.getNextQuestion}>Next Question</button>)
                        : (<button className="btn btn-primary" onClick={this.setShowScorePage}>Show Score</button>))}
                    </div>
                </div>) :
                (<div>
                    <h4>Your Score: {Math.round(this.state.score / 15 * 100)}%</h4>
                    <h5>Thanks for taking the Moto Quiz!</h5>
                    <p>Don't forget to share your score!</p>
                    
                    <Twitter url="https://themotobible.com" shareText={`I just scored a ${Math.round(this.state.score / 15 * 100)} on the Moto Quiz!`}/>
                    <Facebook url="https://www.themotobible.com"/>
                    <Reddit url="https://www.themotobible.com"/>
                    <Email url="Try it out yourself at https://themotobible.com!" subject={`I scored ${Math.round(this.state.score / 15 * 100)} on the Moto Quiz!`}/>
                </div>))}
            </div>
        );
    }
};

export default MotoQuiz;