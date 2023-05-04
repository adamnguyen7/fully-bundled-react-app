import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import DynamicPage from "./DynamicPage";
import NoMatch from "./NoMatch";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={Home()} />
          <Route exact path="/dynamic" element={DynamicPage()} />
          <Route element={NoMatch()} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
