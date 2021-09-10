import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { TopPage } from "./pages/Top/TopPage";
import { LinkPage } from './pages/Link/LinkPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={TopPage} />
        <Route path="/link" exact component={LinkPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
