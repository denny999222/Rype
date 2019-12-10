import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, ScrollView, Image, Dimensions, FlatList} from 'react-native'; //default components
import ImagePicker from 'react-native-image-crop-picker'; // this another dependency for photo gallery
import firebase from 'firebase';
import {Header} from '../../common/components';
import RNFetchBlob from 'rn-fetch-blob';
import MapViewDirections from 'react-native-maps-directions';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome5';
import RestaurantInfo from './RestaurantInfo';


//AIzaSyD6fy4fDNly-V8rcpnSagEARnTd86m8fMM
class CustomerHome extends Component{

  constructor(){
    super();
    // these states are properties of the component ManagerHome
    this.state = {
      restaurantName: '',
      restaurantAddress: '',
      restaurantPhoto:'',
      restaurantPhone:'',
      restaurantGrade: 'N/A',
      restaurantDescription: '',
      customerID: '',
      customerType: '', //This will help distingusih between the registered(vip, non)/non-registered for the different price
      topFoods: [{name: 'Dumplings'}, {name: 'Sesame Chicken'}, {name: 'Rice Cake'}], //Note, i havent used the bottom two
      recentThreeOrders: [{name: 'Dumplings'}, {name: 'Sesame Chicken'}, {name: 'Rice Cake'}], 

      restaurantList: []

    }
  }

  //Need to learn how to make a function to return something ==> BS. 12/2/2019
    //Aka need to learn Javascript lol...
  /* //This doesn't currently work
    calculatePrice = () =>
    rate = 1;
    if(this.state.customerType == 'VIP'){
      
    }
  }*/

  componentDidMount = async () => {
    await firebase.database().ref(`/restaurants/`).on('value', snapshot => {
      this.setState( { restaurantList: Object.entries(snapshot.val())} )
    })
  }

  //Add an item to a cart
  onAdd = () => {

  }
  //

  renderRestaurantItem = (element) => {
    const {photoUrl, name} = element.item[1];
    return (
      <TouchableOpacity onPress={() => Actions.RestaurantInfo({data: element.item[1]})} style={{borderWidth:.4, margin:5}} >
        <Image
            source={{uri: photoUrl}}
            style={{ width:100, height:100,}}
        />
        <Text style={{textAlign:'center', backgroundColor:'#188a32', color:'white', fontWeight:'bold'}} >{name}</Text>
      </TouchableOpacity>
    )
  }



  render(){
    const { width, height } = Dimensions.get('window');
    const ASPECT_RATIO = width / height;
    const origin = {latitude: 37.3318456, longitude: -122.0296002};
    const destination = {latitude: 37.771707, longitude: -122.4053769};
    const GOOGLE_MAPS_APIKEY = 'AIzaSyD6fy4fDNly-V8rcpnSagEARnTd86m8fMM';
    return (
      <ScrollView style={styles.container} >
          
          <MapView 
            initialRegion={{
              latitude: 37.771707,
              longitude: -122.4053769,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0922*ASPECT_RATIO,
            }}
            style={{width:'100%', aspectRatio:1.3, alignSelf:'center'}}
          >
            <MapViewDirections
              origin={origin}
              apikey={GOOGLE_MAPS_APIKEY}
            />
          </MapView>

          <View style={{width:'95%', marginTop:10, alignSelf:'center'}} >
            <Text style={{textAlign:'center', fontWeight:'bold', fontSize:20, fontFamily:'Cochin'}} > Nearby Restaurants </Text>
            <View style={{flexDirection:'row', alignItems:'center', borderWidth:.5}} >
                <FlatList
                    data={this.state.restaurantList}
                    renderItem={ this.renderRestaurantItem }
                    keyExtractor={ (element) => element[0]}
                    horizontal={true}
                />
            </View>
          </View>
          

        


      </ScrollView>
    );
  }
  
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'white',
    paddingVertical:40
  }
});

export default CustomerHome;
