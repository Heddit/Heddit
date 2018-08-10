import React, { Component } from 'react'
import { Icon, Grid, Dropdown } from 'semantic-ui-react'
import './Sidenav.css'

class Sidenav extends Component {

    
    render() {

        const trigger = (
            <span>
              <Icon name='settings' size='big' className='icon' />
            </span>
          )
          
          const options = [
              {  key: 'rn-tb', text: <a href=''> Rename Tab </a> },
              {  key: 'ad-tb', text: <a href=''> Add Tab    </a> },
              {  key: 'rm-tb', text: <a href=''> Remove Tab </a> },
          ]
          
          
        return (
         <div className='sidenav-container'>
                <Grid>
                    <Grid.Row>
                    <a href='http://hackertyper.com/' target='_blank'>
                        <Icon name='copy outline' size='big' className='icon' />
                    </a>
                    </Grid.Row>
                    
                    <Grid.Row>
                        <a href='http://www.google.com/' target='_blank'>   
                            <Icon name='search' size='big' className='icon' />
                        </a>
                    </Grid.Row>
                    
                    <Grid.Row>
                    <a href='http://www.github.com/' target='_blank'>
                        <Icon name='save outline' size='big' className='icon' />
                    </a>
                    </Grid.Row>
                    <Grid.Row>
                    <a href='#'>
                        <Icon name='undo' size='big' className='icon' />
                    </a>
                    </Grid.Row>
                    <Grid.Row>
                    <a href='#'>
                        <Icon name='edit' size='big' className='icon' />
                    </a>
                    </Grid.Row>
                    <Grid.Row>
                    <a href='#'>
                        <Icon name='content' size='big' className='icon' />
                    </a>
                    </Grid.Row>
                    <Grid.Row>
                        <Dropdown trigger={trigger} options={options} position='bottom center' icon={null} />     
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default Sidenav;