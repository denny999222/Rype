import React, {Component} from 'react';
import {View, Text, StyleSheet } from 'react-native';



//The purpose of this componenet is to create a complain page that renders after Registered Customer or Cook or Delivery put in a rating <3
//They are then directed to input an issue, which then gets sense to the Manager. 
//The data first gets stored on firebase, ofc.



//Note, I never tested this page out. Was taking too long to load on Xcode.
class Complain extends Componenet{

    render(){
        return(
            <Text>Hi, I created my first 'Parent'/'Child' Component</Text>
        )
    }


};

export {Complain}; 
