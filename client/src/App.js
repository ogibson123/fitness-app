import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.js";
import History from "./components/History.js";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import ProfilePage from "./pages/ProfilePage.js";
import Footer from "./components/Footer.js";
import "./App.css";


function App() {
  return (
    <Router className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={Home} />
        <Route path="/history" component={History} />
        <Route path="/footer" component={Footer} />
        <Route path="/profile/:user" component={ProfilePage} />
      </Switch>
    </Router>
  );
}

export default App;
