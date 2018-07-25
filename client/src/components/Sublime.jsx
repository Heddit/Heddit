import React, { Component } from 'react'
import {Col} from 'react-bootstrap'
import ScrapeTabs from './ScrapeTabs'
import Navbar from './Navbar'
import Sidemenu from './Sidemenu'
import './Sublime.css'

class Sublime extends Component {

    render() {
        return (
            <body className="sublime-body">
                <div>
                    <Col active className='sublime-side-menu' sm={6} md={3}>
                        <Sidemenu />
                    </Col>
                </div>
                <div>
                    <Col className="sublime-tabs-holder" sm={4} md={9}>
                        <ScrapeTabs />
                    </Col>
                    <span className='side-nav'>
                        <Col xs={1} sm={1} className="skin-selector dropdown-menu-style">
                            <Navbar />
                        </Col>
                    </span>
                </div> 
            </body>  
        )
    }
}

export default Sublime;