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


/* If a user enters a rating < 3, they are then prompted to enter a complain */
class CustomerProfile extends Component {
    constructor(){
        super();
        // these states are properties of the component ManagerHome
        this.state = {
          restaurantName: '',
          restaurantAddress: '',
          restaurantPhoto:'',
          restaurantPhone:'',
          restaurantGrade: 'N/A',
          restaurantDescription: '',
          customerID: '',
          customerType: '', //This will help distingusih between the registered(vip, non)/non-registered for the different price
          topFoods: [{name: 'Dumplings'}, {name: 'Sesame Chicken'}, {name: 'Rice Cake'}], //Note, i havent used the bottom two
          recentThreeOrders: [{name: 'Dumplings'}, {name: 'Sesame Chicken'}, {name: 'Rice Cake'}],
          previousOrder1:[{name: 'Dumplings', rating: '', price:'12.99'}, {name: 'Moon Cake', rating: '3', price:'3.56'}, {name: 'Lo Mein', rating: '', price:'4.38'}],
          previousOrder2:[{name: 'Dumplings', rating: '4', price:'12.99'}, {name: 'Moon Cake', rating: '3', price:'3.56'}, {name: 'Lo Mein', rating: '2', price:'4.38'}],
          previousOrder3:[{name: 'Pizza', rating: '1', price:'12.99'}, {name: 'Fried Chicken', rating: '5', price:'3.56'}, {name: 'Rice Cake', rating: '5', price:'4.38'}],
      
        }
      }

    //If user changes the text in input, always store current in state.
    onFieldChanged = (state, text) => {
        //this is a function inherited from Component. It simply modifies one of the properties inside state
        this.setState({[state]: text}); 
    }


    //When pressed, the complaint should be added to firebase, where the manager can then view all complains
    onSubmit = () => {

    }

    render(){
        
        return(
            <ScrollView style={{flex:1, backgroundColor: 'white'}}>
                <Text style={{marginVertical: 25}}> </Text>
                <Text style={{textAlign: 'center', fontSize: 40}}>Welcome, Customer</Text>
                <Text style={{marginVertical: 5}}> </Text>
                <View style={{marginVertical: 15}}>
                <Text style={{fontSize:25, textAlign: 'center'}}>Recent 3 Order</Text>
                <View style={{marginHorizontal: 10, flexDirection: 'row', flexWrap: 'wrap', padding: 7}}>
                    <View style={{width: '33%'}}>
                    <Image source={{uri:'https://sachdevasweets.com/img/placeholders/xgrey_fork_and_knife.png,qv=1.pagespeed.ic.w93dy8J8rD.png'}}  style={{width:'40%', aspectRatio:1, alignSelf:'center'}} />
                    <Button 
                    onPress={() => this.onAdd()}  
                    containerStyle={{bottom:0}}
                    style={{backgroundColor:'#6f2da8', padding:10, color:'white', fontWeight:'bold', marginTop:20, alignSelf:'center'}} 
                    > 
                    Add to Cart
                    </Button>
                    </View>
                    <View style={{width: '33%'}}>
                    <Image source={{uri:'https://sachdevasweets.com/img/placeholders/xgrey_fork_and_knife.png,qv=1.pagespeed.ic.w93dy8J8rD.png'}}  style={{width:'40%', aspectRatio:1, alignSelf:'center'}} />
                    <Button 
                    onPress={() => this.onAdd()}  
                    containerStyle={{bottom:0}}
                    style={{backgroundColor:'#6f2da8', padding:10, color:'white', fontWeight:'bold', marginTop:20, alignSelf:'center'}} 
                    > 
                    Add to Cart
                    </Button>
                    </View>
                    <View style={{width: '33%'}}>
                    <Image source={{uri:'https://sachdevasweets.com/img/placeholders/xgrey_fork_and_knife.png,qv=1.pagespeed.ic.w93dy8J8rD.png'}}  style={{width:'40%', aspectRatio:1, alignSelf:'center'}} />
                    <Button 
                    onPress={() => this.onAdd()}  
                    containerStyle={{bottom:0}}
                    style={{backgroundColor:'#6f2da8', padding:10, color:'white', fontWeight:'bold', marginTop:20, alignSelf:'center'}} 
                    > 
                    Add to Cart
                    </Button>
                    </View>
                </View>
                </View>

                <Text style={{marginVertical: 5}}> </Text>
                <View style={{justifyContent: 'center'}}>
                <Text style={{fontSize: 25, textAlign: 'center'}}>Previous Orders</Text>
            </View>
            <Text style={{marginVertical: 5}}> </Text>





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





            </ScrollView>
        );
    }


}


export default CustomerProfile; 
