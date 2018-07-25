import React, { Component } from 'react'
import {Col, Tabs, Tab, Glyphicon} from 'react-bootstrap'
import Logo from '../images/eye.png'


import './RedditData.css'


class TextEditor extends Component {
    constructor(props) {
        super(props);

        let tabTitle1 = "Reddit",
            tabTitle2 = "New York Times",
            tabTitle3 = "Setings"

 
        this.state = {
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
                        <div className='side-nav'>
                            <div>
                                <Col className='side-nav' sm={6} md={2}>
                                <h3>Home</h3>
                                <h3>Menu</h3>
                                <h3></h3>
                                </Col>
                            </div>
                            <div>
                                <Col sm={6} md={9}>
                                <Tabs defaultActiveKey={2} id="tabs">
                                    <Tab eventKey={1} title={this.state.tab1} className="tab-style">
                                        Tab 1 content
                                    </Tab>
                                    <Tab eventKey={2} title={this.state.tab2} className="tab-style">
                                        Tab 2 content
                                    </Tab>
                                    <Tab eventKey={3} title={this.state.tab3} className="tab-style">
                                        Tab 3 content
                                    </Tab>
                                </Tabs>
                                </Col>

                            </div>
                        </div>
                    </div>
                    <Col sm={1} md={1} className="skin-selector">
                        
                        <img src={Logo} alt='logo' class='logo'/>
                    </Col>
                </div>
            </body>
            
        )
    }
}

export default RedditData;