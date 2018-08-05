import React, { Component } from 'react'
import Logo from '../images/heddit.png'
import Background from '../images/background.mp4'
import "./Landing.css"

class Landing extends Component {

    render() {
        return (
            <body className='landing-body-page'>
                <div className='landing-bg'>
                <video id="background-video" loop autoPlay muted>
                    <source src={Background} type="video/mp4" />
                    <source src={Background} type="video/ogg" />
                    Your browser does not support the video tag.
                </video>
                <a href='/Login'>
                    <img className='landing-logo' src={Logo} alt='Heddit Logo'/>
                </a>
                </div>
            </body>
        );
    }
}

export default Landing;