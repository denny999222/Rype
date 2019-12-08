import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';
import { StyleSheet, SafeAreaView, Text, View, FlatList} from 'react-native';
import firebase from 'firebase';
import {SectionList} from '../../common/components/';


class CustomerMenu extends Component {

    constructor(){
        super();
        this.state = {
            //Here we list out the menu items/objects. Each menu item has the name. 
            //Note we categoize by dish type.
            appetizer:[{name: 'Dumplings', price: '12.99'}, {name: 'Sesame Chicken', price: '7.59'}, {name: 'Lo Mein', price: '4.38'}],
            entree:[{name: 'Fried Chicken', price: '5.99'}, {name: 'Pad Thai', price: '1.27'}, {name: 'Chicken Teryiki', price: '5.00'}],
            dessert: [{name: 'Moon Cake', price:'2.77'}, {name:'Sweet Rice Balls', price:'3.88'}],
        
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
                <Text style={{fontSize: 35, textAlign: 'center'}}>Menu</Text>
            </View>


            {/* This is the list of items that the cook currently has on the menu! */}
            <View style={{marginVertical: 10}}>

                <View style={{marginHorizontal: 10, flexDirection: 'row', flexWrap: 'wrap', borderWidth: 1, padding: 7, backgroundColor:'#66a82d'}}>
                    <View style={{ textAlign: 'center', width: '100%'}}>
                        <Text style={{color:'white', textAlign: 'center', fontSize: 20}}>Appetizer</Text>
                    </View>
                </View>
                {
                    this.state.appetizer.map( (appetizerItem) =>{
                        return ( 
                            <View style={{marginHorizontal: 10, flexDirection: 'row', flexWrap: 'wrap', borderWidth: 1, padding: 3}}>
                                <View style={{ textAlign: 'center', width: '33%'}}>
                                    <Text 
                                    style={{alignSelf:'center', padding:10, fontSize: 20, color: 'black', textAlign: 'center'}}>{appetizerItem.name}  </Text>
                                </View>
                                <View style={{ textAlign: 'center', width: '33%'}}>
                                    <Text
                                    style={{alignSelf:'center',  padding:10, fontSize: 20, color: 'black', textAlign: 'center'}}>${appetizerItem.price}  </Text>
                                </View>
                                <View style={{ width: '33%'}}>
                                    <Button 
                                        onPress={() => this.onAdd()}  
                                        containerStyle={{bottom:0}}
                                        style={{backgroundColor:'#6f2da8', padding:10, color:'white', fontWeight:'bold', alignSelf:'center'}} 
                                    > 
                                        Add
                                        </Button>
                                </View>
                            </View>
                        
                        );
                    })
                }

                </View>


                <View style={{marginVertical: 10}}> 

                <View style={{marginHorizontal: 10, flexDirection: 'row', flexWrap: 'wrap', borderWidth: 1, padding: 7, backgroundColor:'#66a82d'}}>
                    <View style={{ textAlign: 'center', width: '100%'}}>
                        <Text style={{color:'white', textAlign: 'center', fontSize: 20}}>Entree</Text>
                    </View>
                </View>
                {
                    this.state.entree.map( (entreeItem) =>{
                        return ( 
                            <View style={{marginHorizontal: 10, flexDirection: 'row', flexWrap: 'wrap', borderWidth: 1, padding: 3}}>
                                <View style={{ textAlign: 'center', width: '33%'}}>
                                    <Text
                                    style={{alignSelf:'center', padding:10, fontSize: 20, color: 'black', textAlign: 'center'}}>{entreeItem.name}  </Text>
                                </View>
                                <View style={{ textAlign: 'center', width: '33%'}}>
                                    <Text
                                    style={{alignSelf:'center',  padding:10, fontSize: 20, color: 'black', textAlign: 'center'}}>${entreeItem.price}  </Text>
                                </View>
                                <View style={{ width: '33%'}}>
                                    <Button 
                                        onPress={() => this.onAdd()}  
                                        containerStyle={{bottom:0}}
                                        style={{backgroundColor:'#6f2da8', padding:10, color:'white', fontWeight:'bold', alignSelf:'center'}} 
                                    > 
                                        Add
                                        </Button>
                                </View>
                            </View>
                        
                        );
                    })
                }

                </View>

                <View style={{marginVertical: 10}}> 

                <View style={{marginHorizontal: 10, flexDirection: 'row', flexWrap: 'wrap', borderWidth: 1, padding: 7, backgroundColor:'#66a82d'}}>
                    <View style={{ textAlign: 'center', width: '100%'}}>
                        <Text style={{color:'white', textAlign: 'center', fontSize: 20}}>Dessert</Text>
                    </View>
                </View>
                {
                    this.state.dessert.map( (dessertItem) =>{
                        return ( 
                            <View style={{marginHorizontal: 10, flexDirection: 'row', flexWrap: 'wrap', borderWidth: 1, padding: 3}}>
                                <View style={{ textAlign: 'center', width: '33%'}}>
                                    <Text
                                    style={{alignSelf:'center',  padding:10, fontSize: 20, color: 'black', textAlign: 'center'}}>{dessertItem.name}  </Text>
                                </View>
                                <View style={{ textAlign: 'center', width: '33%'}}>
                                    <Text
                                    style={{alignSelf:'center',  padding:10, fontSize: 20, color: 'black', textAlign: 'center'}}>${dessertItem.price}  </Text>
                                </View>
                                
                                <View style={{ width: '33%'}}>
                                    <Button 
                                        onPress={() => this.onAdd()}  
                                        containerStyle={{bottom:0}}
                                        style={{backgroundColor:'#6f2da8', padding:10, color:'white', fontWeight:'bold', alignSelf:'center'}} 
                                    > 
                                        Add
                                        </Button>
                                </View>
                            </View>
                        
                        );
                    })
                }

                </View>




                <Button 
                    onPress={() => this.goToShoppingCart()}  
                    containerStyle={{bottom:0}}
                    style={{backgroundColor:'#66a82d', padding:10, color:'white', fontWeight:'bold', marginTop:20, alignSelf:'center'}} 
                > 
                Go to Shopping Cart
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

export default CustomerMenu;