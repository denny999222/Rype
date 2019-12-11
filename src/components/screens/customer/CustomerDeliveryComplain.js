import React, {Component} from 'react'; //Knows how to use components (The backend)
import {Actions} from 'react-native-router-flux'; //Knows how to put stuff on the UI (The front end)
import Button from 'react-native-button';
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, ScrollView, Image, FlatList} from 'react-native'; //default components
import firebase from 'firebase';
import {Header} from '../../common/components/';
import { TextField } from 'react-native-material-textfield';
import {SectionList} from '../../common/components/';
import Icon from 'react-native-vector-icons/FontAwesome5';
import StarRating from 'react-native-star-rating';
import {addCart} from '../../../actions/CustomerActions';
import { connect } from 'react-redux';
import { thisExpression } from '@babel/types';


/* If a user enters a rating < 3, they are then prompted to enter a complain */
class CustomerDeliveryComplain extends Component {
  constructor() {
    super();
    this.state = {
      complaint: '', //this is the one sentence submission. Note we should probably add a check that makes sure they enter something. ==> TBD
      customerId: '', //connect the customer submiting the form
      deliveryId: '', //with the deliver person
    };
  }

  //If user changes the text in input, always store current in state.
  onFieldChanged = (state, text) => {
    //this is a function inherited from Component. It simply modifies one of the properties inside state
    this.setState({[state]: text});
  };

  //When pressed, the complaint should be added to firebase, where the manager can then view all complains
  onSubmit = () => {};

  render() {
    
    return (
      <SafeAreaView style= {{backgroundColor: 'white', flex: 1}}>
        <Text style={{fontSize: 30, textAlign: 'center'}}>Explain Delivery Issue</Text>
    
        
        
        
        <TextField
          label="Complaint"
          value={this.state.complaint}
          onChangeText={text => this.onFieldChanged('complaint', text)}
          underlineColorIos="transparent"
          style={{borderColor: 'transparent'}}
        />




        <Button 
                        onPress={() => Actions.CustomerHome()} 
                        containerStyle={{bottom:0}}
                        style={{borderRadius:20, overflow:'hidden', backgroundColor:'purple', padding:10, paddingLeft: 50, paddingRight: 50, color:'white', fontWeight:'bold', marginTop:20, alignSelf:'center'}} 
                    > 
                        Submit
                    </Button>
      </SafeAreaView>
    );
  }
}

export default CustomerDeliveryComplain;

