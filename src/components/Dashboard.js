import React from 'react'
import Tabs from './Tabs'
import Sidenav from './Sidenav'


export default class Dashboard extends React.Component{


  render(){



    return (
      <div>
         {/* {listSites} */}
        <Sidenav />
        <Tabs />

      </div>
    )
  }
}
