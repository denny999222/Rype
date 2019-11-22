import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';
import { StyleSheet, SafeAreaView, Text, View} from 'react-native';

class CustomerHome extends Component{

  render(){
    return (
      <SafeAreaView style={styles.container} >
          <Text stlye={{fontSize:40}} > CUSTOMER HOME! </Text>
      </SafeAreaView>
    );
  }
  
};

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
});

export default CustomerHome;
