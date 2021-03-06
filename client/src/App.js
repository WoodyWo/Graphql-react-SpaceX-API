import React, { Component } from 'react';
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Launches from './components/Launches'
import Launch from './components/Launch'
import './App.css';
import logo from './fe20239b2a8312eab6f412d8633897d6.png'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

class App extends Component {
  render() {
    return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img src={logo} alt="SpaceX" style={{width:100, display:'block', margin: "auto"}}/>      
        <Route exact path="/" component={Launches} />
        <Route exact path="/launch/:flight_number" component={Launch} />
        </div>
      </Router>
    </ApolloProvider>  
    );
  }
}

export default App;
