import React from "react";
import ReactDOM from "react-dom";
// redux imports
import { store } from "./app/store";
import { Provider } from "react-redux";
// react-router-dom imports
import { BrowserRouter, Route, Routes } from "react-router-dom";
// App imports
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
