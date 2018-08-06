import React, { Component } from 'react'
import { Divider, Icon } from 'semantic-ui-react'
import './Sidemenu.css'

class Sidemenu extends Component {

    render() {


        return (
            <div>
                <div className='explorer-column'>
                    <div>
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
            </div>
        );
    }
}

export default Sidemenu;