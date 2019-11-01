import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Ourworks from "./component/Ourworks";
import Services from "./component/Services";
import Mynav from "./component/main-menu/Mynav";
import Footer from "./component/Footer";
import Contactus from "./component/Contactus";

class App extends Component {
  render() {
    return (
      <Router>
        <Mynav />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/ourworks" component={Ourworks} />
        <Route path="/services" component={Services} />
        <Route path="/contactus" component={Contactus} />
        <Footer />
      </Router>
    );
  }
}
export default App;
