import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Landing from './components/Landing'
import Login from './components/Login'
import TextEditor from './components/TextEditor'
// import Main from './components/Main'
// import Navbar from './components/Navbar'


import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/Login" component={ Login } />
          <Route exact path="/TextEditor" component={ TextEditor } />
          <Route exact path="/" component={ Landing } />
          <Route exact path="/Reddit" component={ TextEditor } />

        </div>
      </Router>
    )
  }
}

export default App;