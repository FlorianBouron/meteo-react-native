import React, {Component} from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import moment from 'moment'
import globalStyle from '../../Style'
import FadeInView from '../animation/fadeInView'

export default class Row extends Component {

    static propTypes = {
        data: React.PropTypes.object,
        index: React.PropTypes.number
    };

    day() {
        let day = moment(this.props.data.dt * 1000).format('ddd');
        return (
            <Text style={[style.white, style.bold]}>{day.toUpperCase()}</Text>
        )
    }

    icon(size=50) {
        const icon_id = this.props.data.weather[0].icon;
        return <Image source={{uri: `http://openweathermap.org/img/w/${icon_id}.png`}} style={{width: size, height: size}} />
    }

    date() {
        let date = moment(this.props.data.dt * 1000).format('DD/MM');
        return (
            <Text>{date}</Text>
        )
    }

    render() {
        if (this.props.index ===0) {
            return (
                <View style={[style.view, {backgroundColor: '#d13838',}]}>
                    <View>
                        <Text>{this.day()} {this.date()}</Text>
                        {this.icon(80)}
                    </View>
                    <Text style={[style.temp, {fontSize: 35}]}>{Math.round(this.props.data.temp.day)}°C</Text>
                </View>
            )
        }
        return (
            <View style={style.view}>
                <Text>{this.day()} {this.date()}</Text>
                <Text style={style.temp}>{Math.round(this.props.data.temp.day)}°C</Text>
                {this.icon()}
            </View>
        )
    }

}


const style = StyleSheet.create({
    white: {
        color: '#FFFFFF'
    },
    bold: {
        fontWeight: 'bold'
    },
    view: {
        backgroundColor: '#A24544',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#202340',
        paddingHorizontal:20,
        paddingVertical: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    temp: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 22
    }
});