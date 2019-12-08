import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';
import { StyleSheet, SafeAreaView, Text, View, FlatList} from 'react-native';
import firebase from 'firebase';
import {SectionList} from '../../common/components/';


class CustomerShoppingCart extends Component {

    constructor(){
        super();
        this.state = {
            //Here we list out the menu items/objects. Each menu item has the name. 
            //Note we categoize by dish type.
            cart:[{name: 'Dumplings', price:'12.99'}, {name: 'Moon Cake', price:'3.56'}, {name: 'Lo Mein', price:'4.38'}]
        
        }
    }

    //A function to handle button request. In this case, rate.
    onRequest = () => {

    }

    //Navigate to the page of the Food, based on the food item clicked. 
    //This is so we can see the details of the food!
    onTitlePressed = () => {

    }

    //Goes to the form that creates a new food
    goToShoppingCart = () => {

    }


    //Add food item to shopping cart.
    onAdd = () => {

    }


    render(){
        return(
            <SafeAreaView style={styles.container}>
            <View style={{justifyContent: 'center'}}>
                <Text style={{fontSize: 35, textAlign: 'center'}}>Shopping Cart</Text>
            </View>
            <Text style={{marginVertical: 20}}> </Text>

            {/* This is the list of items that the cook currently has on the menu! */}
            <View style={{marginVertical: 10}}>

                <View style={{marginHorizontal: 10, flexDirection: 'row', flexWrap: 'wrap', borderWidth: 1, padding: 7, backgroundColor:'#6f2da8'}}>
                    <View style={{ textAlign: 'center', width: '100%'}}>
                        <Text style={{color:'white', textAlign: 'center', fontSize: 20}}>Your Cart</Text>
                    </View>
                </View>
                {
                    this.state.cart.map( (cartItem) =>{
                        return ( 
                            <View style={{marginHorizontal: 10, flexDirection: 'row', flexWrap: 'wrap', borderWidth: 1, padding: 3}}>
                                <View style={{ textAlign: 'center', width: '33%'}}>
                                    <Text 
                                    style={{alignSelf:'center', padding:10, fontSize: 20, color: 'black', textAlign: 'center'}}>{cartItem.name}  </Text>
                                </View>
                                <View style={{ width: '33%'}}>
                                    <Button 
                                        onPress={() => this.onAdd()}  
                                        containerStyle={{bottom:0}}
                                        style={{backgroundColor:'#cc0000', padding:10, color:'white', fontWeight:'bold', alignSelf:'center'}} 
                                    > 
                                        Remove
                                        </Button>
                                </View>
                                <View style={{ textAlign: 'center', width: '33%'}}>
                                    <Text 
                                    style={{alignSelf:'center', padding:10, fontSize: 20, color: 'black', textAlign: 'center'}}>${cartItem.price}  </Text>
                                </View>
                            </View>
                        
                        );
                    })
                }

                </View>

                <View style={{marginHorizontal: 10, flexDirection: 'row', flexWrap: 'wrap', padding: 3}}>
                    <View style={{width: '50%'}}>
                        <Text style={{padding:10, fontSize: 20, color: 'black', fontWeight: 'bold'}}> Total </Text>
                    </View>
                    <View style={{width: '50%'}}>
                        <Text style={{alignSelf:'center', padding:10, fontSize: 20, color: 'black', textAlign: 'center'}}>$20.93</Text> 
                    </View>
                </View>


               

                



                <Button 
                    onPress={() => this.goToShoppingCart()}  
                    containerStyle={{bottom:0}}
                    style={{backgroundColor:'#66a82d', padding:10, color:'white', fontWeight:'bold', marginTop:20, alignSelf:'center'}} 
                > 
                Order
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

export default CustomerShoppingCart;