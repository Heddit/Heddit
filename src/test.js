import React, { Component } from 'react'
import './Tabs.css'
import BleacherReport from './BleacherReport'
import Reddit from './Reddit'
import NYT from './NYT'
import cheerio from 'cheerio'
import request from 'request'
import firebase from 'firebase'


class Tabs extends Component {
    constructor(props){
        super()
        this.state = {
          showBleacherReport: false,
          showReddit: false,
          showNYT: false
        }
      }
      
      
//  Tab  Click Functions


      // Bleacher Report Scrapes
      
        
      //  Changes Bleacher Report state to true. Calls the onclick function in tab
        this.setState({
          showBleacherReport: true,
          showReddit: false,
          showNYT: false
        })      
      }




      // Reddit Scrapes
      showReddit = () =>(
        this.setState({
          showBleacherReport: false,
          showReddit: true,
          showNYT: false
        })
      )

      // NYT Scrapes
      showNYT = () =>(
        this.setState({
          showBleacherReport: false,
          showReddit: false,
          showNYT: true
        })
      )

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
                    <BleacherReport articles={this.state.data}/>
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
                        
            </div>
        );
    }
}

export default Tabs;