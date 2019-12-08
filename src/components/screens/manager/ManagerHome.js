import React, {Component} from 'react'; // default imports
import {Actions} from 'react-native-router-flux'; //Actions simply navigates to different screens
import Button from 'react-native-button'; // another dependency
import { connect } from 'react-redux'; // manages data flow (dont need to understand)
import { TextField } from 'react-native-material-textfield'; //dependency online
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, ScrollView, Image, KeyboardAvoidingView} from 'react-native'; //default components
import ImagePicker from 'react-native-image-crop-picker'; // this another dependency for photo gallery
import firebase from 'firebase';
import RNFetchBlob from 'rn-fetch-blob'
import ManagerRegister from './ManagerRegister';
import ManagerInfo from './ManagerInfo';
import {SectionList} from '../../common/components/';


class ManagerHome extends Component{
  constructor(){
    super();
    this.state = {

    }
  }

  componentDidMount = () => {

  }

  render(){
    return (
      <SafeAreaView style={styles.container} >
        <ManagerInfo/>
      </SafeAreaView>
    );
  }
  
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  }
});


export default connect(null , {})(ManagerHome);


