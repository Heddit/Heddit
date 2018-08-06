import React, { Component } from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
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
                        <Grid.Column className='side-nav' width={0}>
                            <SideNav />
                        </Grid.Column>
                  
                        <Grid.Column active className='side-menu' width={2}>
                            <Sidemenu />
                        </Grid.Column>
                    
                        <Grid.Column width={11} className='tabs-div'>
                            <Tabs />
                            <hr />
                        </Grid.Column>
                        <GridColumn className='bg-color' width={1.5}>
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