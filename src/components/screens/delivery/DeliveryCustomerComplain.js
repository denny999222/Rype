import React, {Component} from 'react'; //Knows how to use components (The backend)
import {Actions} from 'react-native-router-flux'; //Knows how to put stuff on the UI (The front end)
import Button from 'react-native-button';
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, ScrollView, Image, KeyboardAvoidingView} from 'react-native'; //default components
import firebase from 'firebase';

import { TextField } from 'react-native-material-textfield';
import {SectionList} from '../../common/components/';



/* If a user enters a rating < 3, they are then prompted to enter a complain */
class DeliveryCustomerComplain extends Component {
    constructor(){
        super();
        this.state = {
            complaint:'', //this is the one sentence submission. Note we should probably add a check that makes sure they enter something. ==> TBD 
            customerId: '', //connect the customer 
            deliveryId: ''  //the deliver person submiting the form

        }
    }

    //If user changes the text in input, always store current in state.
    onFieldChanged = (state, text) => {
        //this is a function inherited from Component. It simply modifies one of the properties inside state
        this.setState({[state]: text}); 
    }


    //When pressed, the complaint should be added to firebase, where the manager can then view all complains
    onSubmit = () => {

    }

    render(){
        return(
            <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
                <Text>Customer Complaint</Text>
                <TextField
                    label="Complaint"
                    value ={this.state.complaint}
                    onChangeText= {(text)=> this.onFieldChanged('complaint', text)}
                />



                <Button 
                    onPress={() => Actions.DeliveryHome()}>
                    Submit
                </Button>

            </SafeAreaView>
        );
    }


}


export default DeliveryCustomerComplain; 
