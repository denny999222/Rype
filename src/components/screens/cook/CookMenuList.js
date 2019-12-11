import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  KeyboardAvoidingView,
} from 'react-native'; //default components
import firebase from 'firebase';

import {TextField} from 'react-native-material-textfield';
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
        {name: 'Fried Chicken', rating: '2'},
        {name: 'Pad Thai', rating: '1'},
        {name: 'Chicken Teryiki', rating: '5'},
      ],


      name: 'Tomato',
      price: '20',
      specialty: '',
      Food_Description: 'N/A',
      ingredientList: [
        {name: 'salt', quantity: ''},
        {name: 'pepper', rating: ''},
      ],
      food_category: '',
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


  onGradeSelected = selectedType => {
    // this makes the selected letter grade green when selected
    if (selectedType === this.state.food_category) {
      return {
        backgroundColor: '#66a82d',
        borderWidth: 0.5,
        justifyContent: 'center',
      };
    } else {
      return {
        backgroundColor: 'white',
        borderWidth: 0.5,
        justifyContent: 'center',
      };
    }
  };

  onTextColorChange = selectedType => {
    if (selectedType === this.state.food_category) {
      return {
        color: 'white',
        paddingBottom: 5,
        paddingTop: 5,
        fontWeight: 'bold',
      };
    } else {
      return {color: 'black', paddingBottom: 5, paddingTop: 5};
    }
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{justifyContent: 'center', marginTop:30}}>
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
              <Text style={{color: 'white', textAlign: 'center', fontSize: 15}}>
                Food
              </Text>
            </View>
            <View style={{width: '33%'}}>
              <Text style={{color: 'white', textAlign: 'center', fontSize: 15}}>
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
                      marginTop: 10,
                      alignSelf: 'center',
                      padding: 10,
                      fontSize: 15,
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
                      marginTop: 10,
                      alignSelf: 'center',
                      padding: 10,
                      fontSize: 15,
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
                      marginTop: 10,
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
              <Text style={{color: 'white', textAlign: 'center', fontSize: 15}}>
                Food
              </Text>
            </View>
            <View style={{width: '33%'}}>
              <Text style={{color: 'white', textAlign: 'center', fontSize: 15}}>
                Rating
              </Text>
            </View>
            <View style={{width: '33%'}}>
              <Text style={{color: 'white', textAlign: 'center', fontSize: 15}}>
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
                      marginTop: 10,
                      alignSelf: 'center',
                      padding: 10,
                      fontSize: 15,
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
                      marginTop: 10,
                      alignSelf: 'center',
                      padding: 10,
                      fontSize: 15,
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
                      marginTop: 10,
                      alignSelf: 'center',
                    }}>
                    Add
                  </Button>
                </View>
              </View>
            );
          })}
        </View>

      

        <View style={{marginVertical: 20}}>
          <View style={{justifyContent: 'center'}}>
            <Text style={{fontSize: 30, textAlign: 'center'}}>Add New Food Item</Text>
            <View style={{paddingRight: 50, paddingLeft: 50, paddingTop: 10}}>
              <TextField
                label="Name"
                value={this.state.name}
                onChangeText={text => this.onFieldChanged('name', text)}
              />
              <TextField
                label="Price"
                value={this.state.price}
                onChangeText={text => this.onFieldChanged('price', text)}
              />
              <TextField
                label="Food_Description"
                value={this.state.Food_Description}
                onChangeText={text =>
                  this.onFieldChanged('Food_Description', text)
                }
              />
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
                  <Text
                    style={{color: 'white', textAlign: 'center', fontSize: 15}}>
                    Ingredient
                  </Text>
                </View>
                <View style={{width: '33%'}}>
                  <Text
                    style={{color: 'white', textAlign: 'center', fontSize: 15}}>
                    Quantity
                  </Text>
                </View>
                <View style={{width: '33%'}}>
                  <Text style={{color: 'white', textAlign: 'center'}}> </Text>
                </View>

              </View>
              {this.state.ingredientList.map(ingredient => {
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
                      <Text
                        style={{
                          textAlign: 'center',
                          marginTop: 10,
                          alignSelf: 'center',
                          padding: 10,
                          fontSize: 15,
                        }}>
                        {ingredient.name}{' '}
                      </Text>
                    </View>
                    <View style={{width: '33%'}}>
                      <TextField
                        label="Quantity"
                        value={ingredient.quantity}
                        onChangeText={text =>
                          this.onFieldChanged('qunatity', text)
                        }
                      />
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
                          marginTop: 10,
                          alignSelf: 'center',
                        }}>
                        Add
                      </Button>
                    </View>
                  </View>
                );
              })}
            </View>

            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <Text style={{fontSize: 18}}>Specialty: </Text>
              <TouchableOpacity
                onPress={() => this.setState({food_category: 'Breakfast'})}
                style={this.onGradeSelected('Breakfast')}>
                <Text style={this.onTextColorChange('Breakfast')}>
                  {' '}
                  Breakfast{' '}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({food_category: 'Lunch'})}
                style={this.onGradeSelected('Lunch')}>
                <Text style={this.onTextColorChange('Lunch')}> Lunch </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({food_category: 'Dinner'})}
                style={this.onGradeSelected('Dinner')}>
                <Text style={this.onTextColorChange('Dinner')}> Dinner </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({food_category: 'Dessert'})}
                style={this.onGradeSelected('Dessert')}>
                <Text style={this.onTextColorChange('Dessert')}> Dessert </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({food_category: 'N/A'})}
                style={this.onGradeSelected('N/A')}>
                <Text style={this.onTextColorChange('N/A')}> N/A </Text>
              </TouchableOpacity>
            </View>

            <Button
              onPress={() => this.onSubmit()}
              containerStyle={{bottom: 0}}
              style={{
                backgroundColor: '#6f2da8',
                padding: 8,
                color: 'white',
                fontWeight: 'bold',
                marginTop: 20,
                alignSelf: 'center',
              }}>
              Submit
            </Button>
          </View>


        </View>



      </ScrollView>
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