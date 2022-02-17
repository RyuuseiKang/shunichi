import React from "react";
import "./App.css";

import {HashRouter} from "react-router-dom";
import Router from "./Router";

const App: React.FC = () => {
  return (
    <HashRouter>
      <Router />
    </HashRouter>
  );
};

export default App;
