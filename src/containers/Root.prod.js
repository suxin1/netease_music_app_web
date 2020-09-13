import React from 'react';
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {layoutPicker} from "../config/router";

import '../App.css';

function App({store}) {
  return (
    <Router>
      <Provider store={store}>
        <Route path="*" component={layoutPicker}/>
      </Provider>
    </Router>
  );
}

export default App;
