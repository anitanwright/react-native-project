import React, { Component }from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { ROOMS } from '../shared/rooms';


function RenderRoom({room}) {
    if (room) {
        return (
            <Card 
                featuredTitle={room.name}
                image={require('./images/react-lake.jpg')}
            >
                <Text style={{margin: 10}}>
                    {room.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class RoomInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rooms: ROOMS
        };
    }

    static navigationOptions = {
        title: 'Room Information'
    }

    render() {
        const roomId = this.props.navigation.getParam('roomId');
        const room = this.state.rooms.filter(room => room.id === roomId)[0];
        return <RenderRoom room={room} />;
}
}

export default RoomInfo;