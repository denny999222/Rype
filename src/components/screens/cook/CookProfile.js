import React, {Component} from 'react'; //Knows how to use components (The backend)
import {Actions} from 'react-native-router-flux'; //Knows how to put stuff on the UI (The front end)
import Button from 'react-native-button';
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, ScrollView, Image, KeyboardAvoidingView} from 'react-native'; //default components
import firebase from 'firebase';
import {Header} from '../../common/components'
import { TextField } from 'react-native-material-textfield';
import {SectionList} from '../../common/components/';


class CookProfile extends Component {
  constructor(){
    super();
    this.state = {
      name: 'Cook',
      salary: '15',
      warning: '2',
      menuList: ['Pizza', 'Burger', 'Taco', 'Pasta'], // food Name
      supplyList: ['Tomoatoes','Cucumbers','Salt','Pepper'] //supplies
    }
  }

    render(){
        return(
            <SafeAreaView style={{flex:1, backgroundColor: 'white'}} >
                <Header
                    name='Profile'
                    contentStyle={{fontSize:30, color:'white', fontWeight:'bold', fontFamily:'Cochin'}} 
                    containerStyle={{backgroundColor:'#188a32'}}
                    rightButton={<View/>} 
                    onRightPress = {() => null}
                />
                {/*<Text style={{fontSize:40, textAlign:'center', marginBottom: 15}} > HOME </Text>*/}
                <Text style={{fontSize:40, textAlign:'center', marginBottom: 15}}>Welcome, {this.state.name} </Text>
                <Text style={{fontSize:20, marginBottom: 15}}>Salary: ${this.state.salary}</Text>
                <Text style={{fontSize:20, marginBottom: 15}}>Number of warnings: {this.state.warning}</Text>

                
            </SafeAreaView>
        );
    }


}


export default CookProfile; 