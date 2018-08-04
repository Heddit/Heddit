import React from 'react'
import {Grid} from 'semantic-ui-react'
import Tabs from './Tabs'
import Sidenav from './Sidenav'


export default class Dashboard extends React.Component{


  render(){



    return (
      <div>
        <Grid width={8}>
        <Grid.Column>
          <Sidenav />
        </Grid.Column>
        <Grid.Column >
          <Tabs />
        </Grid.Column>
        </Grid>

      </div>
    )
  }
}
