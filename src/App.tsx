import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import TopPage  from "./pages/Top/TopPage";
import LinkPage from  "./pages/Link/LinkPage";
import { Navbar, Container, Nav } from 'react-bootstrap';

class App extends Component {
  render () {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="/">Create-Csv-App</Navbar.Brand>
              <Navbar.Text>version 1.0.1</Navbar.Text>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Top</Nav.Link>
                    <Nav.Link href="link">Link</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Switch>
            <Route path="/" exact component={TopPage} />
            <Route path="/link" exact component={LinkPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
