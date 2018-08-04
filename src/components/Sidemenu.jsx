import React, { Component } from 'react';

class Sidemenu extends Component {
    render() {
        return (
            <div>
                <div className="black-bg">
                OPEN EDITORS
                </div>
                < a href="/"><h5>Home</h5></a>
                <h5>About</h5>
                <h5>Menu</h5>
            </div>
        );
    }
}

export default Sidemenu;