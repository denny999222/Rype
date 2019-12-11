import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';
import { StyleSheet, SafeAreaView, Text, View, FlatList} from 'react-native';
import {TextField} from 'react-native-material-textfield';
import firebase from 'firebase';
import { connect } from 'react-redux';
import {SectionList} from '../../common/components/';
import {Header} from '../../common/components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Modal from "react-native-modal";
import TagInput from 'react-native-tags-input';
import CookAddFoodItem from './CookAddFoodItem';
import CookComplain from './CookComplain';
import CookIngredientList from './CookIngredientList';
import CookIngredientRequest from './CookIngredientRequest';
import CookMenuList from './CookMenuList';


class CookHome extends Component{
  constructor(){
    super();
    this.state = {

      showModal: false,
      foodName: '',
      foodPrice:'',

      tags: {
        tag: '',
        tagsArray: []
      },

      menuList: []
    }
  }

  componentDidMount = async () => {
    const {restaurant} = this.props.Auth;
    await firebase.database().ref(`/restaurants/${restaurant}`).on('value', snapshot => {
      this.setState({restaurantInfo: snapshot.val()});
      if (snapshot.hasChild('menu')){
        this.setState({menuList: Object.values(snapshot.val().menu) })
      }
    })
  }

  updateTagState = (state) => {
    this.setState({
      tags: state
    })
  };

  addFood = async () => {
    const {tags, foodName, foodPrice} = this.state;
    const {restaurant} = this.props.Auth;
    await firebase.database().ref(`/restaurants/${restaurant}/menu/`).push({foodName: foodName, foodPrice: foodPrice, ingredients: tags.tagsArray});
    this.setState({showModal:false, foodName:'', foodPrice:'', tags:{tag:'', tagsArray:[]}})
  }
  
  onFieldChanged = (state, text) => {
    this.setState( {[state]: text} )
  }

  showModal = () => {
    return (
      <Modal
          isVisible={this.state.showModal}
          onBackdropPress={() => this.setState({showModal: false})}
      >
        <View style={{backgroundColor:'white'}} >
          <Header
            name='Add Food'
            contentStyle={{fontSize:20, color:'white', fontWeight:'bold'}} 
            containerStyle={{backgroundColor:'#188a32', height:40}}
            leftButton={<Icon name='times-circle' size={20} color='white' />} 
            onPressLeft = {() => this.setState({showModal:false})}
          />

          <TextField 
            label="Food Name" 
            containerStyle ={{marginHorizontal:20}}
            value={this.state.foodName} 
            onChangeText={(text) => this.onFieldChanged('foodName', text) }
          /> 

          <TextField 
            label="Price" 
            containerStyle ={{marginHorizontal:20}}
            value={this.state.foodPrice} 
            onChangeText={(text) => this.onFieldChanged('foodPrice', text) }
          /> 
          
          <TagInput
            updateState={this.updateTagState}
            tags={this.state.tags}
            placeholder="Ingredients" 
            labelStyle={{color: '#188a32'}}
            leftElement={<Icon name='mortar-pestle' color='#188a32' size={24} />}
            leftElementContainerStyle={{marginRight: 10}}
            inputContainerStyle={{marginHorizontal:10, borderWidth:.4, marginVertical:5, borderRadius:10}}
            tagStyle={[styles.tag,{backgroundColor:'#188a32'}]}
            tagTextStyle={[styles.tagText,{color:'white', fontWeight:'bold'}]}
          />

          <Button 
            onPress={() => this.addFood()} 
            style={{backgroundColor:'#188a32', paddingHorizontal:10, paddingVertical:5, color:'white', fontWeight:'bold', marginTop:5, marginBottom:10, alignSelf:'center'}}          > 
            Add
          </Button>
        </View>
      </Modal>
    )
  }

  renderMenuItem = (element, index) => {
    const {foodName, foodPrice, ingredients} = element;
    
    return (
      <View style={{flexDirection:'row', width:'93%', alignSelf:'center', marginTop:5, marginRight:10}} >
        <Text style={{fontSize:30, fontFamily:'Cochin', marginHorizontal:10, fontWeight:'bold', alignSelf:'center',}} >{index}</Text>
        <View style={{flexDirection:'column'}} >
          <Text style={{fontSize:24, fontFamily:'Cochin', textAlignVertical:'center',}} >{foodName}</Text>
          <Text style={{fontSize:17, fontFamily:'Cochin', textAlignVertical:'center', color:'grey', fontStyle:'italic'}} >{ingredients.toString()}</Text>
        </View>
          <Text style={{alignSelf:'center', color:'red', fontSize:18, right:0, position:'absolute',}} >${foodPrice}</Text>
      </View>
    )
  } 


  render(){
    return (
      <SafeAreaView style={styles.container} >
          <Header
            name='Fumo Menu'
            contentStyle={{fontSize:30, color:'white', fontWeight:'bold', fontFamily:'Cochin'}} 
            containerStyle={{backgroundColor:'#188a32'}}
            rightButton={<Icon name='plus' size={24} color='white'/>} 
            onPressRight = {() => {this.setState({showModal:true})}}
          />
  
          <FlatList
            data={this.state.menuList}
            renderItem={({item, index}) => this.renderMenuItem(item, index) }
            keyExtractor={ (element) => element.foodName}
          />

      {this.showModal()}
        
          
      </SafeAreaView>
    );
  }
  
};

// these are styles
// This is how it would look like default in every component if you want styling
const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: 'white',
},
button: {
  borderRadius: 20,
  overflow: 'hidden',
  backgroundColor: 'transparent',
  padding: 10,
  paddingLeft: 50,
  paddingRight: 50,
  color: '#66a82d',
  fontWeight: 'bold',
  marginTop: 20,
  alignSelf: 'center',
  borderColor: '#66a82d',
  borderWidth: 1,
},
});

const mapStateToProps = state => {
  return {Auth: state.Auth};
}

export default connect(mapStateToProps)(CookHome);

