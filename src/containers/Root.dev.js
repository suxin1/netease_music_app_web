import React from 'react';
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {layoutPicker} from "../router";
import DevTools from "./DevTools";
import '../App.css';

function AppProd({store}) {
  return (
    <Router>
      <Provider store={store}>
        <Route path="*" component={layoutPicker}/>
        <DevTools/>
      </Provider>
    </Router>
  );
}

export default AppProd;
