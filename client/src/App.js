import React from 'react';
// import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Warehouse from "./Warehouse";
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import "../src/pages/asset/style.css"


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/warehouse">
            {document.cookie.match(/^.*loggedIn=true.*$/)?
            <Warehouse />:
            <h1>Please Signin first</h1>}
          </Route>

          <Route exact path={["/", "/signin"]}>
            <Signin />
          </Route>

          <Route exact path="/signup">
            <Signup />
          </Route>

          <Route>
            <Signin />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
