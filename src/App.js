import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

//Components
import Header from "./components/Header";

// Pages
import HomePage from "./pages/HomePage";
import CommandsPage from "./pages/CommandsPage";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__page">
        <React.Fragment>
          <Router>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/about">
                <HomePage />
              </Route>
              <Route exact path="/commands">
                <CommandsPage />
              </Route>
            </Switch>
          </Router>
        </React.Fragment>
      </div>
    </div>
  );
}

export default App;
