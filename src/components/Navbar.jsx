import React, { Component } from 'react'
import { DropdownButton, MenuItem} from 'react-bootstrap'
import Logo from '../images/eye.png'
import './Navbar.css'


class Navbar extends Component {
    render() {
        return (
            <div>
                <span className="dropdown-menu-style">
                    <DropdownButton
                    bsStyle="default"
                    title={<img src={Logo} alt='logo' className='logo'/>}
                    className="dropdown-btn"
                    noCaret
                    bsSize="xsmall"                        
                    id="dropdown-no-caret">
                        <MenuItem className="menu-item" eventKey={4} href="/TextEditor">VSCode </MenuItem>
                        <MenuItem className="menu-item" eventKey={5} href="/Sublime">Sublime</MenuItem>
                        <MenuItem className="menu-item" eventKey={6} href="/Terminal">Terminal</MenuItem>
                    </DropdownButton>
                </span>
            </div>
        )
    }
}

export default Navbar;