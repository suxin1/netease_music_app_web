import React from 'react';
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {layoutPicker} from "../config/router";
import {PersistGate} from "redux-persist/integration/react";
import '../App.css';

function App({store, persistor}) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Route path="*" component={layoutPicker}/>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
