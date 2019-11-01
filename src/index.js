import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "./dist/css/style.css";
import App from "./App";
import SetAuth from "./component/SetAuth/SetAuth";
import * as serviceWorker from "./serviceWorker";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
SetAuth("Bearer b59e1493bfd86a53f37489419ff17ab8f14d9672");
let Intstore = {
    dataCollection: [],
    demoData: []
};

function dataStore(state = Intstore, action) {
    switch (action.type) {
      case "newValue":
        return {
          ...state,
          dataCollection: action.payload
        };
      case "data":
        return {
          ...state,
          demoData: action.payload
        };
      default:
        return state;
    }
   }
   
   const store = createStore(dataStore);
   
   ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
   );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
