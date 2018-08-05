import React from 'react'
import {Grid} from 'semantic-ui-react'
import Tabs from './Tabs'
import Sidenav from './Sidenav'


export default class Dashboard extends React.Component{


  render(){



    return (
      <div floated='left'>
        <Grid columns={2}>
        {/* <Grid.Column width={1}> 
          <Sidenav />
        </Grid.Column> */}
        <Grid.Column width={8} >
          <Tabs />
        </Grid.Column>
        </Grid>
        

      </div>
    )
  }
}
