import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import Background from '../images/binaryRain.mp4'
import {firebase} from '../base'
import Logo from '../images/heddit.png'
import './Login.css'

class SignUp extends Component {

    constructor(){
        super()
        this.state = {
          authenticated: false,
        }
      }
    
      handleCreateUserEmailChange = (event) => {
        this.setState({createUserEmail: event.target.value});
      }
    
      handleCreateUserPasswordChange = (event) => {
        this.setState({createUserPassword: event.target.value});
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
                      {this.state.authenticated === false &&
                        <div>
                          <Form id="create-user-form" onSubmit={this.createUser}>

                            <Form.Field>
                              <input value={this.state.value} onChange={this.handleCreateUserEmailChange} type="email" placeholder="Email" required></input>
                            </Form.Field>  
                            <Form.Field>
                              <input value={this.state.value} onChange={this.handleCreateUserPasswordChange} type="password" placeholder="Password" required></input>
                            </Form.Field> 
                            <Form.Field>
                              <Button id="sign-up-button" inverted color='white'  type="submit">Sign Up</Button>
                            </Form.Field>
                          </Form>
                        </div>
                      }
                    </Form>
                </div>
              </div> 
            </div>
        );
    }
}

export default SignUp;