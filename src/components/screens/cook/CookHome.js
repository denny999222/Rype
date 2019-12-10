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

      <SafeAreaView>
      {/*<Text style={{fontSize:40, textAlign:'center', marginBottom: 15}} > HOME </Text>*/}
      <Text
        style={{
          fontSize: 40,
          textAlign: 'left',
          marginBottom: 15,
          fontWeight: 'bold',
        }}>
        Welcome, {this.state.name}{' '}
      </Text>
      <Text style={{ fontSize: 15, marginBottom: 15 }}>
        Number of warnings: {this.state.warning}
      </Text>

      {/* This flatlist tkaes in menuList from state as the data.
            RenderItem takes in a funtion with argument element of the array menuList and simply returns the emails as test.
            KeyExtractor is not that important, but react native recommends that each element has a unique ID in ANY list so you can identify it easily. 
            So what KeyExtractor does is simply give a unique ID for each. It takes in a function as an argument*/}
      <Text
        style={{
          fontWeight: 'bold',
          color: '#6f2da8',
          textAlign: 'center',
          fontSize: 25,
        }}>
        {' '}
        Menu
      </Text>
      <SectionList
        style={{ borderBottomWidth: 0, fontWeight: 'bold', borderWidth: 20 }}
        list={[
          'Pizza',
          'Burger',
          'Crossaint',
          'Donut',
          'Eggplant Parmagania',
          'French Fries',
        ]}
        height={190}
      />

      {/* Might want to add the <Keyboard> tags that are in Home */}
      <Button
        onPress={() => this.onMenu()}
        containerStyle={{ bottom: 0 }}
        style={styles.button}>
        Add/Remove Menu Items
      </Button>

      <Text style={{ margin: 10 }}> </Text>
      <Text
        style={{
          fontWeight: 'bold',
          color: '#6f2da8',
          textAlign: 'center',
          fontSize: 25,
        }}>
        {' '}
        Supplies
      </Text>
      <SectionList
        list={['Tomatoes', 'Cucumbers', 'Salt', 'Pepper']}
        height={190}
      />

      {/* Might want to add the <Keyboard> tags that are in Home */}
      <Button
        onPress={() => this.onSupply()}
        // containerStyle={{ bottom: 0 }}
        style={styles.button}>
        Order Supply Items
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

