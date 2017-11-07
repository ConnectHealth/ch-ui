// @flow

import React, { Component } from 'react';
import './App.css';
import PatientList from './patient';
import Page from 'components/Page';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => <Page>Home</Page>;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <Router>
          <div>
            <Link to="/">Home</Link> | <Link to="/patient">Patient</Link>
            <Route exact path="/" component={Home} />
            <Route exact path="/patient" component={PatientList} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
