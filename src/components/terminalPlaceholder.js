import React from 'react'
import { Modal, Image, Popup, Item, Grid } from 'semantic-ui-react'
import './TextColors.css'

export default class TerminalPlaceholder extends React.Component {
    
    state = { open: false }

    show = size => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })


    render(){
        let articleTitle = 'Placeholder Title : '
        let summary =  "The dogs' value to early human hunter-gatherers led to them quickly becoming ubiquitous across world cultures. Dogs perform many roles for people, such as hunting, herding, pulling loads, protection, assisting police and military, companionship, and, more recently, aiding handicapped individuals. This impact on human society has given them the nickname man's best friend in the Western world. In some cultures, however, dogs are also a source of meat."
        let imgLink = 'https://placeimg.com/640/480/animals'
        const { open, size } = this.state


            return (
                <div>
                    <p className='lb'>
                        <span className='p'>{articleTitle}</span>
                        {summary}
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
                                <Image src={imgLink} />
                            </Modal.Content>
                        </Modal>

                </div>
        ) 
    }
}

