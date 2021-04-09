import React from "react";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/pages/Home";
import Product from "./component/pages/Product";
import Services from "./component/pages/Services";
import SignUp from "./component/pages/SignUp";

function App() {
  return (
      <>
        <Router>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/Service" exact component={Services} />
              <Route path="/product" exact component={Product} />
              <Route path="/signUp" exact component={SignUp} />
            </Switch>
        </Router>
      </>
  );
}

export default App;
