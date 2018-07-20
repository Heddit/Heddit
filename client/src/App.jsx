import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Landing from './components/Landing'
import Login from './components/Login'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/Login" component={ Login } />
          <Route path="/Landing" component={ Landing } />
        </Router>
      </div>
    );
  }
}

export default App;