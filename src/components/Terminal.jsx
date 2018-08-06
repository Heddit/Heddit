import React, { Component } from 'react'
// import Navbar from './Navbar'
// import Tabs from './Tabs'
import Dropdown from './Dropdown'




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

                            <Dropdown />
            </div>
        );
    }
}

export default Terminal;