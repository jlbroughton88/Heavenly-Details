import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import Home from "./components/pages/Home"
// import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        {/* <Footer/> */}
      </div>
    </Router>

  );
}

export default App;
