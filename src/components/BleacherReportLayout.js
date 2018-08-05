import React from 'react'
import {Modal, Image} from 'semantic-ui-react'
import './TextColors.css'
import Favorites from './Favorites'

export default class BleacherReportLayout extends React.Component{

    state = { open: false }

    show = size => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })

    render(){
        let articleTitle = 'Bleacher Report Article Title'
        let imgLink = 'https://placeimg.com/640/480/animals'
        let summary = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        let favBtn = ''
        const { open, size } = this.state

        return(
        
            <div className='vscode-article-holder'>
                <p className='o'>( <span className='b'> ( <span className='y'>{articleTitle}</span> ) </span> )<span className='w'> ;</span> </p>

                <p className='lb'>{summary}</p>

                <span href='#' className='g' onClick={this.show('mini')}> ( <span className='b'> View Image </span>) </span>

                <Modal size={size} open={open} onClose={this.close}>
                    <Modal.Content>
                        <Image src={imgLink} />
                    </Modal.Content>
                </Modal>

                <Favorites />

            </div>


        )
    }
}



