import React, { Component } from 'react'
import settingsIcon from '../images/settings.png'
import {DropdownButton, MenuItem} from 'react-bootstrap'
import './Settings.css'

class Settings extends Component {
    render() {
        return (
            <div>
                <span className="dropdown-menu-style">
                    <DropdownButton 
                    bsStyle="default"
                    title={<img src={settingsIcon} alt='settings' className='settings'/>}
                    className="dropdown-btn"
                    noCaret
                    bsSize="xsmall"                        
                    id="dropdown-no-caret">
                        <MenuItem className="menu-item" eventKey={4} href="/">Rename Tabs </MenuItem>
                        <MenuItem className="menu-item" eventKey={5} href="/">Add Tab</MenuItem>
                    </DropdownButton>
                </span>            
            </div>
        );
    }
}

export default Settings;