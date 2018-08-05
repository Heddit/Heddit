import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import Background from '../images/binaryRain.mp4'
import Logo from '../images/heddit.png'
import {firebase} from '../base'
import './Login.css'



class LoginPage extends Component {
    constructor(){
        super()
        this.state = {
          authenticated: false,
        }
        
      }
      handleLoginEmailChange = (event) => {
        this.setState({signInEmail: event.target.value});
      }
    
      handleLoginPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value});
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
    
    
          } else {
            console.log('not logged in');
            this.setState({authenticated: false})
          }
        })
      }
    render() {
        return (
            <div className='login-body'> 
               <div className='landing-bg'>
                    <video id="background-video" loop autoPlay muted>
                        <source src={Background} type="video/mp4" />
                        <source src={Background} type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="login-form">
                        <Form horizontal>
                            <a href='/'>
                                <img className='eye-logo-small' src={Logo} alt='Heddit Logo'/>
                            </a>

                        <Form id="sign-in-form" onSubmit={this.signIn}>
                            <Form.Field>
                                <input value={this.state.value} onChange={this.handleLoginEmailChange} type="email" placeholder="Email" required></input>
                            </Form.Field>
                            <Form.Field>
                                <input value={this.state.value} onChange={this.handleLoginPasswordChange} type="password" placeholder="Password" required></input>
                            </Form.Field>
                            <div>
                                <Button id="signIn-button" inverted color='green' type="submit">Log In</Button>
                            </div>
                        </Form>
                    <p id="errors">{this.state.error}</p>
                
                        </Form>
                    </div>   
                
                    {/* Errors  */}
                    {
                        (this.state.authenticated === false)
                        ? <div></div>
                        : <div></div>
                    }
                
                    {this.state.authenticated === true &&
                        <div>
                             {/* <Dashboard
                                uid={this.state.uid}
                                items={this.state.items}
                                sites={this.state.sites}
                            />
                            
                            {/* Log Out Button */}
                            <div className='log-out'>
                                {
                                    this.state.authenticated === true &&
                                    <div> 
                                        <Button inverted color='red'>Logged In</Button>
                                        <Button id="sign-out-button" inverted color='yellow' onClick={this.signOut}>Log Out</Button>
                                    </div>
                                } */}
                            </div>  
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default LoginPage;