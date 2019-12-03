import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';
import { StyleSheet, SafeAreaView, Text, View, FlatList} from 'react-native';
import firebase from 'firebase';
import {SectionList} from '../../common/components/';


/* 
Note, in this approach, we list out all of the specific items bought. 
We could also  just do a date + cost order, 
instead of menu (And then you can click on the exact order to see what you ordered. */

class CustomerPreviousOrders extends Component {

    constructor(){
        super();
        this.state = {
            


            //We pull the previous orders, and divide them by their attributes of name + price. 

            /* NOTE, we also have the total added at the end!!!!!! */
            
            previousOrder1:[{name: 'Dumplings', rating: '', price:'12.99'}, {name: 'Moon Cake', rating: '3', price:'3.56'}, {name: 'Lo Mein', rating: '', price:'4.38'}],
            previousOrder2:[{name: 'Dumplings', rating: '4', price:'12.99'}, {name: 'Moon Cake', rating: '3', price:'3.56'}, {name: 'Lo Mein', rating: '2', price:'4.38'}],
            previousOrder3:[{name: 'Pizza', rating: '1', price:'12.99'}, {name: 'Fried Chicken', rating: '5', price:'3.56'}, {name: 'Rice Cake', rating: '5', price:'4.38'}],
        
        
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
                <Text style={{fontSize: 35, textAlign: 'center'}}>Previous Orders</Text>
            </View>
            <Text style={{marginVertical: 20}}> </Text>





                 {/* Handle the last previous order */}
                <View>
                    <View style={{marginHorizontal: 10, flexDirection: 'row', flexWrap: 'wrap', borderWidth: 1, padding: 7, backgroundColor:'#66a82d'}}>
                        <View style={{ textAlign: 'center', width: '33%'}}>
                            <Text style={{color:'white', textAlign: 'center'}}>Food  </Text>
                        </View>
                        <View style={{ width: '33%'}}>
                            <Text style={{color:'white', textAlign: 'center'}}>Your Rating </Text> 
                        </View>
                        <View style={{ width: '33%'}}>
                            <Text style={{color:'white', textAlign: 'center'}}>Price </Text> 
                        </View>
                    </View>

                    {
                        this.state.previousOrder1.map( (prevOrderItem) =>{
                            return ( 
                                        <View style={{marginHorizontal: 10, flexDirection: 'row', flexWrap: 'wrap', borderWidth: 1, padding: 3}}>
                                            <View style={{ textAlign: 'center', width: '33%'}}>
                                                <Text style={{fontSize: 20, marginVertical: 5, textAlign: 'center'}}>{prevOrderItem.name}  </Text>
                                            </View>
                                            
                    
                                            
                                            {
                                                /* NOTE, this is the logic which either renders a rate button or it renders the rating score. THis way we can easily distinguish between the foots we rated and the oneds we need to continute to rate. */
                                               prevOrderItem.rating!='' ?
                                                   
                                                       <View style={{ width: '33%'}}>
                                                           <Text style={{fontSize: 20, marginVertical: 5, textAlign: 'center'}}>{prevOrderItem.rating}/5 </Text> 
                                                        </View>
                                                
                                               :
                                                       <View style={{ width: '33%'}}>
                                                           <Button 
                                                               onPress={() => this.onRequest()}  
                                                               containerStyle={{bottom:0}}
                                                               style={{backgroundColor:'#6f2da8', padding:10, color:'white', fontWeight:'bold', marginVertical: 5, alignSelf:'center'}} 
                                                           > 
                                                               Rate
                                                               </Button>
                                                       </View>
                                           
                                       
                                           
                                           
                                           }

                                            
                                            
                                            {/*Uncommenting the old code that showed both the rating and the button next to it */
                                            /* 
                                            <View style={{ width: '25%'}}>
                                                <Text style={{fontSize: 20, marginVertical: 5, textAlign: 'center'}}>{prevOrderItem.rating}/5 </Text> 
                                            </View>
                                            <View style={{ width: '33%'}}>
                                                <Button 
                                                    onPress={() => this.onRequest()}  
                                                    containerStyle={{bottom:0}}
                                                    style={{backgroundColor:'#6f2da8', padding:10, color:'white', fontWeight:'bold', marginVertical: 5, alignSelf:'center'}} 
                                                > 
                                                    Rate
                                                    </Button>


                                            </View>

                                            */}
                                            <View style={{ width: '25%'}}>
                                                <Text style={{fontSize: 20, marginVertical: 5, textAlign: 'center'}}>${prevOrderItem.price} </Text> 
                                            </View>
                                        </View>
                                        
                                    
                                    );
                        })


                    }
                    <View style={{flexDirection: 'row'}}>
                        <View style={{width:'50%'}}><Text style={{fontSize: 20, textAlign:'center'}}>Ordered: 12/2/2019</Text></View>
                        <View style={{width:'50%'}}><Text style={{fontSize: 20, textAlign:'center'}}>Cost: $20.93</Text></View>
                    </View>
                </View>







                {/* Handle the 2nd to last previous order */}
                <View style={{marginTop: 15}}> 
                    <View style={{marginTop: 5, marginHorizontal: 10, flexDirection: 'row', flexWrap: 'wrap', borderWidth: 1, padding: 7, backgroundColor:'#66a82d'}}>
                        
                        <View style={{ textAlign: 'center', width: '33%'}}>
                            <Text style={{color:'white', textAlign: 'center'}}>Food  </Text>
                        </View>
                        <View style={{ width: '33%'}}>
                            <Text style={{color:'white', textAlign: 'center'}}>Your Rating </Text> 
                        </View>
                        <View style={{ width: '33%'}}>
                            <Text style={{color:'white', textAlign: 'center'}}>Price </Text> 
                        </View>
                    </View>

                    {
                        this.state.previousOrder2.map( (prevOrderItem) =>{
                            return ( 
                                        <View style={{marginHorizontal: 10, flexDirection: 'row', flexWrap: 'wrap', borderWidth: 1, padding: 3}}>
                                            <View style={{ textAlign: 'center', width: '33%'}}>
                                                <Text style={{fontSize: 20, marginVertical: 5, textAlign: 'center'}}>{prevOrderItem.name}  </Text>
                                            </View>
                                            
                                            {
                                               
                                                prevOrderItem.rating!='' ?
                                                    
                                                        <View style={{ width: '33%'}}>
                                                            <Text style={{fontSize: 20, marginVertical: 5, textAlign: 'center'}}>{prevOrderItem.rating}/5 </Text> 
                                                         </View>
                                                 
                                                :
                                                        <View style={{ width: '33%'}}>
                                                            <Button 
                                                                onPress={() => this.onRequest()}  
                                                                containerStyle={{bottom:0}}
                                                                style={{backgroundColor:'#6f2da8', padding:10, color:'white', fontWeight:'bold', marginVertical: 5, alignSelf:'center'}} 
                                                            > 
                                                                Rate
                                                                </Button>
                                                        </View>
                                            
                                        
                                            
                                            
                                            }
                                            {/*
                                            <View style={{ width: '33%'}}>
                                                <Text style={{fontSize: 20, marginVertical: 5, textAlign: 'center'}}>{prevOrderItem.rating}/5 </Text> 
                                            </View>
                                           
                                            <View style={{ width: '33%'}}>
                                                <Button 
                                                    onPress={() => this.onRequest()}  
                                                    containerStyle={{bottom:0}}
                                                    style={{backgroundColor:'#6f2da8', padding:10, color:'white', fontWeight:'bold', marginVertical: 5, alignSelf:'center'}} 
                                                > 
                                                    Rate
                                                    </Button>


                                            </View>
                                            */}

                                            <View style={{ width: '33%'}}>
                                                <Text style={{fontSize: 20, marginVertical: 5, textAlign: 'center'}}>${prevOrderItem.price} </Text> 
                                            </View>
                                        </View>
                                    
                                    );
                        })


                    }
                    <View style={{flexDirection: 'row'}}>
                        <View style={{width:'50%'}}><Text style={{fontSize: 20, textAlign:'center'}}>Ordered: 12/2/2019</Text></View>
                        <View style={{width:'50%'}}><Text style={{fontSize: 20, textAlign:'center'}}>Total Cost: $20.93</Text></View>
                    </View>
                </View>

                






                {/* Handle the 3rd to last previous order */}
                <View style={{marginTop: 15}}> 
                    <View style={{marginTop: 5, marginHorizontal: 10, flexDirection: 'row', flexWrap: 'wrap', borderWidth: 1, padding: 7, backgroundColor:'#66a82d'}}>
                        
                        <View style={{ textAlign: 'center', width: '33%'}}>
                            <Text style={{color:'white', textAlign: 'center'}}>Food  </Text>
                        </View>
                        <View style={{ width: '33%'}}>
                            <Text style={{color:'white', textAlign: 'center'}}>Your Rating </Text> 
                        </View>
                        <View style={{ width: '33%'}}>
                            <Text style={{color:'white', textAlign: 'center'}}>Price </Text> 
                        </View>
                    </View>

                    {
                        this.state.previousOrder3.map( (prevOrderItem) =>{
                            return ( 
                                        <View style={{marginHorizontal: 10, flexDirection: 'row', flexWrap: 'wrap', borderWidth: 1, padding: 3}}>
                                            <View style={{ textAlign: 'center', width: '33%'}}>
                                                <Text style={{fontSize: 20, marginVertical: 5, textAlign: 'center'}}>{prevOrderItem.name}  </Text>
                                            </View>
                                            
                                            {
                                               
                                                prevOrderItem.rating!='' ?
                                                    
                                                        <View style={{ width: '33%'}}>
                                                            <Text style={{fontSize: 20, marginVertical: 5, textAlign: 'center'}}>{prevOrderItem.rating}/5 </Text> 
                                                         </View>
                                                 
                                                :
                                                        <View style={{ width: '33%'}}>
                                                            <Button 
                                                                onPress={() => this.onRequest()}  
                                                                containerStyle={{bottom:0}}
                                                                style={{backgroundColor:'#6f2da8', padding:10, color:'white', fontWeight:'bold', marginVertical: 5, alignSelf:'center'}} 
                                                            > 
                                                                Rate
                                                                </Button>
                                                        </View>
                                            
                                        
                                            
                                            
                                            }
                                            {/*
                                            <View style={{ width: '33%'}}>
                                                <Text style={{fontSize: 20, marginVertical: 5, textAlign: 'center'}}>{prevOrderItem.rating}/5 </Text> 
                                            </View>
                                           
                                            <View style={{ width: '33%'}}>
                                                <Button 
                                                    onPress={() => this.onRequest()}  
                                                    containerStyle={{bottom:0}}
                                                    style={{backgroundColor:'#6f2da8', padding:10, color:'white', fontWeight:'bold', marginVertical: 5, alignSelf:'center'}} 
                                                > 
                                                    Rate
                                                    </Button>


                                            </View>
                                            */}

                                            <View style={{ width: '33%'}}>
                                                <Text style={{fontSize: 20, marginVertical: 5, textAlign: 'center'}}>${prevOrderItem.price} </Text> 
                                            </View>
                                        </View>
                                    
                                    );
                        })


                    }
                    <View style={{flexDirection: 'row'}}>
                        <View style={{width:'50%'}}><Text style={{fontSize: 20, textAlign:'center'}}>Ordered: 12/2/2019</Text></View>
                        <View style={{width:'50%'}}><Text style={{fontSize: 20, textAlign:'center'}}>Total Cost: $20.93</Text></View>
                    </View>
                </View>







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

export default CustomerPreviousOrders;