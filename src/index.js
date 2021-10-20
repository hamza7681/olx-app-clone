import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { FirebaseContext } from "./Store/Context";
import { app } from "./firebase_config";
import Context from "./Store/Context";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ app }}>
      <Context>
        <App />
      </Context>
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
