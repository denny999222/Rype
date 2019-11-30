import React, {Component} from 'react'; //Knows how to use components (The backend)
import {Actions} from 'react-native-router-flux'; //Knows how to put stuff on the UI (The front end)
import Button from 'react-native-button';
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, ScrollView, Image, KeyboardAvoidingView} from 'react-native'; //default components
import firebase from 'firebase';

import { TextField } from 'react-native-material-textfield';
import {SectionList} from '../../common/components/';


class CookComplain extends Component {
//Adding note just to test why my github user doesn't appear
//Retesting with email
    constructor(){
        super();
        this.state = {
            complaint:'',
            cookId: '',
            ingredientId: '' //This is also so we can connect to the supplier who bought it and then display it to the manager (In case they want to fire someone)
        }
    }

    //If user changes the text in input, always store current in state.
    onFieldChanged = (state, text) => {
        //this is a function inherited from Component. It simply modifies one of the properties inside state
        this.setState({[state]: text}); 
    }


    render(){
        return(
            <SafeAreaView>
                <Text>Explain Issue</Text>
                <TextField
                    label="Complaint"
                    value ={this.state.complaint}
                    onChangeText= {(text)=> this.onFieldChanged('complaint', text)}


                />

                <Button>
                    Submit
                </Button>

            </SafeAreaView>
        );
    }


}


export default CookComplain; 
