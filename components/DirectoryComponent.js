import React, { Component }from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { ROOMS } from '../shared/rooms';

class Directory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rooms: ROOMS
        };
    }

    static navigationOptions = {
        title: 'Directory'
    };

    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('RoomInfo', { roomId: item.id})}
                    leftAvatar={{ source: require('./images/react-lake.jpg')}}
                />
            );
        };

        return (
            <FlatList
                data={this.state.rooms}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Directory;
