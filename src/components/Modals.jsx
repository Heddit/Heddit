import React, { Component } from 'react';
import {Modal, Button, ButtonToolbar} from 'react-bootstrap'
// import DataRow from './DataRow'
import './Modals.css'

class Modals extends Component {
    constructor(props, context) {
      super(props, context);
  
      

      this.handleShow = this.handleShow.bind(this);
      this.handleHide = this.handleHide.bind(this);
  
      this.state = {
        show: false
      };
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    handleHide() {
      this.setState({ show: false });
    }

    
  
    render() {
        let title = this.props.title;
        // let url = this.props.url;
        let img = this.props.img
      
        return ( 
        <ButtonToolbar>
          <a bsStyle="primary" onClick={this.handleShow}>
            Open Modal
          </a>
  
          <Modal
            {...this.props}
            show={this.state.show}
            onHide={this.handleHide}
            dialogClassName="custom-modal"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-lg">
                {title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={img} alt='article' />
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                    auctor.
                </p>
                <p>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                    cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                    dui. Donec ullamcorper nulla non metus auctor fringilla.
                </p>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                    ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                    auctor.
                </p>
     
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        </ButtonToolbar>
      );
    }
  }
  
export default Modals;