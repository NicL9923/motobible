import React from 'react';
import firebase from 'firebase';
import Calendar from 'react-calendar';
import { withRouter } from 'react-router-dom';
import '../stylesheets/BlogComponent.css';

//For unnstyled react calendar
//import Calendar from 'react-calendar/dist/entry.nostyle'


//TODO: Future Optimization: only pull DB posts (and scan for?) either from the current view month OR year
    //Possibly use hash table to store dates if extreme efficiency is needed

//TODO: CSS Styling for dates with posts

class BlogCalendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postDates: [],
            dbPullIsDone: false
        }
    }
    
    componentDidMount() {
        const db = firebase.firestore();

        db.collection("blog").get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                let createdDate = doc.data().created.toDate();
                createdDate = new Date(createdDate.getFullYear(), createdDate.getMonth(), createdDate.getDate(), 0, 0, 0);
                this.setState({ postDates: [...this.state.postDates, createdDate] });
            });
            this.setState({ dbPullIsDone: true });
        });
    }
    
    //Redirect to blog post url (even if post doesn't exist)
    dateClicked = date => {
        let link = "/blog/" + date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
        this.props.history.push(link);
    }

    //Any dates with a post will be filled with blue
    getTileClass = ({date, view}) => {
        if (view !== "month") {
            return;
        }

        for (let i = 0; i < this.state.postDates.length; i++) {
            if (date.getTime() === this.state.postDates[i].getTime()) {
                return "tileHasPost";
            }
        }
    }

    render() {
        return(
            <div className="card card-body my-3">
                <h3 className="mb-3">Blog Calendar</h3>
                {this.state.dbPullIsDone && <Calendar className="mx-auto"
                    onClickDay={this.dateClicked}
                    tileClassName={this.getTileClass}
                />}
            </div>
        );
    }

};

export default withRouter(BlogCalendar);