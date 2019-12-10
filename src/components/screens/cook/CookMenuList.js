import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';
import {StyleSheet, SafeAreaView, Text, View, FlatList} from 'react-native';
import firebase from 'firebase';
import {SectionList} from '../../common/components/';

class CookMenuList extends Component {
  constructor() {
    super();
    this.state = {
      //Here we list out the menu items/objects. Each menu item has the name, and
      menu: [
        {name: 'Dumplings', rating: '3'},
        {name: 'Sesame Chicken', rating: '3'},
        {name: 'Lo Mein', rating: '3'},
      ],
      foodList: [
        {name: 'Fried Chicken and French Fries', rating: '2'},
        {name: 'Pad Thai', rating: '1'},
        {name: 'Chicken Teryiki', rating: '5'},
      ],
    };
  }

  //A function to handle button request. In this case, rate.
  onRequest = () => {};

  //A function to remove an item from the menu.
  onRemove = () => {};

  //Navigate to the page of the Food, based on the food item clicked.
  //This is so we can see the details of the food!
  onTitlePressed = () => {};

  //Add the food item to the menu
  onAdd = () => {};

  //Goes to the form that creates a new food
  addFoodItem = () => {};

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{justifyContent: 'center'}}>
          <Text style={{fontSize: 35, textAlign: 'center'}}>Menu</Text>
        </View>

        {/* This is the list of items that the cook currently has on the menu! */}
        <View style={{marginVertical: 10}}>
          <View
            style={{
              marginHorizontal: 10,
              flexDirection: 'row',
              flexWrap: 'wrap',
              borderWidth: 1,
              padding: 7,
              backgroundColor: '#66a82d',
            }}>
            <View style={{textAlign: 'center', width: '33%'}}>
              <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>
                Food
              </Text>
            </View>
            <View style={{width: '33%'}}>
              <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>
                Rating
              </Text>
            </View>
            <View style={{width: '33%'}}>
              <Text style={{color: 'white', textAlign: 'center'}}> </Text>
            </View>
          </View>
          {this.state.menu.map(menuItem => {
            return (
              <View
                style={{
                  marginHorizontal: 10,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  borderWidth: 1,
                  padding: 3,
                }}>
                <View style={{textAlign: 'center', width: '33%'}}>
                  <Button
                    onPress={() => this.onTitlePressed()}
                    contaimerStyle={{bottom: 0}}
                    style={{
                      marginTop: 20,
                      alignSelf: 'center',
                      padding: 10,
                      fontSize: 20,
                      color: 'black',
                      textAlign: 'center',
                    }}>
                    {menuItem.name}{' '}
                  </Button>
                </View>
                <View style={{width: '33%'}}>
                  <Text
                    style={{
                      textAlign: 'center',
                      marginTop: 20,
                      alignSelf: 'center',
                      padding: 10,
                      fontSize: 20,
                    }}>
                    {menuItem.rating}/5{' '}
                  </Text>

                  {/* Why is a cook rating his food?? */
                  /*
                                    <Button
                                        onPress={() => this.onRequest()}
                                        containerStyle={{bottom:0}}
                                        style={{backgroundColor:'#6f2da8', padding:10, color:'white', fontWeight:'bold', marginTop:20, alignSelf:'center'}}
                                    >
                                        Rate
                                        </Button>
                                        */}
                </View>
                <View style={{width: '33%'}}>
                  <Button
                    onPress={() => this.onRemove()}
                    containerStyle={{bottom: 0}}
                    style={{
                      backgroundColor: '#cc0000',
                      padding: 10,
                      color: 'white',
                      fontWeight: 'bold',
                      marginTop: 20,
                      alignSelf: 'center',
                    }}>
                    Remove
                  </Button>
                </View>
              </View>
            );
          })}
        </View>

        <View style={{marginVertical: 10}}>
          <View
            style={{
              marginHorizontal: 10,
              flexDirection: 'row',
              flexWrap: 'wrap',
              borderWidth: 1,
              padding: 7,
              backgroundColor: '#66a82d',
            }}>
            <View style={{textAlign: 'center', width: '33%'}}>
              <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>
                Food
              </Text>
            </View>
            <View style={{width: '33%'}}>
              <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>
                Rating
              </Text>
            </View>
            <View style={{width: '33%'}}>
              <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>
                {' '}
              </Text>
            </View>
          </View>
          {this.state.foodList.map(foodItem => {
            return (
              <View
                style={{
                  marginHorizontal: 10,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  borderWidth: 1,
                  padding: 3,
                }}>
                <View style={{textAlign: 'center', width: '33%'}}>
                  <Button
                    onPress={() => this.onTitlePressed()}
                    contaimerStyle={{bottom: 0}}
                    style={{
                      marginTop: 20,
                      alignSelf: 'center',
                      padding: 10,
                      fontSize: 20,
                      color: 'black',
                      textAlign: 'center',
                    }}>
                    {foodItem.name}{' '}
                  </Button>
                </View>
                <View style={{width: '33%'}}>
                  <Text
                    style={{
                      textAlign: 'center',
                      marginTop: 20,
                      alignSelf: 'center',
                      padding: 10,
                      fontSize: 20,
                    }}>
                    {foodItem.rating}/5{' '}
                  </Text>

                  {/* Why are we rating? */
                  /* <Button
                                        onPress={() => this.onRequest()}
                                        containerStyle={{bottom:0}}
                                        style={{backgroundColor:'#6f2da8', padding:10, color:'white', fontWeight:'bold', marginTop:20, alignSelf:'center'}}
                                    >
                                        Rate
                                        </Button>
                                    */}
                </View>
                <View style={{width: '33%'}}>
                  <Button
                    onPress={() => this.onAdd()}
                    containerStyle={{bottom: 0}}
                    style={{
                      backgroundColor: '#00cccc',
                      padding: 10,
                      color: 'white',
                      fontWeight: 'bold',
                      marginTop: 20,
                      alignSelf: 'center',
                    }}>
                    Add
                  </Button>
                </View>
              </View>
            );
          })}
        </View>
        <Button
          onPress={() => this.addFoodItem()}
          containerStyle={{bottom: 0}}
          style={{
            backgroundColor: '#66a82d',
            padding: 10,
            color: 'white',
            fontWeight: 'bold',
            marginTop: 20,
            alignSelf: 'center',
          }}>
          Add Menu Item
        </Button>
      </SafeAreaView>
    );
  }
}


// these are styles
// This is how it would look like default in every component if you want styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default CookMenuList;