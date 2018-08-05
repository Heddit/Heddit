import React, { Component } from 'react'
import {Grid, GridColumn} from 'semantic-ui-react'
import Tabs from './Tabs'
import SideNav from './Sidenav'
import Dropdown from './Dropdown'
import Sidemenu from './Sidemenu'
import './TextEditor.css'


class TextEditor extends Component {

    render() {
        return (
            <div className="text-editor-body">
                <div className='text-editor-container'>
                    <Grid>
                        <Grid.Column className='side-nav'>
                            <SideNav />
                        </Grid.Column>
                  
                        <Grid.Column active className='side-menu' sm={5} md={1}>
                            <Sidemenu />
                        </Grid.Column>
                    
                        <Grid.Column width={8} >
                            <Tabs />
                        </Grid.Column>

                        <GridColumn className='side-nav'>
                            <div className="skin-selector">
                                <Dropdown />
                            </div>
                        </GridColumn>
                    </Grid>
                </div>
            </div>

        
            
        )
    }
}

export default TextEditor;