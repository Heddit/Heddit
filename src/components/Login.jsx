import React, { Component } from 'react'
import { Grid} from 'semantic-ui-react'
import Background from '../images/binaryRain.mp4'
import Logo from '../images/heddit.png'
import LoginPage from './LoginPage'
// import Signup from './SignUp'
// import magicLogin from './magicLogin'
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
             <Grid className='login-div'>
                <div className="login-form">
                    {/* <Form horizontal> */}
                        <div>
                            <a href='/'>
                                <img className='eye-logo-small' src={Logo} alt='Heddit Logo'/>
                            </a>
                        </div>
                    <div className='button-holder'>
                    <div className='rowC'>
                        {/* <magicLogin /> */}
                         <LoginPage />   
                            {/* <Signup /> */}

                        </div>
                        </div> 
                        {/* </Form> */}
                    </div>
                    </Grid> 
                </div>  
            </div>
        );
    }
}

export default Login;