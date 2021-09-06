import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { ROOMS } from '../shared/rooms';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: ROOMS
        };
    }

    render() {
        return <Directory rooms={this.state.rooms} />;
    }
}

export default Main;
