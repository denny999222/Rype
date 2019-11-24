import React,{Component} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class TabIcon extends Component {
    render(){
        const {iconName, iconColor, iconSize} = this.props;
        return (
            <View style={{justifyContent:'center', alignItems:'center'}} >
                <Icon name={iconName} color={iconColor} size={iconSize} />
            </View>
        )
    }
}

export {TabIcon};