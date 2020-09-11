import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import "./assets/stylesheets/normalize.css";

import AppProd from './containers/Root';
import * as serviceWorker from './serviceWorker';

import configureStore from "./store";

import "core-js";  // polyfills 导入所有新特性。
import linkState from 'linkstate'; // 事件处理与状态绑定。 linkState(statePath, [valuePath]);
window.linkState = linkState;  // 全局使用

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <AppProd store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
