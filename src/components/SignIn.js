import React, { Component } from 'react'
import Dashboard from './Dashboard';
import {databaseBase,firebase} from '../base'
import {Grid} from 'semantic-ui-react'
import Logo from '../images/heddit.png'
import './Login.css'

class SignIn extends Component {

    constructor(){
        super()
        this.state = {
          authenticated: false,
          items: [],
          sites: []
        }
      }
    
      handleCreateUserEmailChange = (event) => {
        this.setState({createUserEmail: event.target.value});
      }
    
      handleCreateUserPasswordChange = (event) => {
        this.setState({createUserPassword: event.target.value});
      }
    
      handleLoginEmailChange = (event) => {
        this.setState({signInEmail: event.target.value});
      }
    
      handleLoginPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value});
      }
    
      createUser = (event) => {
        event.preventDefault()
        const promise = firebase.auth().createUserWithEmailAndPassword(this.state.createUserEmail, this.state.createUserPassword)
        // promise.catch(e => console.log(e.message))
        promise.catch(e => {
          console.log(e.message)
          this.setState({
            error: e.message
          })
          setTimeout(()=>{
            this.setState({
              error: ""
            })
          }, 3000)
        })
      }
    
      signIn = (event) => {
        event.preventDefault()
        const promise = firebase.auth().signInWithEmailAndPassword(this.state.signInEmail, this.state.signInPassword)
        // promise.catch(e => console.log(e.message))
        promise.catch(e => {
          console.log(e.message)
          this.setState({
            error: e.message
          })
          setTimeout(()=>{
            this.setState({
              error: ""
            })
          }, 3000)
        })
      }
    
      signOut = () => {
        firebase.auth().signOut()
      }
    
      componentDidMount(){
        console.log('hello');
        firebase.auth().onAuthStateChanged(firebaseUser => {
          if (firebaseUser){
            console.log(firebaseUser);
            this.setState({
              authenticated: true,
              uid: firebaseUser.uid
            })
    
            databaseBase.syncState(`/to-do-list`, {
              context: this,
              state: 'items',
              asArray: true,
              keepKeys: true,
              queries: {
                orderByChild: 'uid',
                equalTo: this.state.uid
              }
            });
    
    
            //syncs scraped sites with user that is logged inspect
    
            databaseBase.syncState(`/scaped-sites`, {
              context: this,
              state: 'sites',
              asArray: true,
              keepKeys: true,
              queries: {
                orderByChild: 'uid',
                equalTo: this.state.uid
              }
            });
    
    
          } else {
            console.log('not logged in');
            this.setState({authenticated: false})
          }
        })
      }




    render() {
        return (
            <div className='login-body'>
            <div className="login-form">
            <a href='/'>
                    <img className='eye-logo' src={Logo} alt='Heddit Logo'/>
                </a>
              {this.state.authenticated === false &&
                <div>
                  <form id="create-user-form" onSubmit={this.createUser}>
                  <div>
                    <input value={this.state.value} onChange={this.handleCreateUserEmailChange} type="email" placeholder="Email" required></input>
                  </div>  
                  <div>
                    <input value={this.state.value} onChange={this.handleCreateUserPasswordChange} type="password" placeholder="Password" required></input>
                  </div>  
                  <div>
                    <button id="sign-up-button" className='ui button'  type="submit">Sign Up</button>
                  </div>
                  </form>

                  <form id="sign-in-form" onSubmit={this.signIn}>
                    <div>
                      <input value={this.state.value} onChange={this.handleLoginEmailChange} type="email" placeholder="Email" required></input>
                    </div>
                    <div>
                    <input value={this.state.value} onChange={this.handleLoginPasswordChange} type="password" placeholder="Password" required></input>
                    </div>
                    <div>
                    <button id="signIn-button" className='ui button' type="submit">Log In</button>
                    </div>
                  </form>
                  <p id="errors">{this.state.error}</p>
                </div>
              }
              </div>

{/* Errors  */}
{
 (this.state.authenticated === false)
 ? <div></div>
 : <div></div>
}

{this.state.authenticated === true &&
  <div className=''>
    <Dashboard
      uid={this.state.uid}
      items={this.state.items}
      sites={this.state.sites}
    />
  
  {/* Log Out Button */}
    <div className='log-out'>
    {
      this.state.authenticated === true &&
      <button id="sign-out-button" className="ui button" onClick={this.signOut}>Log Out</button>
    }
    </div>
  </div>
}
                
            </div>
        );
    }
}

export default SignIn;