import React, {Component} from 'react'; //Knows how to use components (The backend)
import {Actions} from 'react-native-router-flux'; //Knows how to put stuff on the UI (The front end)
import Button from 'react-native-button';
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, ScrollView, Image, KeyboardAvoidingView} from 'react-native'; //default components
import firebase from 'firebase';

import { TextField } from 'react-native-material-textfield';
import {SectionList} from '../../common/components/';


class DeliveryBid extends Component {
//Adding note just to test why my github user doesn't appear
//Retesting with email
    constructor(){
        super();
        this.state = {
            currentBid: '2.99', //This is the current bid from all delivery people,
            time: '2min 5sec', //this is the time remaining for the bid
            bid:'', //This is the current delivery person's bid
            deliveryId: '', //The delivery making the bid
            orderId: '', //The order the delivery is bidding on. Note, we can pull customerId from the orderId
            customerAddress: '' //We need this information for routing/estimated time arrival
            //This gets passed into the google API, along with the current delivery person's address.
            //Then the google API handles the ETA/routing
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
            <SafeAreaView style={styles.container}>
                <Text style={{fontSize: 30, textAlign: 'center'}}>Open Delivery</Text>
                <Text style={{marginVertical: 20}}> </Text> 
                <Text style={{fontSize: 25, textAlign: 'center'}}>Current Bid: ${this.state.currentBid}</Text>
                <Text style={{fontSize: 25, textAlign: 'center'}}>Time Remaining: {this.state.time}</Text>
                
                {/** We will also need some logic to handle that the user does not input anything > than the current bid/ that it gets rejected */
                /** We can use a Queue to process the most recent bid */}

                <TextField
                    label="Bid"
                    value ={this.state.tip}
                    onChangeText= {(text)=> this.onFieldChanged('bid', text)}
                />
                

                <Button
                    onPress={() => this.onSubmit()}  
                    containerStyle={{bottom:0}}
                    style={{backgroundColor:'#66a82d', padding:10, color:'white', fontWeight:'bold', marginTop:20, alignSelf:'center'}} >
                    Bid
                </Button>

            </SafeAreaView>
        );
    }


}


const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: 'white'
    }
  });


export default DeliveryBid; 
