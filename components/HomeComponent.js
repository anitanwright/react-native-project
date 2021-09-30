import React, { Component } from 'react';
import { View, Text, ScrollView} from 'react-native';
import { Card } from 'react-native-elements';
import { ROOMS } from '../shared/rooms';
import { DEALS } from '../shared/deals';
import { LOCAL_ATTRACTIONS } from '../shared/local_attractions';

function RenderItem({item}) {
    if (item) {
        return (
            <Card
                featuredTitle={item.name}
                image={require('./images/react-lake.jpg')}
            >
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rooms: ROOMS,
            deals: DEALS,
            local_attractions: LOCAL_ATTRACTIONS
        };
    }

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <RenderItem 
                    item={this.state.rooms.filter(room => room.featured)[0]}
                />
                <RenderItem 
                    item={this.state.deals.filter(deal => deal.featured)[0]}
                />
                <RenderItem 
                    item={this.state.local_attractions.filter(local_attraction => local_attraction.featured)[0]}
                />
            </ScrollView>
        );
    }
}

export default Home;
