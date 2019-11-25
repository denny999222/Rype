import React, {Component} from 'react'; // default imports
import {Actions} from 'react-native-router-flux'; //Actions simply navigates to different screens
import Button from 'react-native-button'; // another dependency
import { connect } from 'react-redux'; // manages data flow (dont need to understand)
import { TextField } from 'react-native-material-textfield'; //dependency online
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, ScrollView, Image, KeyboardAvoidingView} from 'react-native'; //default components
import ImagePicker from 'react-native-image-crop-picker'; // this another dependency for photo gallery
import firebase from 'firebase';
import RNFetchBlob from 'rn-fetch-blob'


class ManagerInfo extends Component{
  constructor(){
    super();
    this.state = {
      
    }
  }

  componentWillMount = () => {

  }

  render(){
    return (
      <SafeAreaView style={styles.container} >
        <Text style={{fontSize:30, fontWeight:'bold', textAlign:'center'}} > Restaurant Name </Text>
        <View style={{flexDirection:'row', borderWidth:.5, margin:20, alignItems:'center'}} >
            <View style={{flex:4}} >
                <Text style={{paddingLeft:10, paddingRight:10, paddingBottom:5, fontSize:11}} >
                    This is restaurant description. This is random bullshit placeholder for now sad asd asd asd as da.
                </Text>
                <Text style={{paddingLeft:10, paddingRight:10, paddingBottom:5}}>123-456-7890</Text>
                <Text style={{paddingLeft:10, paddingRight:10, paddingBottom:5, fontSize:11, color:'grey', fontStyle:'italic'}}>2135 E 16th St Brooklyn NY</Text>
            </View>
            <Text style={{fontSize:50, color:'blue', fontWeight:'bold', flex:1, }} > A </Text>
        </View>
      </SafeAreaView>
    );
  }
  
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    margin:10
  }
});


export default ManagerInfo;
