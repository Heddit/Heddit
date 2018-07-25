import React, { Component } from 'react'
import {Col, Tabs, Tab, Glyphicon} from 'react-bootstrap'
import { DropdownButton, MenuItem} from 'react-bootstrap'
import Logo from '../images/eye.png'




class Terminal extends Component {
    render() {
        return (
            <body className="terminal-body">
                <div>

                    
                    {/* Logo Dropdown Side-Nav */}
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
                                    <MenuItem className="menu-item" eventKey={4} href="/TextEditor">VSCode </MenuItem>
                                    <MenuItem className="menu-item" eventKey={5} href="/Sublime">Sublime</MenuItem>
                                    <MenuItem className="menu-item" eventKey={6} href="/Terminal">Terminal</MenuItem>
                                </DropdownButton>
                            </span>
                        </Col>                          
                    </span>
                </div>
            </body>
        );
    }
}

export default Terminal;