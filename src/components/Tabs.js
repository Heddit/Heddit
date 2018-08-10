import React, { Component } from 'react'
import {firebase} from '../base'
import BleacherReport from './BleacherReport'
import Reddit from './Reddit'
import NYT from './NYT'
import Favorites from './FavoritesLayout'
import './Tabs.css'


class Tabs extends Component {


    constructor(props){
        super()
        this.state = {
          showBleacherReport: false,
          showReddit: false,
          showNYT: false,
          showFavorites: false,
        }
      }
      
      
      //  Tab  Click Functions
      showBleacherReport = () =>(
        this.setState({
          showBleacherReport: true,
          showReddit: false,
          showNYT: false,
          showFavorites: false,
        })
      )
      showReddit = () =>(
        this.setState({
          showBleacherReport: false,
          showReddit: true,
          showNYT: false,
          showFavorites: false,
        })
      )
      showNYT = () =>(
        this.setState({
          showBleacherReport: false,
          showReddit: false,
          showNYT: true,
          showFavorites: false,
        })
      )
      showFavorites = () => (
        this.setState({
          showBleacherReport: false,
          showReddit: false,
          showNYT: false,
          showFavorites: true,
        })
      )

      signOut = () => {
        firebase.auth().signOut()
      }


    render() {
        return (
            <div className='tab-container'>
                {/* Tabs */}
               
                  <button className='tab-button' onClick={this.showBleacherReport}>Bleacher Report</button>
                  <button className='tab-button' onClick={this.showReddit}>Reddit</button>
                  <button className='tab-button' onClick={this.showNYT}>New York Times</button>
                  {/* <button className='tab-button' onClick={this.showFavorites}>Favorites</button>
                  
                 */}


                {/* Tab Content */}
                {this.state.showBleacherReport === true &&  
                <div>
                    <BleacherReport />
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
                {/* {this.state.showFavorites === true &&  
                <div>
                    <Favorites />
                </div>
                }     */}
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