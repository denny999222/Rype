import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';
import { StyleSheet, SafeAreaView, Text, View, FlatList} from 'react-native';
import firebase from 'firebase';

class CookHome extends Component{
  constructor(){
    super();
    this.state = {
      menuList: [] // ingredients AND food Name
    }
  }

  //phases of a component's life cycle
  // 1) before it renders (display on screen), do something 
  // 2) once it rendered, do something

  // this is a function inherited from component
  componentWillMount = async () => { // this is a function to do something before the componenet renders
    // async means that it wont happen instantly so it should wait for a response

    // this fetches our database with the path /${restaurantName}/menu. The on keyword is a function 
    // that READS the database (you have read, write, update). Snapshot is the value returned from query
    // await firebase.database().ref(`/${restaurantName}/menu`).on('value', snapshot => {
    //   this.setState({ menuList: snapshot.val() }); // this simply stores the snapshot into our state
    // })

    // this fetches from firebase inside users. It then converts the snapshot.val() object into an array, and stores it in our state
    await firebase.database().ref(`/users`).on('value', snapshot => {
      let menuListArray = Object.entries(snapshot.val());
      this.setState({menuList: menuListArray});
    })
  }

  render(){
    return (
      <SafeAreaView style={styles.container} >
          <Text stlye={{fontSize:40}} > COOK HOME! </Text>

          {/* This flatlist tkaes in menuList from state as the data.
              RenderItem takes in a funtion with argument element of the array menuList and simply returns the emails as test.
              KeyExtractor is not that important, but react native recommends that each element has a unique ID in ANY list so you can identify it easily. 
              So what KeyExtractor does is simply give a unique ID for each. It takes in a function as an argument*/}
          <FlatList
            data = {this.state.menuList}
            renderItem = { function(menuItem){
              return (
                <Text> {menuItem.item[1].email} </Text>
              )
            } }
            keyExtractor = {() => {return 1}}
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
  }
});

export default CookHome;
