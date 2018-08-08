import React from 'react'
import {Modal, Image} from 'semantic-ui-react'
import './TextColors.css'
import Favorites from './Favorites'

export default class BleacherReportLayout extends React.Component{

    state = { open: false }

    show = size => () => this.setState({ size, open: true })
    
    // show = function("mini"){
    //   return function(){
    //     return this.setState({"mini", open:true})
    //   }
    // }

    close = () => this.setState({ open: false })

    // close = function(){
    //   return this.setState({open: false});
    // }

    render(){
        const { title, img, summary, link } = this.props; //link isnt being used TODO: fix this
        const { open, size } = this.state

        return(
        
            <div className='vscode-article-holder'>
                <p className='o'>( <span className='b'> ( <span className='y'>{title}</span> ) </span> )<span className='w'> ;</span> </p>

                <p className='lb'>'Article Summary:'{summary}</p>
                <p className='g'>'link:---'
                <a href={link}> 'here' </a>
                </p>

                <span href='#' className='g' onClick={this.show('mini')}> ( <span className='b'> View Image </span>) </span>

                <Modal size={size} open={open} onClose={this.close}>
                    <Modal.Content>
                        <Image src={img} />
                    </Modal.Content>
                </Modal>

                <Favorites />

            </div>


        )
    }
}



