import React, { Component } from 'react'
import {Col, Tabs, Tab} from 'react-bootstrap'



class ScrapeTabs extends Component {
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
            </div>
        )
    }
}

export default Tabs;