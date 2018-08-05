import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Landing from './components/Landing'
import Login from './components/Login'
import LoginPage from './components/LoginPage'
import SignUp from './components/SignUp'
import TextEditor from './components/TextEditor'
import Terminal from './components/Terminal'
import Sublime from './components/Sublime'
import Dashboard from './components/Dashboard'
import './App.css'

class App extends Component {


  render() {
    return (
          <Router>
            <div>
              <div className="main-body">
                <Route exact path="/" component={ Landing } />
                <Route exact path="/Login" component={ Login } />
                <Route exact path="/LoginPage" component={ LoginPage } />
                <Route exact path="/SignUp" component={ SignUp } /> 
                <Route exact path="/Dashboard" component={ Dashboard } /> 
                <Route exact path="/Terminal" component={ Terminal } />
                <Route exact path="/TextEditor" component={ TextEditor } />
                <Route exact path="/Sublime" component={ Sublime } />
              </div>
              <div className="text-editor-body">
                <Route exact path="/TextEditor" component={ TextEditor } />
              </div>
            </div>
        </Router>
    );
  }
}

export default App;
