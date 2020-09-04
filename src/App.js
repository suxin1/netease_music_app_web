import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./normalize.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {layoutPicker} from "./app/router";

function App() {
  return (
    <Router>
      <Route path="*" component={layoutPicker}/>
    </Router>
  );
}

export default App;
