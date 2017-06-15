import React, {Component} from 'react'
import {Text, ActivityIndicator, ListView} from 'react-native'
import  axios from 'axios'
import globalStyle from '../Style'
import WeatherRow from './weather/Row'

export default class List extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: `Weather / ${navigation.state.params.city}`
        }
    };

    constructor (props) {
        super(props);
        this.state= {
            city: this.props.navigation.state.params.city,
            report: null
        };
        this.fetchWeather();
    }

    fetchWeather() {
        axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.city}&units=metric&APPID=f9549f7641f8a0aa91fad5b9ab234dbc`)
            .then((response) => {
                this.setState({report: response.data})
            });
    }

    render() {
        if (this.state.report === null) {
            return (
                <ActivityIndicator color={globalStyle.color} size="large"/>
            )
        }
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return (
            <ListView
                dataSource={ds.cloneWithRows(this.state.report.list)}
                renderRow={(rowData, j, k) => <WeatherRow data={rowData} index={parseInt(k)} />}
            />
        )
    }

}