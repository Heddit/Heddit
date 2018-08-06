import React, { Component } from 'react'
import { Container, Form } from 'semantic-ui-react'
import Today from './DateTime'
import PlaceholderArticle from './terminalPlaceholder'
import Navbar from './Navbar'
import './TextColors.css'


class TerminalLayout extends Component {


    render() {
        return (
            <div>
                <Container fluid>
                    <Form wrapped >
                        <Navbar />
                        <p className='y pt'><Today /> </p> 
                        <PlaceholderArticle />
                        <PlaceholderArticle />
                        <PlaceholderArticle />
                        <PlaceholderArticle />
                        <PlaceholderArticle />
                        <PlaceholderArticle />
                        <PlaceholderArticle />
                        <PlaceholderArticle />
                        <PlaceholderArticle />
                        <PlaceholderArticle />
                        <PlaceholderArticle />
                        <PlaceholderArticle />
                        <PlaceholderArticle />
                        <PlaceholderArticle />
                        <PlaceholderArticle />
                        <PlaceholderArticle />
                        <PlaceholderArticle />
                        <PlaceholderArticle />
                    </Form>
                </Container> 
            </div>
        );
    }
}

export default TerminalLayout;