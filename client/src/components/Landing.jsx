import React, { Component } from 'react'
import {Modal} from 'react-bootstrap'
import Logo from '../images/heddit.png'
import Background from '../images/background.mp4'
import "./Landing.css"

class Landing extends Component {
  constructor(){
    super()
    this.state = {
      logoImage: Logo,
      videoURL: Background
    }
  }
    render() {
        return (
            <div>
            <video id="background-video" loop autoPlay muted>
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                Your browser does not support the video tag.
             </video>
                <div className="static-modal">
                    <Modal.Dialog bsStyle='small'>
                            <a href='/Login'> 
                                <img className='logo' src={this.state.logoImage} alt='Hiddit Logo'/>
                            </a>
                    </Modal.Dialog>
                </div>
            </div>
        );
    }
}

export default Landing;