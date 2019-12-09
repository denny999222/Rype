import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';
import { StyleSheet, SafeAreaView, Text, View, FlatList} from 'react-native';
import firebase from 'firebase';
import {SectionList} from '../../common/components/';


class DeliveryBidList extends Component {

    constructor(){
        super();
        this.state = {
            //Here we list out the customers that the deliver person has dealed with. 
            customers: [{name: 'John', theirRating: '3', yourRating: '2'}, 
                        {name: 'Jack', theirRating: '5', yourRating: '5'},
                        {name: 'James', theirRating: '1', yourRating: '5'}, 
                        {name: 'Jenny', theirRating: '3', yourRating: '3'}, 
                        {name: 'Jeffery', theirRating: '4', yourRating: '1'}, 
                        {name: 'Jaime', theirRating: '4', yourRating: '2'}]
        }
    }

    //A function to handle button request. In this case, rate.
    onRequest = () => {

    }

    //Navigate to the page of the Food, based on the food item clicked. 
    //This is so we can see the details of the food!
    onTitlePressed = () => {

    }

    goBack= () => {

    }

    render(){
        return(
            <SafeAreaView style={styles.container}>
            <View style={{justifyContent: 'center'}}>
                <Text style={{fontSize: 35, textAlign: 'center'}}>List of Posted Deliveries</Text>
            </View>

            <Text style={{marginVertical: 20}}></Text>


            {/* This is the list of items that the cook currently has on the menu! */}
            <View style={{marginVertical: 10}}>

                <View style={{marginHorizontal: 10, flexDirection: 'row', flexWrap: 'wrap', borderWidth: 1, padding: 7, backgroundColor:'white'}}>
                    <View style={{ textAlign: 'center', width: '33%'}}>
                        <Text style={{textAlign: 'center', fontSize: 20}}>Customer's Name</Text>
                    </View>
                    <View style={{ textAlign: 'center', width: '33%'}}>
                        <Text style={{textAlign: 'center', fontSize: 20}}>Their Rating</Text>
                    </View>
                    <View style={{ textAlign: 'center', width: '33%'}}>
                        
                    </View>

                </View>
                {
                    this.state.customers.map( (customer) =>{
                        return ( 
                            <View style={{marginHorizontal: 10, flexDirection: 'row', flexWrap: 'wrap', borderWidth: 1, padding: 3}}>
                                <View style={{ textAlign: 'center', width: '33%'}}>
                                    <Text 
                                    style={{alignSelf:'center', padding:10, fontSize: 20, color: 'black', textAlign: 'center'}}>{customer.name}</Text>
                                </View>
                                <View style={{ textAlign: 'center', width: '33%'}}>
                                    <Text
                                    style={{alignSelf:'center',  padding:10, fontSize: 20, color: 'black', textAlign: 'center'}}>{customer.theirRating}/5</Text>
                                </View>
                                <View style={{ width: '33%'}}>
                                <Button 
                                    onPress={() => Actions.DeliveryBid()}  
                                    containerStyle={{bottom:0}}
                                    style={{backgroundColor:'#66a82d', padding:10, color:'white', fontWeight:'bold', marginTop:20, alignSelf:'center'}} 
                                > 
                                Bid
                                </Button>
                                </View>
                            </View>
                        
                        );
                    })
                }

                </View>


                




                <Button 
                    onPress={() => Actions.DeliveryHome()}  
                    containerStyle={{bottom:0}}
                    style={{backgroundColor:'#66a82d', padding:10, color:'white', fontWeight:'bold', marginTop:20, alignSelf:'center'}} 
                > 
                Go Back
                </Button>






            </SafeAreaView>

        )

    }

};



// these are styles
// This is how it would look like default in every component if you want styling
const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: 'white'
    }
  });

export default DeliveryBidList;