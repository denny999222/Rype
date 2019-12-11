import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  KeyboardAvoidingView,
} from 'react-native'; //default components
import firebase from 'firebase';

import {TextField} from 'react-native-material-textfield';
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
//Send the ingredient to the database./ Add new ingredient record
onSubmit = () => {};

//If user changes the text in input, always store current in state.
onFieldChanged = (state, text) => {
  //this is a function inherited from Component. It simply modifies one of the properties inside state
  this.setState({[state]: text});
};

onGradeSelected = selectedType => {
  // this makes the selected letter grade green when selected
  if (selectedType === this.state.food_category) {
    return {
      backgroundColor: '#66a82d',
      borderWidth: 0.5,
      justifyContent: 'center',
    };
  } else {
    return {
      backgroundColor: 'white',
      borderWidth: 0.5,
      justifyContent: 'center',
    };
  }
};

onTextColorChange = selectedType => {
  if (selectedType === this.state.food_category) {
    return {
      color: 'white',
      paddingBottom: 5,
      paddingTop: 5,
      fontWeight: 'bold',
    };
  } else {
    return {color: 'black', paddingBottom: 5, paddingTop: 5};
  }
};

//Add the ingredient to the food
onAdd = () => {};




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

    
                <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Text style={{fontSize: 18}}>Route: </Text>

            <TouchableOpacity
              onPress={() => this.setState({food_category: 'Lunch'})}
              style={this.onGradeSelected('Lunch')}>
              <Text style={this.onTextColorChange('Lunch')}> Good </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({food_category: 'Dinner'})}
              style={this.onGradeSelected('Dinner')}>
              <Text style={this.onTextColorChange('Dinner')}> Busy </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({food_category: 'Dessert'})}
              style={this.onGradeSelected('Dessert')}>
              <Text style={this.onTextColorChange('Dessert')}> Closed </Text>
            </TouchableOpacity>
          
          </View>







                <Button
                    onPress={() => Actions.DeliveryHome()}  
                    containerStyle={{bottom:0}}
                    style={{backgroundColor:'purple', padding:10, color:'white', fontWeight:'bold', marginTop:20, alignSelf:'center'}} >
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
