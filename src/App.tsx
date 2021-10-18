import React, { Component } from 'react';
import './App.css';
import { Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import TopPage  from "./pages/Top/TopPage";
import LinkPage from  "./pages/Link/LinkPage";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { createBrowserHistory } from 'history';

export const appHistory = createBrowserHistory({ basename: "/create-csv-app" });

class App extends Component {
  render () {
    return (
      <div>
        <Router history={appHistory}>
            <Switch>
              <Route path="/" exact>
                <Redirect to="/top" />
              </Route>
              <Route path="/top" exact component={TopPage} />
              <Route path="/link" exact component={LinkPage} />
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
