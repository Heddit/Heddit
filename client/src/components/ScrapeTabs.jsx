import React, { Component } from 'react'
import {Tabs, Tab} from 'react-bootstrap'
import './ScrapeTabs.css'



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
                <Tabs defaultActiveKey={1} id="tabs">
                    <Tab eventKey={1} title="Tab 1" className="tab-style">
                        <div className="tab-data">Tab 1 content</div>
                    </Tab>
                    <Tab eventKey={2} title="Tab 2" className="tab-style">
                        <div className="tab-data">Tab 2 content</div>
                    </Tab>
                    <Tab eventKey={3} title="Tab 3" className="tab-style">
                        <p className="tab-data">Tab 3 content</p>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

export default ScrapeTabs;