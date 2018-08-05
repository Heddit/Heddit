import React, { Component } from 'react'
import { Button, Form, Transition} from 'semantic-ui-react'
import {firebase} from '../base'
import './Login.css'

class SignUp extends Component {

    constructor(){
        super()
        this.state = {
          authenticated: false,
          hide: 500, 
          show: 500, 
          visible: false
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

      state = { }
      handleChange = (e, { name, value }) => this.setState({ [name]: value })
      toggleVisibility = () => this.setState({ visible: !this.state.visible })


    render() {
      const { hide, show, visible } = this.state

        return (
          <div> 

            <div>
              <Button inverted color='white' content='Sign Up' onClick={this.toggleVisibility} />
            </div>

            <div className='sign-up-form'>
              <Transition duration={{ hide, show }} visible={visible}>
                <Transition.Group>
                  <Form>
                    { this.state.authenticated === false &&
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
                  </Transition.Group>
                </Transition>
              </div>

          </div>
        );
    }
}

export default SignUp;