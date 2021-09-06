import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import RoomInfo from './RoomInfoComponent';
import { View } from 'react-native';
import { ROOMS } from '../shared/rooms';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: ROOMS,
            selectedRoom: null
        };
    }

    onRoomSelect(roomId) {
        this.setState({selectedRoom: roomId});
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Directory 
                    rooms={this.state.rooms}
                    onPress={roomId => this.onRoomSelect(roomId)}
                />
                <RoomInfo
                    room={this.state.rooms.filter(
                        room => room.id === this.state.selectedRoom)[0]}
                />
            </View>
        );
    }
}

export default Main;
