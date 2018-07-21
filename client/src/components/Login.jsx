import React, { Component } from 'react'
import { Form, FormControl, FormGroup, Row, Button } from 'react-bootstrap'
import Logo from '../images/heddit.png'
import './Login.css'



class Login extends Component {
    constructor(){
        super()
        this.state = {
            
        }
      }
    
    render() {
        return (
            <div className="login-form">
            <Form horizontal>
            <img className='eye-logo' src={Logo} alt='Heddit Logo'/>
            <FormGroup controlId="Email">
                <Row sm={10}>
                <FormControl type="email" placeholder="Email" />
                </Row>
            </FormGroup>

            <FormGroup controlId="Password">
                <Row sm={10}>
                <FormControl type="password" placeholder="Password" />
                </Row>
            </FormGroup>
            <Button type="submit">Login</Button>
            <Button type="post" bsStyle='success'>Sign Up</Button>
            </Form>
            </div>    
        );
    }
}

export default Login;