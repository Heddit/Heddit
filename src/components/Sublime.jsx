import React, { Component } from 'react'
import {Col} from 'react-bootstrap'
import Navbar from'./Navbar'
import Sidemenu from './Sidemenu'
import Tabs from './Tabs'

import './Sublime.css'

class Sublime extends Component {

    render() {
        return (

            <div className="sublime-body">
                <div>
                    <Col active className='sublime-side-menu' sm={6} md={3}>
                        <Sidemenu />
                    </Col>
                </div>
                <div>
                    <Col className="sublime-tabs-holder" sm={4} md={9}>
                        <Tabs />
                    </Col>
                    <span className='side-nav'>
                        <Col xs={1} sm={1} className="skin-selector dropdown-menu-style">
                            <Navbar />
                        </Col>
                    </span>
                </div> 
            </div>  
        )


    }
}

export default Sublime;