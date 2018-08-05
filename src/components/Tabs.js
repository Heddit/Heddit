import React, { Component } from 'react'
import {firebase} from '../base'
import BleacherReport from './BleacherReport'
import Reddit from './Reddit'
import NYT from './NYT'
import './Tabs.css'


class Tabs extends Component {


    constructor(props){
        super()
        this.state = {
          showBleacherReport: false,
          showReddit: false,
          showNYT: false,
          authenticated: false,
          active: false
        }
      }
      
      
      //  Tab  Click Functions
      showBleacherReport = () =>(
        this.setState({
          showBleacherReport: true,
          showReddit: false,
          showNYT: false,
          active: true
        })
      )
      showReddit = () =>(
        this.setState({
          showBleacherReport: false,
          showReddit: true,
          showNYT: false,
          active: true
        })
      )
      showNYT = () =>(
        this.setState({
          showBleacherReport: false,
          showReddit: false,
          showNYT: true,
          active: true
        })
      )

      signOut = () => {
        firebase.auth().signOut()
      }

      toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
        console.log(currentState)
    };

    render() {
        return (
            <div className='tab-container'>
                {/* Tabs */}
               
                  <button className={this.state.active ? 'tab-button' : null} onClick={this.showBleacherReport + this.toggleClass}>Bleacher Report</button>
                  <button className='tab-button' onClick={this.showReddit}>Reddit</button>
                  <button className='tab-button' onClick={this.showNYT}>New York Times</button>
                


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