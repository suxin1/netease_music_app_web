import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route} from "react-router-dom";
import {layoutPicker} from "./router";

function App() {
  return (
    <Router>
      <Route path="*" component={layoutPicker}/>
    </Router>
  );
}

export default App;
