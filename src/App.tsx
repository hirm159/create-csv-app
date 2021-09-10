import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { TopPage } from "./pages/Top/TopPage";
import { LinkPage } from './pages/Link/LinkPage';
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Top</Link>
            </li>
            <li>
              <Link to='/link'>Link</Link>
            </li>
          </ul>
        </nav>
      <Switch>
        <Route path="/" exact component={TopPage} />
        <Route path="/link" exact component={LinkPage} />
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
