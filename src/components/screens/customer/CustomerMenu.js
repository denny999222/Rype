import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, ScrollView, Image, Dimensions} from 'react-native'; //default components
import ImagePicker from 'react-native-image-crop-picker'; // this another dependency for photo gallery
import firebase from 'firebase';
import {Header} from '../../common/components';
import RNFetchBlob from 'rn-fetch-blob';
import MapViewDirections from 'react-native-maps-directions';
import MapView from 'react-native-maps';
import CustomerShoppingCart from './CustomerShoppingCart';


class CustomerMenu extends Component {

    constructor(){
        super();
        this.state = {
            //Here we list out the menu items/objects. Each menu item has the name. 
            //Note we categoize by dish type.
            appetizer:[{name: 'Dumplings', price: '12.99', image:{uri:'https://www.chinasichuanfood.com/wp-content/uploads/2018/01/how-to-make-dumplings-181.jpg'}}, 
                        {name: 'Sesame Chicken', price: '7.59', image:{uri:'https://www.dinneratthezoo.com/wp-content/uploads/2015/04/sesame-chicken-1.jpg'}}, 
                        {name: 'Lo Mein', price: '4.38',  image:{uri:'https://dinnerthendessert.com/wp-content/uploads/2018/03/Chicken-Lo-Mein-3-500x500.jpg'}}, 
                        {name: 'Tacos', price: '12.99',  image:{uri:'https://www.inspiredtaste.net/wp-content/uploads/2018/03/Easy-Ground-Pork-Tacos-Recipe-3-1200.jpg'}}, 
                        {name: 'Fries', price: '12.99',  image:{uri:'https://www.spendwithpennies.com/wp-content/uploads/2013/10/Crispy-Oven-Fries-SpendWithPennies-27-480x270.jpg'}}],
            entree:[{name: 'Fried Chicken', price: '5.99', image:{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbmVLqI5cptlhE27CbOF07M7RlhDbrc9YZKd5LcflipQaR_2R3'}}, 
                    {name: 'Pad Thai', price: '1.27', image:{uri:'https://hips.hearstapps.com/delish/assets/17/25/1498148145-delish-easy-pad-thai-horizontal-1024.jpg?crop=1xw%3A1xh%3Bcenter%2Ctop&resize=480%3A270'}}, 
                    {name: 'Chicken Teryiki', price: '5.00', image:{uri:'https://cafedelites.com/wp-content/uploads/2018/02/Easy-Teriyaki-Chicken-IMAGE-30.jpg'}}],
            dessert: [{name: 'Moon Cake', price:'2.77'}, {name:'Sweet Rice Balls', price:'3.88', image:{uri:'data:image/jpeg;base64,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'}}],
        
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
            <ScrollView style={styles.container} >
            <View style={{justifyContent: 'center'}}>
                <Text style={{fontSize: 35, textAlign: 'center', fontFamily: 'Cochin'}}>Menu</Text>
            </View>


            {/* This is the list of items that the cook currently has on the menu! */}
            <View style={{marginVertical: 10}} accessible={true} accessibilityLabel="This is the list of Appetizer food items!" accessibilityHint="A list of food items, with their price, and the option to add item to cart">

                {/** This view sets up the heading row for the container (The menu food type) */}
                <View style={{marginHorizontal: 10, flexDirection: 'row', flexWrap: 'wrap', padding: 7}}>
                    {/** Heading content */}
                    <View style={{ textAlign: 'center', width: '100%'}} accessible={true} accessibilityLabel="Appetizers">
                        <Text style={{ textAlign: 'center', fontSize: 30, fontFamily: 'Cochin', textDecorationLine:'underline' }}>Appetizer</Text>
                    </View>
                </View>
                {
                    this.state.appetizer.map( (appetizerItem) =>{
                        return ( 
                            
                            <View style={{marginVertical: 5, marginHorizontal: 5, flexDirection: 'row', flexWrap: 'wrap'}}>{/** This defines each row (the nested define the structure/content) */}
                            {/** Each row is split 25/75 ==> 25 image, 75 info  */}
                                {/** This is the image  */}
                                <View style={{width: '25%'}} accessible={true} accessibilityLabel={appetizerItem.name +"Image"}>
                                    <Image source={appetizerItem.image} style={{width:'100%', aspectRatio:1, alignSelf:'center', borderRadius: 50}} />
                                </View>
                                {/** This is the content  */}
                                <View style={{width:'75%'}} > 
                                    {/** The content is split up into two rows, food details  and add to cart button */}

                                    {/** Food content  */}
                                    <View style={{width: '100%', marginHorizontal: 5, flexDirection: 'row', flexWrap: 'wrap', padding: 3}}> 
                                        
                                        <View style={{ textAlign: 'center', width: '70%'}} accessible={true} accessibilityLabel={"This is a " + appetizerItem.name}>
                                            <Text 
                                            style={{fontFamily: 'Cochin', alignSelf:'center', padding:10, fontSize: 20, color: 'black', textAlign: 'center'}}>{appetizerItem.name}  </Text>
                                        </View>
                                        <View style={{ width: '30%'}} accessible={true} accessibilityLabel={"The price of " + appetizerItem.name +  " is " + appetizerItem.price }>
                                            <Text
                                            style={{fontFamily: 'Cochin', alignSelf:'center', padding:10, fontSize: 20, color: 'green', textAlign: 'center'}}>${appetizerItem.price}  </Text>
                                        </View>
                                    </View>
                                    {/** Add to cart  */}
                                    <View accessible={true} accessibilityLabel={"Add " + appetizerItem.name + "to cart"} accessibilityHint="Adds food to cart">
                                    <Button 
                                            onPress={() => this.onAdd()}  
                                            containerStyle={{bottom:0}}
                                            style={{color:'#6f2da8', padding:5, fontWeight:'bold', alignSelf:'center'}} 
                                        > 
                                            Add to cart
                                            </Button>
                                    </View>



                                </View>
                                    
                            </View>
                        
                        );
                    })
                }

                </View>

            {/* This is the list of items that the cook currently has on the menu! */}
            <View style={{marginVertical: 10}} accessible={true} accessibilityLabel="This is the list of Entree food items!" accessibilityHint="A list of food items, with their price, and the option to add item to cart">

            {/** This view sets up the heading row for the container (The menu food type) */}
            <View style={{marginHorizontal: 10, flexDirection: 'row', flexWrap: 'wrap', padding: 7}}>
                {/** Heading content */}
                <View style={{ textAlign: 'center', width: '100%'}} accessible={true} accessibilityLabel="Entrees">
                    <Text style={{ textAlign: 'center', fontSize: 30, fontFamily: 'Cochin', textDecorationLine:'underline' }}>Entree</Text>
                </View>
            </View>
            {
                this.state.entree.map( (entreeItem) =>{
                    return ( 
                        
                        <View style={{marginVertical: 5,marginHorizontal: 5, flexDirection: 'row', flexWrap: 'wrap'}}>{/** This defines each row (the nested define the structure/content) */}
                        {/** Each row is split 25/75 ==> 25 image, 75 info  */}
                            {/** This is the image  */}
                            <View style={{width: '25%'}} accessible={true} accessibilityLabel={entreeItem.name +"Image"}>
                                <Image source={entreeItem.image} style={{width:'100%', aspectRatio:1, alignSelf:'center', borderRadius: 50}} />
                                </View>
                                {/** This is the content  */}
                                <View style={{width:'75%'}} > 
                                    {/** The content is split up into two rows, food details  and add to cart button */}

                                    {/** Food content  */}
                                    <View style={{width: '100%', marginHorizontal: 5, flexDirection: 'row', flexWrap: 'wrap', padding: 3}}> 
                                        
                                        <View style={{ textAlign: 'center', width: '70%'}} accessible={true} accessibilityLabel={"This is a " + entreeItem.name}>
                                            <Text 
                                            style={{fontFamily: 'Cochin', alignSelf:'center', padding:10, fontSize: 20, color: 'black', textAlign: 'center'}}>{entreeItem.name}  </Text>
                                        </View>
                                        <View style={{ width: '30%'}} accessible={true} accessibilityLabel={"The price of " + entreeItem.name +  " is " + entreeItem.price }>
                                            <Text
                                            style={{fontFamily: 'Cochin', alignSelf:'center', padding:10, fontSize: 20, color: 'green', textAlign: 'center'}}>${entreeItem.price}  </Text>
                                        </View>
                                    </View>
                                    {/** Add to cart  */}
                                    <View accessible={true} accessibilityLabel={"Add " + entreeItem.name + "to cart"} accessibilityHint="Adds food to cart">
                                    <Button 
                                            onPress={() => this.onAdd()}  
                                            containerStyle={{bottom:0}}
                                            style={{color:'#6f2da8', padding:5, fontWeight:'bold', alignSelf:'center'}} 
                                        > 
                                            Add to cart
                                            </Button>
                                    </View>
                                </View>       
                            </View>
                        );
                    })
                }
                </View>


            {/* This is the list of items that the cook currently has on the menu! */}
            <View style={{marginVertical: 10}} accessible={true} accessibilityLabel="This is the list of Dessert food items!" accessibilityHint="A list of food items, with their price, and the option to add item to cart">

            {/** This view sets up the heading row for the container (The menu food type) */}
            <View style={{marginHorizontal: 10, flexDirection: 'row', flexWrap: 'wrap', padding: 7}}>
                {/** Heading content */}
                <View style={{ textAlign: 'center', width: '100%'}} accessible={true} accessibilityLabel="Dessert">
                    <Text style={{ textAlign: 'center', fontSize: 30, fontFamily: 'Cochin', textDecorationLine:'underline' }}>Dessert</Text>
                </View>
            </View>
            {
                this.state.entree.map( (dessertItem) =>{
                    return ( 
                        
                        <View style={{marginVertical: 5,marginHorizontal: 5, flexDirection: 'row', flexWrap: 'wrap'}}>{/** This defines each row (the nested define the structure/content) */}
                        {/** Each row is split 25/75 ==> 25 image, 75 info  */}
                            {/** This is the image  */}
                            <View style={{width: '25%'}} accessible={true} accessibilityLabel={dessertItem.name +"Image"}>
                                <Image source={dessertItem.image} style={{width:'100%', aspectRatio:1, alignSelf:'center', borderRadius: 50}} />
                                </View>
                                {/** This is the content  */}
                                <View style={{width:'75%'}} > 
                                    {/** The content is split up into two rows, food details  and add to cart button */}

                                    {/** Food content  */}
                                    <View style={{width: '100%', marginHorizontal: 5, flexDirection: 'row', flexWrap: 'wrap', padding: 3}}> 
                                        
                                        <View style={{ textAlign: 'center', width: '70%'}} accessible={true} accessibilityLabel={"This is a " + dessertItem.name}>
                                            <Text 
                                            style={{fontFamily: 'Cochin', alignSelf:'center', padding:10, fontSize: 20, color: 'black', textAlign: 'center'}}>{dessertItem.name}  </Text>
                                        </View>
                                        <View style={{ width: '30%'}} accessible={true} accessibilityLabel={"The price of " + dessertItem.name +  " is " + dessertItem.price }>
                                            <Text
                                            style={{fontFamily: 'Cochin', alignSelf:'center', padding:10, fontSize: 20, color: 'green', textAlign: 'center'}}>${dessertItem.price}  </Text>
                                        </View>
                                    </View>
                                    {/** Add to cart  */}
                                    <View accessible={true} accessibilityLabel={"Add " + dessertItem.name + "to cart"} accessibilityHint="Adds food to cart">
                                    <Button 
                                            onPress={() => this.onAdd()}  
                                            containerStyle={{bottom:0}}
                                            style={{color:'#6f2da8', padding:5, fontWeight:'bold', alignSelf:'center'}} 
                                        > 
                                            Add to cart
                                            </Button>
                                    </View>
                                </View>       
                            </View>
                        );
                    })
                }
                </View>




                <View style={{flexDirection: 'row'}}>
                    <View style={{width: '50%'}}>
                        <Button 
                            onPress={() => Actions.CustomerHome()}  
                            containerStyle={{bottom:0}}
                            style={{overflow:'hidden', backgroundColor:'#aa381e', paddingVertical:10, paddingHorizontal: 15, color:'white', fontWeight:'bold', marginTop:20, alignSelf:'center', borderRadius: 20}} 
                        > 
                        Go Home
                        </Button>   
                    </View>
                    <View style={{width: '50%'}}>
                        <Button 
                            onPress={()=>Actions.CustomerShoppingCart()}  
                            containerStyle={{bottom:0}}
                            style={{overflow:'hidden', backgroundColor:'#aa381e', paddingVertical:10, paddingHorizontal: 15, color:'white', fontWeight:'bold', marginTop:20, alignSelf:'center', borderRadius: 20}} 
                        > 
                        Go to Shopping Cart
                        </Button>
                    </View>
                </View>





            </ScrollView>
        

        )

    }

};



// these are styles
// This is how it would look like default in every component if you want styling
const styles = StyleSheet.create({
    container:{
      flex:1,
      //backgroundColor: '#f2eecb',
      //backgroundColor: 'rgba(255, 255, 255, 0.2)',
      backgroundColor: 'transparent',
      marginVertical: 30,
    }
  });

export default CustomerMenu;