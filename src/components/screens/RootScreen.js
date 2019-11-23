import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';
import { StyleSheet, SafeAreaView, Text, View} from 'react-native';

class RootScreen extends Component{

  render(){
    return (
      <SafeAreaView style={styles.container} >
        <Text style={{fontSize:40, textAlign:'center'}} >  LOGO HERE </Text>
        <View style={{marginTop:80, justifyContent:'center', alignItems:'center'}} >
          <View style={{flexDirection:'row', justifyContent:'center', marginBottom:20}} >
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
          <Text style={{textAlign:'center', color:'#2954e3', fontStyle:'italic', fontWeight:'bold'}} > Continue as Visitor </Text>
        </View>
      </SafeAreaView>
    );
  }
  
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center'
  },
  buttonStyle:{
      backgroundColor:'#188a32',
      color:'white',
      padding:10,
      marginRight:10
  }
});

export default RootScreen;
