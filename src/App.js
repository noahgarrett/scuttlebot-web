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
              <Route exact path="/scuttlebot-web">
                <HomePage />
              </Route>
              <Route exact path="/scuttlebot-web/about">
                <HomePage />
              </Route>
              <Route exact path="/scuttlebot-web/commands">
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
