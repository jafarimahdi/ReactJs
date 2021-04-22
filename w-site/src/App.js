import React from "react";
import Navbar from "./component/Navbar";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Services from './pages/Services';
import SignUp from './pages/SignUp';
import Footer from './component/Footer'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product" exact component={Product} />
          <Route path="/services" exact component={Services} />
          <Route path="/sign-up" exact component={SignUp} />
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
