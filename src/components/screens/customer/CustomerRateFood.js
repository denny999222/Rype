import React, {Component} from 'react'; //Knows how to use components (The backend)
import {Actions} from 'react-native-router-flux'; //Knows how to put stuff on the UI (The front end)
import Button from 'react-native-button';
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, ScrollView, Image, KeyboardAvoidingView} from 'react-native'; //default components
import firebase from 'firebase';

import { TextField } from 'react-native-material-textfield';
import {SectionList} from '../../common/components/';


class CustomerRateFood extends Component {
//Adding note just to test why my github user doesn't appear
//Retesting with email
    constructor(){
        super();
        this.state = {
            foodId:'', //Maybe replace this with order ID? (No we should have a specific food)
            foodName: 'Sesame Chicken',
            cookId: '', //The cook that makes that specific food. (Though we can just store the foodId and then on the manager's side pull this/ on the cooks side just pull ratings for all thier food.)
            //Leaving cookId for now though it's something we can get back to
            customerId: '', //(The customer sending the rating)
            rate: ''
        }
    }

    //If user changes the text in input, always store current in state.
    onFieldChanged = (state, text) => {
        //this is a function inherited from Component. It simply modifies one of the properties inside state
        this.setState({[state]: text}); 
    }

    //Send the rating to the database
    onSubmit = () => {
        /* Adding notes for you Denny when you get to this -- Skip if its too confusing. 
        -- Mostly to elaborate on if we need just foodId or if we also need cookId
                -- either approach works, just which you think is easier to code*/
        /* There are two approaches we can take when storing the data on firebase
            So we have an order (the orders folder/table). Which has the foodId/ customerId 
                We can either include cookId (data redunacy as a food is linked to a cook)
                    but may be easier for us to just pull and push and do less data joins
                Or we can not include it  and just join the values.   
                    Ie, when pulling data on managers side, we can say give me all complains by cook, and link thier food
                    Or when determining pay/warnings, say average ratings, group by + join by cookid, and tie them to each cook. */
    }


    render(){
        return(
            <SafeAreaView>
                <Text style={{fontSize: 30, textAlign: 'center'}}>Rate {this.state.foodName}</Text>
                {/* Spacing */}
                <Text style={{fontSize: 30, textAlign: 'center'}}> </Text>

                {/* Replace the next two lines with the star system! */}
                <Text style={{fontSize: 50, textAlign: 'center', color:'brown'}}>Rate Food</Text>
                <Text style={{fontSize: 25, textAlign: 'center'}}>(The Star Ratings Here)</Text>

                {/* Spacing */}
                <Text style={{fontSize: 30, textAlign: 'center'}}> </Text>
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


export default CustomerRateFood; 
