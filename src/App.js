import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CatchallPage from "./page/CatchallPage";
import HomePage from "./page/HomePage";

function App() {
  return (
    <>
      <Router>
        <p>Header (local)</p>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            render={({ location }) => <CatchallPage key={location.key} />}
          />
        </Switch>
        <p>Footer (local)</p>
      </Router>
    </>
  );
}

export default App;
