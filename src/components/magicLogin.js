import React, { Component } from 'react'
import { Form, Transition, Button } from 'semantic-ui-react'
import {firebase} from '../base'
import './Login.css'



class magicLogin extends Component {

      
    render() {

        return (
            <div>
                <h1> MAGIC </h1>
                <Form id="sign-in-form" onSubmit={this.signIn}>
                    <Form.Field>
                        <input value={this.state.value} onChange={this.handleLoginEmailChange} type="email" placeholder="Email" required></input>
                    </Form.Field>
                    <Form.Field>
                        <input value={this.state.value} onChange={this.handleLoginPasswordChange} type="password" placeholder="Password" required></input>
                    </Form.Field>
                    <div>
                        <Button id="signIn-button" inverted color='green' href='/TextEditor'>Log In</Button>
                        <Button id="signIn-button" inverted color='white' href='/TextEditor'>Sign Up</Button>
                    </div>
                </Form>
            </div>
        );
    }
}

export default magicLogin;