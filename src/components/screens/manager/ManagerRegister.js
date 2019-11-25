// dependencies are found in package.json
// just google the dependency name on google to know what the dependency is
// if you want to change screens manually to visually see the screen you are working on, then simply
// go to RouterComponent.js and change "initial" and move it around to whichever component you like
import React, {Component} from 'react'; // default imports
import {Actions} from 'react-native-router-flux'; //Actions simply navigates to different screens
import Button from 'react-native-button'; // another dependency
import { connect } from 'react-redux'; // manages data flow (dont need to understand)
import { TextField } from 'react-native-material-textfield'; //dependency online
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, ScrollView, Image, KeyboardAvoidingView} from 'react-native'; //default components
import ImagePicker from 'react-native-image-crop-picker'; // this another dependency for photo gallery
import firebase from 'firebase';
import RNFetchBlob from 'rn-fetch-blob'


class ManagerRegister extends Component{
  constructor(){
    super();
    // these states are properties of the component ManagerHome
    this.state = {
      name: '',
      address: '',
      photo:'',
      phone:'',
      restaurantGrade: 'N/A',
      description: ''
    }
  }

  onFieldChanged = (state, text) => {
    //this is a function inherited from Component. It simply modifies one of the properties inside state
    this.setState({[state]: text}); 
  }

  onGradeSelected = (selectedType) => {// this makes the selected letter grade green when selected
    if (selectedType === this.state.accountType){
        return {backgroundColor:'#188a32', borderWidth:.5,justifyContent: 'center'}
    }else{
        return {backgroundColor:'white', borderWidth:.5, justifyContent: 'center'}
    }
  }

  onTextColorChange = (selectedType) => {
      if (selectedType === this.state.accountType){
          return {color:'white', paddingBottom:5, paddingTop:5, fontWeight:'bold'}
      }else{
          return {color:'black', paddingBottom:5, paddingTop:5}
      }
  }

  pickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      this.setState({photo: image.path});
    });
  } 


  renderImage = () => {
    const {photo} = this.state;
    if (photo !== ''){
      return (
        <TouchableOpacity onPress={() => this.pickImage()} >
          <Image source={{uri: photo}} style={{width:'40%', aspectRatio:1, alignSelf:'center', marginBottom:5}}/>
          <View style={{borderWidth:.3, backgroundColor:'#188a32', }} >
            <Text style={{textAlign:'center', fontWeight:'bold', fontSize:13, color:'white'}} > Change Photo </Text>
          </View>
        </TouchableOpacity>
      )
    }
    else{
      return (
        <TouchableOpacity onPress={() => this.pickImage()} >
          <Image source={{uri:'https://sachdevasweets.com/img/placeholders/xgrey_fork_and_knife.png,qv=1.pagespeed.ic.w93dy8J8rD.png'}}  style={{width:'40%', aspectRatio:1, alignSelf:'center'}} />
          <View style={{borderWidth:.3, backgroundColor:'#188a32', }} >
            <Text style={{textAlign:'center', fontWeight:'bold', fontSize:13, color:'white'}} > Add Photo </Text>
          </View>
        </TouchableOpacity>
      )
    }
  }

  // NOT SURE IF WORKS YET NEED TO TEST
  registerRestaurant = async () => {
    // gets the current user's ID, which in this case is the manager's ID
    const {currentUser} = firebase.auth(); 
    // gets the manager's input and uses it to save onto database
    const {name, address, photo, phone, restaurantGrade, description} = this.state;
    // creates a new restaurant with the given information and pushes it onto database
    let restID = await firebase.database().ref(`/restaurants/`).push({
      name: name,
      address: address,
      phone: phone,
      photo: photo,
      restaurantGrade: restaurantGrade,
      description: description,
      rating : 0,
      amountOfRatings: 0,
      manager: currentUser.uid
    })

    await firebase.database().ref(`/users/${currentUser.uid}`).set({restaurant: restID.name()});
  }

  renderPage = () => {
    const {Auth} = this.props;
    const {name, address, phone, description} = this.state;
    //if (Auth.restaurant === null || Auth.restaurant === undefined){//restaurant has not been added yet
      return (
        <ScrollView style={{paddingHorizontal:60}} >
          <Text style={{textAlign:'center', fontSize:25, fontWeight:'bold'}} > Restaurant Registry </Text>

          {this.renderImage()}

          <TextField
            label="Restaurant Name" 
            value={name} 
            onChangeText={ (text) => this.onFieldChanged('name', text) }
          />
          <TextField
            label="Address" 
            value={address} 
            onChangeText={(text) => this.onFieldChanged('address', text) }
          />
          <TextField
            label="Phone #" 
            value={phone} 
            onChangeText={(text) => this.onFieldChanged('phone', text) }
          />
          <TextField
            multiline
            label="Description" 
            value={description} 
            onChangeText={(text) => this.onFieldChanged('phone', text) }
          />

          <Text style={{textAlign:'center', fontWeight:'bold'}} > Letter Grade </Text>
          <View style={{flexDirection:'row', alignSelf:'center'}} >
              <TouchableOpacity onPress={() => this.setState({accountType:'A'}) } style={this.onGradeSelected('A')} >
                  <Text style={this.onTextColorChange('A')} >  A </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.setState({accountType:'B'}) } style={this.onGradeSelected('B')} >
                  <Text style={this.onTextColorChange('B')} >  B </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.setState({accountType:'C'}) } style={this.onGradeSelected('C')} >
                  <Text style={this.onTextColorChange('C')} >  C </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.setState({accountType:'N/A'}) } style={this.onGradeSelected('N/A')} >
                  <Text style={this.onTextColorChange('N/A')} >  N/A </Text>
              </TouchableOpacity>
          </View>


          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}>
            <Button 
              onPress={() => this.registerRestaurant()} 
              containerStyle={{bottom:0}}
              style={{backgroundColor:'#188a32', padding:8, color:'white', fontWeight:'bold', marginTop:30, alignSelf:'center'}} 
            > 
              Register Restaurant
            </Button>
          </KeyboardAvoidingView>
        </ScrollView>
      )
    //}
  }

  render(){
    return (
      <SafeAreaView style={styles.container} >
          {this.renderPage()}
      </SafeAreaView>
    );
  }
  
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  }
});

const mapStateToProps = state => {
  return { Auth: state.Auth};
}

export default connect(mapStateToProps)(ManagerRegister);
