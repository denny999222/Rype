import React, {Component} from 'react'; //Knows how to use components (The backend)
import {Actions} from 'react-native-router-flux'; //Knows how to put stuff on the UI (The front end)
import Button from 'react-native-button';
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, ScrollView, Image, KeyboardAvoidingView} from 'react-native'; //default components
import firebase from 'firebase';
import {Header} from '../../common/components'
import { TextField } from 'react-native-material-textfield';
import {SectionList} from '../../common/components/';


class CookProfile extends Component {
    c


    render(){
        return(
            <SafeAreaView style={{flex:1}} >
                <Header
                    name='Profile'
                    contentStyle={{fontSize:30, color:'white', fontWeight:'bold', fontFamily:'Cochin'}} 
                    containerStyle={{backgroundColor:'#188a32'}}
                    rightButton={<View/>} 
                    onRightPress = {() => null}
                />
            </SafeAreaView>
        );
    }


}


export default CookProfile; 
