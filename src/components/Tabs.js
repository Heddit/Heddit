import React, { Component } from 'react'
import './Tabs.css'
import BleacherReport from './BleacherReport'
import {databaseBase,firebase} from '../base'
import Reddit from './Reddit'
import NYT from './NYT'


class Tabs extends Component {


    constructor(props){
        super()
        this.state = {
          showBleacherReport: false,
          showReddit: false,
          showNYT: false,
          authenticated: false
        }
      }
      
      
      //  Tab  Click Functions
      showBleacherReport = () =>(
        this.setState({
          showBleacherReport: true,
          showReddit: false,
          showNYT: false
        })
      )
      showReddit = () =>(
        this.setState({
          showBleacherReport: false,
          showReddit: true,
          showNYT: false
        })
      )
      showNYT = () =>(
        this.setState({
          showBleacherReport: false,
          showReddit: false,
          showNYT: true
        })
      )

      signOut = () => {
        firebase.auth().signOut()
      }

    render() {
        return (
            <div className='tab-container'>
                {/* Tabs */}
                <button className='ui button' onClick={this.showBleacherReport}>Bleacher Report</button>
                <button className='ui button' onClick={this.showReddit}>Reddit</button>
                <button className='ui button' onClick={this.showNYT}>New York Times</button>


                {/* Tab Content */}
                {this.state.showBleacherReport === true &&  
                <div>
                    <BleacherReport />
                    <button type="button" onClick={this.scrapeBleacherReport}>Scrape Bleacher</button>
                </div>
                }
                {this.state.showReddit === true &&  
                <div>
                    <Reddit />
                </div>
                }
                {this.state.showNYT === true &&  
                <div>
                    <NYT />
                </div>
                }    
                {this.state.authenticated === true &&
                  <div>
                    <button id="sign-out-button" className="ui button" onClick={this.signOut}>Log Out</button>
                  </div>
                }
 
                        
            </div>
        );
    }
}

export default Tabs;