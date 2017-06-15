import React, {Component} from 'react'
import {View, Text, Image, Button} from 'react-native'
import globalStyle from '../Style'

export default class About extends Component {

    static navigationOptions = {
        tabBarIcon: () => {
            return <Image source={require('./icons/user.png')} style={globalStyle.navigationIcon} />
        }
    };

    search() {
        this.props.navigation.navigate('Search');
    }

    render() {
        return (
            <View style={globalStyle.container}>
                <Text style={globalStyle.title}>About the app</Text>
                <Text>
                    My name is Florian Bouron
                </Text>
                <Button onPress={() => this.search()} title="Search" color={globalStyle.color} />
            </View>
        )
    }

}
