import "styles/global.scss";
import "./i18n";
import { store } from "store";
import { Provider } from "react-redux";

import Home from "pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App(): JSX.Element {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />

          </Routes>
        </BrowserRouter>

        
      </Provider>
    </div>
  );
}

export default App;
