import React, { Component } from 'react'
import {Col} from 'react-bootstrap'
import Navbar from './Navbar'
import Tabs from './Tabs'




class Terminal extends Component {
    constructor(){
        super()
    
    let Title = " Title Placeholder"
    let articleTitle = Title

        this.setState = {
            title: articleTitle
        }
    }
    render() {
        return (
            <div className="terminal-body">
                <div>
                    <Col active className='sublime-side-menu' sm={6} md={3}>

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
        );
    }
}

export default Terminal;