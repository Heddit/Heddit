import React, { Component } from 'react'
import { Icon }  from 'semantic-ui-react'
import Dropdown from './DropdownSmall'
import DropdownRed from './DropdownRed'
import DropdownYellow from './DropdownYellow'
import './Navbar.css'


class Navbar extends Component {
    render() {
        return (
            <div className='navbar'>
                <span className='navbar-title'> 
                    <DropdownRed />
                    <DropdownYellow />
                    <Dropdown /> 
                    Terminal 

 
                </span>
            </div>
        );
    }
}

export default Navbar;


