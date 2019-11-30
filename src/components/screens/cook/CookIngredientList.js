import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';
import { StyleSheet, SafeAreaView, Text, View, FlatList} from 'react-native';
import firebase from 'firebase';
import {SectionList} from '../../common/components/';

class CookIngredientList extends Component{
    constructor(){
        super();
        this.state = {
            /* NOTE, the way they are stored is numerically indexed. All arrays at 0, all represenet the Tomato, with supply 1 and rating 4/5*/
            supplyList: ['Bujar','Cucumbers','Salt','Pepper'], //supplies
            supplyQuantityList: ['1', '5', '100', '100'],
            supplyRatingList: ['4', '2', '5', '5'],
            supplies: [{name: 'Tomato', rating: '2', quantity: '27'}, {name: 'Cucumber', rating: '4', quantity: '19'}, {name: 'Salt', rating: '5', quantity: '100'}, {name: 'Pepper', rating: '5', quantity: '100'}]


        }
}

  //phases of a component's life cycle
  // 1) before it renders (display on screen), do something 
  // 2) once it rendered, do something

  // this is a function inherited from component
    componentWillMount = async () => { // this is a function to do something before the componenet renders
    // async means that it wont happen instantly so it should wait for a response

    // this fetches our database with the path /${restaurantName}/menu. The on keyword is a function 
    // that READS the database (you have read, write, update). Snapshot is the value returned from query
    // await firebase.database().ref(`/${restaurantName}/menu`).on('value', snapshot => {
    //   this.setState({ menuList: snapshot.val() }); // this simply stores the snapshot into our state
    // })

    // this fetches from firebase inside users. It then converts the snapshot.val() object into an array, and stores it in our state
        await firebase.database().ref(`/users`).on('value', snapshot => {
            let menuListArray = Object.entries(snapshot.val());
            this.setState({menuList: menuListArray});

            //Must fetch supply list, supply rating, and supply quantity

        })
    }


    onRequest = () => {

    }



    render(){
        return (
            <SafeAreaView style={styles.container} >


                <Text style={{fontSize:40, textAlign:'center', marginBottom: 15}}>Ingredient List </Text>

                <Text style={{margin: 10}}></Text>

            <View>

                <View style={{marginHorizontal: 10, flexDirection: 'row', flexWrap: 'wrap', borderWidth: 1, padding: 7, backgroundColor:'#66a82d'}}>
                    <View style={{ textAlign: 'center', width: '33%'}}>
                        <Text style={{color:'white', textAlign: 'center'}}>Ingredient  </Text>
                    </View>
                    <View style={{ width: '33%'}}>
                        <Text style={{color:'white', textAlign: 'center'}}>Rating </Text> 
                    </View>
                    <View style={{ width: '33%'}}>
                        <Text style={{color:'white', textAlign: 'center'}}>Quantity </Text> 
                    </View>
                </View>
                {
                    this.state.supplies.map( (supply) =>{
                        return ( 
                                    <View style={{marginHorizontal: 10, flexDirection: 'row', flexWrap: 'wrap', borderWidth: 1, padding: 3}}>
                                        <View style={{ textAlign: 'center', width: '33%'}}>
                                            <Text style={{textAlign: 'center'}}>{supply.name}  </Text>
                                        </View>
                                        <View style={{ width: '33%'}}>
                                            <Text style={{textAlign: 'center'}}>{supply.rating}/5 </Text> 
                                            
                                            <Button 
                                                onPress={() => this.onRequest()}  
                                                containerStyle={{bottom:0}}
                                                style={{backgroundColor:'#6f2da8', padding:10, color:'white', fontWeight:'bold', marginTop:20, alignSelf:'center'}} 
                                            > 
                                                Rate
                                                </Button>


                                        </View>
                                        <View style={{ width: '33%'}}>
                                            <Text style={{textAlign: 'center'}}>{supply.quantity} </Text> 
                                            <Button 
                                                onPress={() => this.onRequest()}  
                                                containerStyle={{bottom:0}}
                                                style={{backgroundColor:'#6f2da8', padding:10, color:'white', fontWeight:'bold', marginTop:20, alignSelf:'center'}} 
                                            > 
                                                Change
                                                </Button>
                                        </View>
                                    </View>
                                
                                );
                    })


                }
                </View>

                <Text style={{margin: 10}}></Text>

                {/* This flatlist tkaes in menuList from state as the data.
                    RenderItem takes in a funtion with argument element of the array menuList and simply returns the emails as test.
                    KeyExtractor is not that important, but react native recommends that each element has a unique ID in ANY list so you can identify it easily. 
                    So what KeyExtractor does is simply give a unique ID for each. It takes in a function as an argument*/}
{/*
                                <View style={{height: 10, flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start'}}>
                                    <View style={{ width: '33%'}}>
                                        <Text>Name  </Text>
                                    </View>
                                    <View style={{ width: '33%'}}>
                                        <Text>Phone </Text> 
                                    </View>
                                    <View style={{ width: '33%'}}>
                                        <Text>Rating </Text> 
                                    </View>
                                </View>
*/}

            
                    {/* Might want to add the <Keyboard> tags that are in Home */}
                <Button 
                    onPress={() => this.onRequest()} 
                    containerStyle={{bottom:0}}
                    style={{borderRadius:20, overflow:'hidden', backgroundColor:'#66a82d', padding:10, paddingLeft: 50, paddingRight: 50, color:'white', fontWeight:'bold', marginTop:20, alignSelf:'center'}} 
                > 
                    Request Ingredient
                </Button>

            </SafeAreaView>
        );
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

export default CookIngredientList;


