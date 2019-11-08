import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <Router>
      <div className="container">
        
      </div>
      <Route path="/" exact component={TBDcomponent}/>
    </Router>
  );
}

export default App;
