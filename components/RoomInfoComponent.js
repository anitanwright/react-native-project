import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

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

function RoomInfo(props) {
    return <RenderRoom room={props.room} />;
}

export default RoomInfo;