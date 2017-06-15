import React, {Component} from 'react'
import {TextInput, Image, Button, View} from 'react-native'
import globalStyle from '../Style'
import {StackNavigator} from 'react-navigation'
import List from './List'

class Search extends Component {

    static navigationOptions = {
        title: 'Search a city',
        tabBarIcon: () => {
            return <Image source={require('./icons/weather.png')} style={globalStyle.navigationIcon} />
        }
    };

    constructor(props) {
        super(props);
        this.state= {
            city: 'Paris'
        };
    }

    setCity = (city) => {
        this.setState({
           city: city
        });
    };

    submit() {
        this.props.navigation.navigate('Result', {city: this.state.city});
    }

    render() {
        return (
            <View style={globalStyle.container}>
                <TextInput
                    underlineColorAndroid='transparent'
                    style={globalStyle.input}
                    value={this.state.city}
                    onChangeText={(text)=> this.setCity(text)}
                />
                <Button onPress={() => this.submit()} title="Search a city" color={globalStyle.color} />
            </View>
        )
    }

}

const navigationOptions = {
    headerStyle: globalStyle.header,
    headerTitleStyle: globalStyle.headerTitle
};

export default StackNavigator ({
    Search: {
        screen: Search,
        navigationOptions
    },
    Result: {
        screen: List,
        navigationOptions
    }
})