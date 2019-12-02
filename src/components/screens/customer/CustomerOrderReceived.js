import React, {Component} from 'react'; //Knows how to use components (The backend)
import {Actions} from 'react-native-router-flux'; //Knows how to put stuff on the UI (The front end)
import Button from 'react-native-button';
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, ScrollView, Image, KeyboardAvoidingView} from 'react-native'; //default components
import firebase from 'firebase';

import { TextField } from 'react-native-material-textfield';
import {SectionList} from '../../common/components/';


class CustomerOrderReceived extends Component {
//Adding note just to test why my github user doesn't appear
//Retesting with email
    constructor(){
        super();
        this.state = {
            tip:'',
            deliveryId: '',
            customerId: '',
            rate: ''
        }
    }

    //If user changes the text in input, always store current in state.
    onFieldChanged = (state, text) => {
        //this is a function inherited from Component. It simply modifies one of the properties inside state
        this.setState({[state]: text}); 
    }

    //Send the tip/rating to the database
    onSubmit = () => {

    }


    render(){
        return(
            <SafeAreaView>
                <Text style={{fontSize: 30, textAlign: 'center'}}>Your order has been received!</Text>
                <TextField
                    label="Tip"
                    value ={this.state.tip}
                    onChangeText= {(text)=> this.onFieldChanged('tip', text)}


                />
                <Text style={{fontSize: 25, textAlign: 'center'}}>Rate Delivery</Text>
                <Text style={{fontSize: 25, textAlign: 'center'}}>The Star Ratings Here</Text>

                <Button
                    onPress={() => this.onSubmit()}  
                    containerStyle={{bottom:0}}
                    style={{backgroundColor:'#66a82d', padding:10, color:'white', fontWeight:'bold', marginTop:20, alignSelf:'center'}} >
                    Submit
                </Button>

            </SafeAreaView>
        );
    }


}


export default CustomerOrderReceived; 
