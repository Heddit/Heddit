import React, { Component } from 'react'
import './TextColors.css'
import './Terminal.css'
import TerminalLayout from './TerminalLayout'




class Terminal extends Component {

    render() {
        return (
            <div className="terminal-body">
                <TerminalLayout />
            </div>
        );
    }
}

export default Terminal;