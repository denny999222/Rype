import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, Image} from 'react-native';

class RootScreen extends Component{

  render(){
    return (
      <SafeAreaView style={styles.container} >

        <Image source={require('../../assets/images/Rype_Logo.png')} style={{alignSelf:'center', marginTop:30, height:'25%', aspectRatio:2.5}} />

        <View style={{marginTop:80, justifyContent:'center',  bottom:0}} >
          <View style={{flexDirection:'row', justifyContent:'center', marginBottom:20,}} >
            <Button 
                onPress={ () => Actions.Login()} 
                color='white' 
                style={styles.buttonStyle} 
            > 
                LOGIN 
            </Button>
            <Button 
                onPress={() => Actions.SignUp()} 
                color='white' 
                style={styles.buttonStyle} 
            > 
                SIGNUP 
            </Button>
          </View>

          <TouchableOpacity onPress={() => {Actions.customer()}} style={{alignSelf:'center', justifyContent:'center', alignItems:'center'}}>
            <Text style={{textAlign:'center', color:'white', fontStyle:'italic', fontWeight:'bold', fontSize:16}} > Continue as Visitor </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
  
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#188a32'
  },
  buttonStyle:{
      backgroundColor:'white',
      color:'#188a32',
      padding:10,
      marginRight:10
  }
});

export default RootScreen;
