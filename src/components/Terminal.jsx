import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
// import Navbar from './Navbar'
import Tabs from './Tabs'
import Dropdown from './Dropdown'
import './TextColors.css'
import './Terminal.css'
import TerminalLayout from './TerminalLayout'




class Terminal extends Component {

    render() {
        return (
            <div className="terminal-body">
                <TerminalLayout />
                {/* <Dropdown /> */}
            </div>
        );
    }
}

export default Terminal;