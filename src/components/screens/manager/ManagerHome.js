import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';
import { connect } from 'react-redux';
import { TextField } from 'react-native-material-textfield';
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';


class ManagerHome extends Component{
  constructor(){
    super();
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
    this.setState({[state]: text});
  }

  onGradeSelected = (selectedType) => {
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
      console.log(image);
    });
  } 
  

  renderImage = () => {

  }

  renderPage = () => {
    const {Auth} = this.props;
    const {name, address, phone, description} = this.state;
    //if (Auth.restaurant === null || Auth.restaurant === undefined){//restaurant has not been added yet
      return (
        <ScrollView style={{paddingHorizontal:60}} >
          <Text style={{textAlign:'center', fontSize:25, fontWeight:'bold'}} > Restaurant Registry </Text>

          <TouchableOpacity onPress={() => this.pickImage()} >
            <Image source={{uri:'https://sachdevasweets.com/img/placeholders/xgrey_fork_and_knife.png,qv=1.pagespeed.ic.w93dy8J8rD.png'}}  style={{width:'40%', aspectRatio:1, alignSelf:'center'}} />
            <View style={{borderWidth:.3, backgroundColor:'#188a32', }} >
              <Text style={{textAlign:'center', fontWeight:'bold', fontSize:13, color:'white'}} > Add Photo </Text>
            </View>
          </TouchableOpacity>

          <TextField
            label="Restaurant Name" 
            value={name} 
            onChangeText={(text) => this.onFieldChanged('name', text) }
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

export default connect(mapStateToProps)(ManagerHome);
