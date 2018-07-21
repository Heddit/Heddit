import React, { Component } from 'react'
import {Col, Tabs, Tab} from 'react-bootstrap'
import './TextEditor.css'


class TextEditor extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
         
        };
    }

 
    render() {
        return (
            <div className='text'>
                <div>
                    <Col sm={6} md={2}>
                    <h3>Home</h3>
                    <h3>Menu</h3>
                    <h3></h3>
                    </Col>
                </div>
                <div>
                    <Col sm={6} md={10}>
                    <Tabs defaultActiveKey={2} id="tabs">
                        <Tab eventKey={1} title="Tab 1">
                            Tab 1 content
                        </Tab>
                        <Tab eventKey={2} title="Tab 2">
                            Tab 2 content
                        </Tab>
                        <Tab eventKey={3} title="Tab 3" >
                            Tab 3 content
                        </Tab>
                    </Tabs>
                    </Col>
                </div>
            </div>
        )
    }
}

export default TextEditor;