import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
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
          <div className="main-body">
            <Route exact path="/Login" component={ Login } />
            <Route exact path="/" component={ Landing } />
          </div>
          <div className="text-editor-body">
            <Route exact path="/TextEditor" component={ TextEditor } />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;