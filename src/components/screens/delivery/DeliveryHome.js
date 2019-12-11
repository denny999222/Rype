import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, ScrollView, Image, KeyboardAvoidingView, FlatList} from 'react-native'; //default components
import ImagePicker from 'react-native-image-crop-picker'; // this another dependency for photo gallery
import firebase from 'firebase';
import {Header} from '../../common/components/'
import RNFetchBlob from 'rn-fetch-blob';
import { connect } from 'react-redux'; // manages data flow (dont need to understand)
import getDirections from 'react-native-google-maps-directions';



class DeliveryHome extends Component{

  constructor(){
    super();
    // these states are properties of the component ManagerHome
    this.state = {
      orderList: [],

      lat: 0,
      long:0
    }
  }

  componentDidMount = async () => {
    const {restaurantID} = this.props;
    await firebase.database().ref(`/restaurants/${restaurantID}/orders`).on('value', snapshot => {
      if (snapshot.exists()){
        this.setState({orderList: Object.entries(snapshot.val()) });
      }
    })
  }


  //Add an item to a cart
  onBid = async (userID) => {
    const {restaurantID} = this.props;
    const {long, lat} = this.state;
    //getting rest long lat
    await firebase.database().ref(`restaurants/${restaurantID}`).on('value', snapshot => {
      this.setState({lat: parseInt( snapshot.val().lat), long: parseInt(snapshot.val().long)  } )
    })

    //getting customer long lat
    await firebase.database().ref(`/users/${userID}`).on('value', snapshot => {
      const {long, lat} = snapshot.val();
      let long2 = parseInt(long);
      let lat2 = parseInt(lat);

      const data = {
        source: {
         latitude: lat,
         longitude: long
       },
       destination: {
         latitude: lat2,
         longitude: long2
       },
       params: [
         {
           key: "travelmode",
           value: "driving"        // may be "walking", "bicycling" or "transit" as well
         },
         {
           key: "dir_action",
           value: "navigate"       // this instantly initializes navigation using the given travel mode
         }
       ],
       waypoints: [
        {
          latitude: lat,
          longitude: long
        },
        {
          latitude: lat+.000001,
          longitude: long+.000001
        },
           {
          latitude: lat2,
          longitude: long2
        }
       ]
     }

     getDirections(data);
    })

  }

  renderList = (element) => {
    const {total} = element.item[1];
    return (
      <View style={{marginBottom: 10, marginHorizontal:10, flexDirection:'row'}} >
        <View style={{borderWidth:.5, width:'70%'}} >
          <Text style={{padding:5,}} >{element.item[0]}</Text>
          <Text style={{padding:5, fontWeight:'bold', color:'red'}} >${total}</Text>
        </View>

        <View style={{width:'30%', justifyContent:'center'}} >
          <Button 
              onPress={() => this.onBid(element.item[0])} 
              style={{backgroundColor:'#188a32', padding:5, color:'white', alignSelf:'center', fontSize:14, fontWeight:'bold', width:'80%'}} 
          > 
              Bid
          </Button>
        </View>
      </View>
    )
  }



  render(){
    console.log(this.state.long)
    console.log(this.state.lat)

    return (
      <SafeAreaView style={styles.container} >

          <Header
            name='Home'
            contentStyle={{fontSize:30, color:'white', fontWeight:'bold', fontFamily:'Cochin'}} 
            containerStyle={{backgroundColor:'#188a32'}}
            rightButton={<View/>}
          />

        <FlatList
          data = {this.state.orderList}
          renderItem = { this.renderList }
          keyExtractor = { (element) => element}
          contentContainerStyle={{margin:10}}
        />
      



      </SafeAreaView>
    );
  }
  
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'white'
  }
});


const mapStateToProps = state => {
  return {restaurantID: state.Auth.restaurant}
}

export default connect(mapStateToProps)(DeliveryHome);
