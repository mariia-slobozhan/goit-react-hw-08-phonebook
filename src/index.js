import React from "react";
import ReactDOM from "react-dom";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
