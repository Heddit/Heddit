import React, { Component } from 'react'
import {Col} from 'react-bootstrap'
import Tabs from './Tabs'
import Navbar from './Navbar'
import SideNav from './Sidenav'
import Sidemenu from './Sidemenu'
import './TextEditor.css'


class TextEditor extends Component {

    render() {
        return (
            <div className="text-editor-body">
                <div className='text-editor-container'>
                    <div>
                        <Col active className='side-nav' sm={1} md={1}>
                            <SideNav />
                        </Col>
                    </div>
                    <div>
                        <Col active className='side-menu' sm={5} md={1}>
                            <Sidemenu />
                        </Col>
                    </div>
                    <div>
                    <Col className="tabs-holder" sm={3} md={8}>
                        <Tabs />
                    </Col>
                    <span className='side-nav'>
                        <Col xs={1} sm={1} className="skin-selector dropdown-menu-style">
                            <Navbar />
                        </Col>
                    </span>
                    </div>
                    
            </div>

            </div>

        
            
        )
    }
}

export default TextEditor;