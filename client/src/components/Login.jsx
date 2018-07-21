import React, { Component } from 'react'
import { Form, FormControl, FormGroup, Row, Button } from 'react-bootstrap'
// import Background from '../images/binaryRain.mp4'
import Logo from '../images/heddit.png'
import './Login.css'



class Login extends Component {
    constructor(){
        super()
        this.state = {
            // videoURL: Background
        }
      }
    
    render() {
        return (
            <body className='login-body'> 
                {/* <video id="background-video" loop autoPlay muted>
                    <source src={this.state.videoURL} type="video/mp4" />
                    <source src={this.state.videoURL} type="video/ogg" />
                    Your browser does not support the video tag.
                </video> */}
                <div className="login-form">
                <Form horizontal>
                <a href='/'>
                    <img className='eye-logo' src={Logo} alt='Heddit Logo'/>
                </a>
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
            </body>
        );
    }
}

export default Login;