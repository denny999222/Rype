import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';
import { StyleSheet, SafeAreaView, Text, View} from 'react-native';

class SalespersonHome extends Component{
  constructor() {
    super();
    this.state = {
      salespersonCommission: '3',
      salespersonName: 'Ben',
      supplies : [{name: 'Tomato', rating: '3', quantity: '20/50'}, 
                  {name: 'Cucumber', rating: '5', quantity: '28/50'},
                  {name: 'Potato', rating: '1', quantity: '46/50'},
                  {name: 'Carrots', rating: '3', quantity: '37/50'}],
      toOrder : [{name: 'napkins', quantity:'50'}, 
                  {name: 'peppers', quantity:'70'}, 
                  {name: 'ketchup', quantity:'20'}]
    }
  }

  onOrder = () => {

  }

  
  /*Go to the page where the supplier can see nearby supplies and find + negotiate*/
  onFindSupplies = () => {

  }

  render(){
    return (
      <SafeAreaView style={styles.container} >
          <Text style={{fontSize:40, textAlign: 'center'}} >Welcome {this.state.salespersonName} </Text>
          <Text style={{marginVertical: 10}}></Text>
          <Text style={{fontSize:20}}>Your Comission: {this.state.salespersonCommission}% </Text>
            
            
          {/* This is the list of items that the cook currently has on the menu! */}
          <View style={{marginVertical: 10}}>

          <View style={{marginHorizontal: 10, flexDirection: 'row', flexWrap: 'wrap', borderWidth: 1, padding: 7, backgroundColor:'white'}}>
              <View style={{ textAlign: 'center', width: '25%'}}>
                  <Text style={{textAlign: 'center', fontSize: 20}}>Supply</Text>
              </View>
              <View style={{ textAlign: 'center', width: '25%'}}>
                  <Text style={{textAlign: 'center', fontSize: 20}}>Rating</Text>
              </View>
              <View style={{ textAlign: 'center', width: '25%'}}>
                  <Text style={{textAlign: 'center', fontSize: 20}}>Quantity</Text>
              </View>
              <View style={{ textAlign: 'center', width: '25%'}}>

              </View>

          </View>
          {
              this.state.supplies.map( (supply) =>{
                  return ( 
                      <View style={{marginHorizontal: 10, flexDirection: 'row', flexWrap: 'wrap', borderWidth: 1, padding: 3}}>
                          <View style={{ textAlign: 'center', width: '25%'}}>
                              <Text 
                              style={{alignSelf:'center', padding:10, fontSize: 20, color: 'black', textAlign: 'center'}}>{supply.name}</Text>
                          </View>
                          <View style={{ textAlign: 'center', width: '25%'}}>
                              <Text
                              style={{alignSelf:'center',  padding:10, fontSize: 20, color: 'black', textAlign: 'center'}}>{supply.rating}/5</Text>
                          </View>
                          <View style={{ width: '25%'}}>
                          <Text
                              style={{alignSelf:'center',  padding:10, fontSize: 20, color: 'black', textAlign: 'center'}}>{supply.quantity}</Text>
                          </View>
                          <View style={{ width: '25%'}}>
                            <Button
                              onPress = {() => Actions.SalespersonReorder()}
                              containerStyle={{bottom:0}}
                              style={{
                      fontSize:20}}>
                              Reorder
                            </Button>
                          </View>
                      </View>
                  
                  );
              })
          }
          </View>


           {/* This is the list of items that the cook currently has on the menu! */}
           <View style={{marginVertical: 10}}>

            <View style={{marginHorizontal: 10, flexDirection: 'row', flexWrap: 'wrap', borderWidth: 1, padding: 7, backgroundColor:'white'}}>
                <View style={{ textAlign: 'center', width: '33%'}}>
                    <Text style={{textAlign: 'center', fontSize: 20}}>Supply</Text>
                </View>
                <View style={{ textAlign: 'center', width: '33%'}}>
                    <Text style={{textAlign: 'center', fontSize: 20}}>Quantity</Text>
                </View>
                <View style={{ textAlign: 'center', width: '33%'}}>

                </View>

            </View>
            {
                this.state.supplies.map( (supply) =>{
                    return ( 
                        <View style={{marginHorizontal: 10, flexDirection: 'row', flexWrap: 'wrap', borderWidth: 1, padding: 3}}>
                            <View style={{ textAlign: 'center', width: '33%'}}>
                                <Text 
                                style={{alignSelf:'center', padding:10, fontSize: 20, color: 'black', textAlign: 'center'}}>{supply.name}</Text>
                            </View>
                            <View style={{ width: '33%'}}>
                            <Text
                                style={{alignSelf:'center',  padding:10, fontSize: 20, color: 'black', textAlign: 'center'}}>{supply.quantity}</Text>
                            </View>
                            <View style={{ width: '33%'}}>
                              <Button
                                onPress = {() => Actions.SalespersonOrder()}
                                containerStyle={{bottom:0}}
                                style={{
                        fontSize:20}}>
                                Order
                              </Button>
                            </View>
                        </View>
                    
                    );
                })
            }
            </View>
            <Button
              onPress = {() => Actions.SalespersonFindSupplies()}
              containerStyle={{bottom:0}}
              style={{
                      fontSize:20}}>
              Find Supplies
            </Button>




      </SafeAreaView>
    );
  }
  
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white'
  }
});

export default SalespersonHome;
