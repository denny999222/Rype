import React, {Component} from 'react'; // default imports
import {Actions} from 'react-native-router-flux'; //Actions simply navigates to different screens
import Button from 'react-native-button'; // another dependency
import { connect } from 'react-redux'; // manages data flow (dont need to understand)
import { TextField } from 'react-native-material-textfield'; //dependency online
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, ScrollView, Image, KeyboardAvoidingView} from 'react-native'; //default components
import ImagePicker from 'react-native-image-crop-picker'; // this another dependency for photo gallery
import {Header} from '../../common/components/';
import firebase from 'firebase';


class ManageCustomers extends Component{
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return (
      <SafeAreaView style={styles.container} >
        <Header
            name='Login' 
            contentStyle={{fontSize:30, color:'black', fontWeight:'bold'}} 
            containerStyle={{backgroundColor:'#188a32'}}
            onPressLeft = {() => Actions.pop()}
        />
      </SafeAreaView>
    );
  }
  
};

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
});


export default ManageCustomers;


