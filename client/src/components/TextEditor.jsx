import React, { Component } from 'react'
import {Col, Tabs, Tab, Glyphicon} from 'react-bootstrap'
import { DropdownButton, MenuItem} from 'react-bootstrap'
import Logo from '../images/eye.png'


import './TextEditor.css'


class TextEditor extends Component {
    constructor(props) {
        super(props);

        let tabTitle1 = "Reddit",
            tabTitle2 = "New York Times",
            tabTitle3 = "Setings"

 
        this.setState = {
            tab1: tabTitle1,
            tab2: tabTitle2,
            tab3: tabTitle3
         
        };
    }

 
    render() {
        return (
            <body className="text-editor-body">
                <div>
                    <div className='text-editor-container'>
                        <div>
                            <Col active className='side-nav' sm={1} md={1}>
                            <Glyphicon glyph="star"></Glyphicon>
                            </Col>
                        </div>
                        <div>
                            <Col active className='side-menu' sm={5} md={1}>
                            <h5>About</h5>
                            <h5>Home</h5>
                            <h5>Menu</h5>
                            </Col>
                        </div>
                        <div>
                            <Col className="tabs-holder" sm={3} md={8}>
                            <Tabs defaultActiveKey={2} id="tabs">
                                <Tab eventKey={1} title={this.setState.tab1} className="tab-style">
                                    <div className="tab-data">Tab 1 content</div>
                                </Tab>
                                <Tab eventKey={2} title={this.setState.tab2} className="tab-style">
                                    <div className="tab-data">Tab 2 content</div>
                                </Tab>
                                <Tab eventKey={3} title={this.setState.tab3} className="tab-style">
                                    <p className="tab-data">Tab 3 content</p>
                                </Tab>
                            </Tabs>
                            </Col>
                            <span className='side-nav'>
                                <Col xs={1} sm={1} className="skin-selector dropdown-menu-style">
                                    <span className="dropdown-menu-style">
                                        <DropdownButton
                                        bsStyle="default"
                                        title={<img src={Logo} alt='logo' class='logo'/>}
                                        className="dropdown-btn"
                                        noCaret
                                        bsSize="xsmall"                        
                                        id="dropdown-no-caret">
                                            <MenuItem className="menu-item" eventKey={4}>VSCode </MenuItem>
                                            <MenuItem className="menu-item" eventKey={5}>Sublime</MenuItem>
                                            <MenuItem className="menu-item" eventKey={5}>Terminal</MenuItem>
                                        </DropdownButton>
                                    </span>
                                </Col>                          
                            </span>
                        </div>    
                    </div>
                </div>
            </body>
            
        )
    }
}

export default TextEditor;