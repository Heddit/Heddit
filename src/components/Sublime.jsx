import React, { Component } from 'react'
import {Grid} from 'semantic-ui-react'
import SublimeMenu from './sublimeMenu'
import Tabs from './Tabs'
import './Sublime.css'

class Sublime extends Component {

    render() {
        return (
            <div className="sublime-body">
                <Grid columns={3}>
                    <Grid.Column active className='sublime-side-menu' width={2}>
                        <SublimeMenu /> 
                    </Grid.Column>
                    

                    <Grid.Column width={11} className='sublime-tabs-holder tab-container'>
                            <Tabs />
                            <hr />
                    </Grid.Column>
                    <Grid.Column>
                        {/* <Dropdown /> */}
                    </Grid.Column>
                </Grid>
            </div> 
        )


    }
}

export default Sublime;