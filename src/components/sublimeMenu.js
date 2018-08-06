import React, { Component } from 'react'
import DropdownRed from './DropdownRed'
import DropdownGreen from './DropdownSmall'
import DropdownYellow from './DropdownYellow'
import { Icon, Divider, }  from 'semantic-ui-react'
import './Sublime.css'

class sublimeMenu extends Component {
    render() {
        return (
            <div className='sublime-menu'>
                <div>
                    <span className='left'>
                        <DropdownRed />
                        <DropdownYellow />
                        <DropdownGreen />
                    </span>
                    <h4>EXPLORER</h4>
                </div>
                
                <div>
                    <h5>
                    <Icon name='triangle down' />
                    HEDDIT
                    </h5>

                    <p>Home</p>
                    <p>Favorites</p>
                    <p>Log Out</p>

                </div>

                <Divider />

                <div>
                    <h5>
                    <Icon name='triangle down' />
                    OPEN EDITORS
                    </h5>
                    <p>
                    <i class="fab fa-react"> </i>
                    BleacherReport.jsx
                </p>
                    <p>
                    <i class="fab fa-react"> </i>
                    Reddit.jsx
                    </p>
                    <p>
                    <i class="fab fa-react"> </i>
                    NewYorkTimes.jsx
                    </p>
                </div>
            </div>
        );
    }
}

export default sublimeMenu;