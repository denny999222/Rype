// Takes in props of {name, imageURL, containerStyle, contentStyle, leftButton, rightButton, onPressLeft, onPressRight}
// "name" : which is the text it will show
// "imageURL" : (could be logo, etc) which has a fixed size to fit into header
// "containerStyle" : pertains to the view surrounding the content (whether text or image) 
//                    and can override existing styling
// "contentStyle" : pertains to the content inside the view (text or image)
//                  and can also override existing styling
// "leftButton" : button on the left which is a component prop
// "rightButton" : button on the right whih is a component prop
// "onPressLeft": action of what left button does
// "onPressRight": action of what right button does
import React,{Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Header extends Component{

    renderHeader = () => {
        const {imageURL, name, contentStyle, leftButton, rightButton, onPressLeft, onPressRight, containerStyle} = this.props;

        if (typeof imageURL !== 'undefined'){
            return (
                <View style={styles.rowStyle} >
                    <TouchableOpacity style={styles.buttonStyle} onPress={onPressLeft} >
                        {leftButton || <Icon name='ad' color={containerStyle.backgroundColor || styles.container.backgroundColor} size={rightButton.props.size} />}
                    </TouchableOpacity>

                    <Image style={[styles.imageStyle, contentStyle]} source={{uri: imageURL}} />

                    <TouchableOpacity style={styles.buttonStyle} onPress={onPressRight} >
                        {rightButton || <Icon name='ad' color={containerStyle.backgroundColor || styles.container.backgroundColor} size={leftButton.props.size} />}
                    </TouchableOpacity>
                </View>
            )
        }
        else if (name !== 'undefined'){
            return (
                <View style={styles.rowStyle} >
                    <TouchableOpacity style={styles.buttonStyle} onPress={onPressLeft} >
                        {leftButton || <Icon name='ad' color={containerStyle.backgroundColor || styles.container.backgroundColor} size={rightButton.props.size} />}
                    </TouchableOpacity>

                    <Text style={[styles.textStyle, contentStyle]}> {name} </Text>

                    <TouchableOpacity style={styles.buttonStyle} onPress={onPressRight}>
                        {rightButton || <Icon name='ad' color={containerStyle.backgroundColor || styles.container.backgroundColor} size={leftButton.props.size} />}
                    </TouchableOpacity>
                </View>
            )
        }
    }

    render(){
        const {containerStyle} = this.props;
        return(
            <SafeAreaView style={[styles.container, containerStyle]} >
                {this.renderHeader()} 
            </SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({
    container:{
        height:'7%',
        justifyContent:'center',
        backgroundColor:'#f6f6f6',
    },
    imageStyle :{
        width:'30%', 
        aspectRatio:4.3, 
    },
    textStyle:{
        fontSize: 32, 
    },
    buttonStyle:{
        justifyContent:'flex-end',
    },
    rowStyle:{
        flexDirection:'row', 
        justifyContent:'space-between',
        alignItems:'center',
        marginRight:'2%',
        marginLeft:'2%',
        paddingBottom:'2%'
    },
    iconStyle:{
        padding:'2%',
    }
});

export {Header};