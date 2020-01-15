import React from 'react';
import ApolloClient from 'apollo-boost';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {ApolloProvider} from 'react-apollo';
import './App.css';
import logo from './spacex.png';
import Launches from './components/launches';
import Launch from './Launch';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

function App():JSX.Element{
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img src={logo} alt="SpaceX" style={{width: 300, display: "block", margin:"auto"}} />
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flight_number" component={Launch} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
