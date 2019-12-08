import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';
import { StyleSheet, SafeAreaView, Text, View} from 'react-native';

class SalespersonFindSupplies extends Component{
  constructor() {
    super();
    this.state = {
      salespersonCommission: '3',
      salespersonName: 'Ben',
      supplies : [{name: 'Tomato', rating: '3', quantity: '20/50'}, 
                  {name: 'Cucumber', rating: '5', quantity: '28/50'},
                  {name: 'Potato', rating: '1', quantity: '46/50'},
                  {name: 'Carrots', rating: '3', quantity: '37/50'}],
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

          {/* This is the list of items that the cook currently has on the menu! */}
          <View style={{marginVertical: 10}}>

          <View style={{marginHorizontal: 10, flexDirection: 'row', flexWrap: 'wrap', borderWidth: 1, padding: 7, backgroundColor:'white'}}>
              <View style={{ textAlign: 'center', width: '75%'}}>
                  <Text style={{textAlign: 'center', fontSize: 20}}>Supply</Text>
              </View>
 
              <View style={{ textAlign: 'center', width: '25%'}}>

              </View>

          </View>
          {
              this.state.supplies.map( (supply) =>{
                  return ( 
                      <View style={{marginHorizontal: 10, flexDirection: 'row', flexWrap: 'wrap', borderWidth: 1, padding: 3}}>
                          <View style={{ textAlign: 'center', width: '75%'}}>
                              <Text 
                              style={{alignSelf:'center', padding:10, fontSize: 20, color: 'black', textAlign: 'center'}}>{supply.name}</Text>
                          </View>

                          <View style={{ width: '25%'}}>
                            <Button
                              onPress = {this.onOrder()}
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




      </SafeAreaView>
    );
  }
  
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
});

export default SalespersonFindSupplies;
