import React from 'react'
import { Modal, Image, Popup, Item, Grid } from 'semantic-ui-react'
import './TextColors.css'


export default class TerminalPlaceholder extends React.Component {
    
    state = { open: false }

    show = size => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })


    render(){
        const { title, img, summary} = this.props
        const { open, size } = this.state


            return (
                <div>
                    <p className='lb'> 'Title: ---'
                        <span className='p'>{title}</span>
                        <p> 'Article Summary: ---'{summary} </p>
                    </p>
                    <Grid.Row>
                        <span className='b'onClick={this.show('mini')}> View Image </span>

                        {/* Add to Favorites */}
                        <span>
                        <Popup
                            trigger={<Item className='lime pb' content=' Add To Favorites ' />}
                            content={<Item  content='Added To Favorites' />}
                            on='click'
                        />
                        </span>
                    </Grid.Row>
                        {/* Image Modal */}
                        <Modal size={size} open={open} onClose={this.close}>
                            <Modal.Content>
                                <Image src={img} />
                            </Modal.Content>
                        </Modal>

                </div>
        ) 
    }
}

