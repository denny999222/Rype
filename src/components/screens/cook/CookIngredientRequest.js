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

class CookIngredientRequest extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Tomato',
      quantity: '20',
      specialty: '',
      special_request: 'N/A',
    };
  }

  //Send the ingredient to the database./ Add new ingredient record
  onSubmit = () => {};

  //If user changes the text in input, always store current in state.
  onFieldChanged = (state, text) => {
    //this is a function inherited from Component. It simply modifies one of the properties inside state
    this.setState({[state]: text});
  };

  onGradeSelected = selectedType => {
    // this makes the selected letter grade green when selected
    if (selectedType === this.state.specialty) {
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
    if (selectedType === this.state.specialty) {
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
      <SafeAreaView style={styles.container}>
        <View style={{justifyContent: 'center'}}>
          <Text style={{fontSize: 30, textAlign: 'center'}}>
            Ingredient Request
          </Text>
          <View style={{paddingRight: 50, paddingLeft: 50, paddingTop: 10}}>
            <TextField
              label="Name"
              value={this.state.name}
              onChangeText={text => this.onFieldChanged('name', text)}
            />
            <TextField
              label="Quantity"
              value={this.state.quantity}
              onChangeText={text => this.onFieldChanged('quantity', text)}
            />
            <TextField
              label="Special Request"
              value={this.state.special_request}
              onChangeText={text =>
                this.onFieldChanged('special_request', text)
              }
            />
          </View>

          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Text style={{fontSize: 18}}>Specialty: </Text>
            <TouchableOpacity
              onPress={() => this.setState({specialty: 'Organic'})}
              style={this.onGradeSelected('Organic')}>
              <Text style={this.onTextColorChange('Organic')}>Organic</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({specialty: 'Vegan'})}
              style={this.onGradeSelected('Vegan')}>
              <Text style={this.onTextColorChange('Vegan')}>Vegan</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({specialty: 'N/A'})}
              style={this.onGradeSelected('N/A')}>
              <Text style={this.onTextColorChange('N/A')}>N/A</Text>
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

export default CookIngredientRequest;
