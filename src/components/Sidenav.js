import React, { Component } from 'react'
import { Glyphicon } from 'react-bootstrap'
// import Settings from './Settings'
import './Sidenav.css'

class Sidenav extends Component {
    render() {
        return (
            <div>
                <Glyphicon glyph="globe"></Glyphicon><br /><br />
                <Glyphicon glyph="folder-open"></Glyphicon><br /><br /> 
                <Glyphicon glyph="wrench"></Glyphicon><br /><br /> 
                <Glyphicon glyph="link"></Glyphicon><br /><br /> 
                <Glyphicon glyph="random"></Glyphicon><br /><br /> 
                <Glyphicon glyph="resize-full"></Glyphicon><br /><br /> 
                <Glyphicon glyph="resize-small"></Glyphicon><br /><br /> 
                {/* <Settings /> */}
            </div>
        );
    }
}

export default Sidenav;