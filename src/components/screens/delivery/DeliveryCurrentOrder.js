import React, {Component} from 'react'; //Knows how to use components (The backend)
import {Actions} from 'react-native-router-flux'; //Knows how to put stuff on the UI (The front end)
import Button from 'react-native-button';
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, ScrollView, Image, KeyboardAvoidingView} from 'react-native'; //default components
import firebase from 'firebase';

import { TextField } from 'react-native-material-textfield';
import {SectionList} from '../../common/components/';


class DeliveryCurrentOrder extends Component {
//Adding note just to test why my github user doesn't appear
//Retesting with email
    constructor(){
        super();
        this.state = {
            estimatedTimeArrival: '20min 5sec', //this is the time remaining ==> Pull from the Google API. 
            deliveryId: '', //The delivery user making the current delivery
            deliveryName: '', //Show the name of the delivery person.
            orderId: '', //The order the delivery person is delivering
            //Note we can get more customer information from Order ID (Because it's tied to a delivery ID and customer ID)
            customerName: 'John',
            customerAddress: '' //For Google API ETA
            //This gets passed into the google API, along with the current delivery person's location.
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
                <Text style={{fontSize: 30, textAlign: 'center'}}>Current Delivery to {this.state.customerName}</Text>
                <Text style={{marginVertical: 20}}> </Text> 
                <View style={{marginHorizontal: 15}}>
                    <Image source={{uri:'https://i.stack.imgur.com/JHHER.png'}}  style={{ width:'100%', aspectRatio:1, alignSelf:'center'}} />
                </View>
                <Text style={{marginVertical: 20}}> </Text> 
                <Text style={{fontSize: 25, textAlign: 'center'}}>Estimated Time Remaining:</Text>
                <Text style={{fontSize: 25, textAlign: 'center'}}>{this.state.estimatedTimeArrival}</Text>

                {/** We will also need some logic to handle that the user does not input anything > than the current bid/ that it gets rejected */
                /** We can use a Queue to process the most recent bid */}


                <Button
                    onPress={() => this.onSubmit()}  
                    containerStyle={{bottom:0}}
                    style={{backgroundColor:'#66a82d', padding:10, color:'white', fontWeight:'bold', marginTop:20, alignSelf:'center'}} >
                    Mark as Complete 
                </Button>
                {/** Once marked as complete, it redirects us to rating the delivery person */}

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


export default DeliveryCurrentOrder; 
