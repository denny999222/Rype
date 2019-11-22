import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';
import { StyleSheet, SafeAreaView, Text, View} from 'react-native';

class RootScreen extends Component{

  render(){
    return (
      <SafeAreaView style={styles.container} >
        <Text style={{fontSize:40, textAlign:'center'}} >  RYPE </Text>
          <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:20}} >
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
      </SafeAreaView>
    );
  }
  
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'space-between'
  },
  buttonStyle:{
      backgroundColor:'blue',
      color:'white',
      padding:10,
  }
});

export default RootScreen;
