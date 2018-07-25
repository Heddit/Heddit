import React, { Component } from 'react'
import {Col, Tabs, Tab, Glyphicon} from 'react-bootstrap'
import { DropdownButton, MenuItem} from 'react-bootstrap'
import Navbar from'./Navbar'

import './Sublime.css'

class Sublime extends Component {

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
            <div>
                <body className="sublime-body">
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
                                    <Tab eventKey={7} title={this.setState.tab1} className="tab-style">
                                        <div className="tab-data">Tab 1 content</div>
                                    </Tab>
                                    <Tab eventKey={8} title={this.setState.tab2} className="tab-style">
                                        <div className="tab-data">Tab 2 content</div>
                                    </Tab>
                                    <Tab eventKey={9} title={this.setState.tab3} className="tab-style">
                                        <p className="tab-data">Tab 3 content</p>
                                    </Tab>
                                </Tabs>
                                </Col>
                            <Navbar />
                            </div>    
                        </div>
                    </div>
                </body>  
            </div>
        );
    }
}

export default Sublime;