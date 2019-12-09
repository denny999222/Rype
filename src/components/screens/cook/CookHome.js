import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';
import { StyleSheet, SafeAreaView, Text, View, FlatList} from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import {SectionList} from '../../common/components/';
import {Header} from '../../common/components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Modal from "react-native-modal";
import CookAddFoodItem from './CookAddFoodItem';
import CookComplain from './CookComplain';
import CookIngredientList from './CookIngredientList';
import CookIngredientRequest from './CookIngredientRequest';
import CookMenuList from './CookMenuList';


class CookHome extends Component{
  constructor(){
    super();
    this.state = {
    }
  }

  //phases of a component's life cycle
  // 1) before it renders (display on screen), do something 
  // 2) once it rendered, do something

  // this is a function inherited from component
  // componentDidMount = async () => { 
  //   const {restaurant} = this.props.Auth;
  //   await firebase.database().ref(`/restaurants/${restaurant}`).on('value', snapshot => {
  //     if(snapshot.hasChild('menu')){
  //       this.setState({menuList: Object. })
  //     }

  //   })
  // }

  //Direct to menu page
  onMenu = () => {

  }

    //Direct to supply page
    onSupply = () => {

    }



  render(){
    return (
      <SafeAreaView style={styles.container} >
          <Header
            name='Fumo Menu'
            contentStyle={{fontSize:30, color:'white', fontWeight:'bold', fontFamily:'Cochin'}} 
            containerStyle={{backgroundColor:'#188a32'}}
            rightButton={<Icon  />} 
          />
  



          
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

const mapStateToProps = state => {
  return {Auth: state.Auth};
}

export default connect(mapStateToProps)(CookHome);

