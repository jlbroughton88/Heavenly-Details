import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Work from "./components/pages/Work";
import Packages from "./components/pages/Packages";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/packages" component={Packages} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        {/* <Footer/> */}
      </div>
    </Router>

  );
}

export default App;
