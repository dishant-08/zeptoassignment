import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import LiveChat from "./LiveChat.jsx";
import { Provider } from "react-redux";
import store from "./utils/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <LiveChat /> */}
      <App />
    </Provider>
  </React.StrictMode>
);
