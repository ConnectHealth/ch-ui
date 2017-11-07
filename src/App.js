// @flow
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import Page from 'components/Page';
import PatientList from 'patient/PatientList';
import config from 'config';
import makeApolloClient from 'apollo';

import 'App.css';

const Home = () => <Page>Home</Page>;

const client = makeApolloClient(config.scapholdUrl);

const App = () => (
  <ApolloProvider client={client}>
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
  </ApolloProvider>
);

export default App;
