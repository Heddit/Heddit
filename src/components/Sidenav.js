import React, { Component } from 'react'
import { Icon, Grid } from 'semantic-ui-react'
import './Sidenav.css'

class Sidenav extends Component {
    render() {
        return (
         <div className='sidenav-container'>
                <Grid>
                    <Icon name='home' size='large' className='icon' />
                </Grid>
                <Grid>
                    <Icon name='code' size='large' className='icon' />
                </Grid>
                <Grid>
                    <Icon name='save outline' size='large' className='icon' />
                </Grid>
                <Grid>
                    <Icon name='undo' size='large' className='icon' />
                </Grid>
                <Grid>
                    <Icon name='edit' size='large' className='icon' />
                </Grid>
                <Grid>
                    <Icon name='folder outline' size='large' className='icon' />
                </Grid>
                <Grid>
                    <Icon name='folder outline' size='large' className='icon' />
                </Grid>
            </div>
        );
    }
}

export default Sidenav;