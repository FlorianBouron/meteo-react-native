import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native'
import {TabNavigator} from 'react-navigation'
import About from './components/About'
import Search from './components/Search'


const Tabs = TabNavigator(
    {
        Search: {screen: Search},
        About: {screen: About}
    },
    {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            showIcon: true,
            showLabel: false,
            indicatorStyle: {
                height: 2,
                backgroundColor: "#FFFFFF"
            },
            style: {
                backgroundColor: "#A2273C",
                borderTopWidth: 1,
                borderColor: "#3F101C"
            }
        }
    }
);

export default class App extends React.Component {
  render() {
    return (
      <View style={style.view}>
          <StatusBar hidden={true} />
          <Tabs/>
      </View>
    );
  }
}

const style = StyleSheet.create({
    view: {
        flex: 1
    }
});