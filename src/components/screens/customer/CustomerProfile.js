import React, {Component} from 'react'; //Knows how to use components (The backend)
import {Actions} from 'react-native-router-flux'; //Knows how to put stuff on the UI (The front end)
import Button from 'react-native-button';
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, ScrollView, Image, KeyboardAvoidingView} from 'react-native'; //default components
import firebase from 'firebase';

import { TextField } from 'react-native-material-textfield';
import {SectionList} from '../../common/components/';



/* If a user enters a rating < 3, they are then prompted to enter a complain */
class CustomerProfile extends Component {
    constructor(){
        super();
        this.state = {
            complaint:'', //this is the one sentence submission. Note we should probably add a check that makes sure they enter something. ==> TBD 

            foodId:'', //Maybe replace this with order ID? (No we should have a specific food)
            foodName: 'Sesame Chicken',
            cookId: '', //The cook that makes that specific food. (Though we can just store the foodId and then on the manager's side pull this/ on the cooks side just pull ratings for all thier food.)
            //Leaving cookId for now though it's something we can get back to
            customerId: '' //(The customer sending the rating)
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
            <SafeAreaView>
                <Text style={{textAlign: 'center'}}>Profile</Text>
            

            </SafeAreaView>
        );
    }


}


export default CustomerProfile; 
