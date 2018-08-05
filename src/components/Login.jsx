import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'semantic-ui-react'
import Background from '../images/binaryRain.mp4'
import Logo from '../images/heddit.png'
import './Login.css'



class Login extends Component {


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
                            <img className='eye-logo' src={Logo} alt='Heddit Logo'/>
                        </a>
                        <Button inverted color='green' href='/LoginPage'>Login</Button>
                        <Button inverted color='white' href='/SignUp'>Sign Up</Button>
                    </Form>
                </div>  
                </div>  
            </div>
        );
    }
}

export default Login;