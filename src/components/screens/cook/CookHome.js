import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';
import { StyleSheet, SafeAreaView, Text, View, FlatList} from 'react-native';
import firebase from 'firebase';
import {SectionList} from '../../common/components/';

class CookHome extends Component{
  constructor(){
    super();
    this.state = {
      name: 'Bujar',
      warning: '2',
      menuList: ['Pizza', 'Burger', 'Taco', 'Pasta'], // food Name
      supplyList: ['Tomoatoes','Cucumbers','Salt','Pepper'] //supplies
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
      
      //Must fetch name, warning, and supply


    })
  }

  //Direct to menu page
  onMenu = () => {

  }

    //Direct to supply page
    onSupply = () => {

    }



  render(){
    return (
      <SafeAreaView style={styles.container} >
          {/*<Text style={{fontSize:40, textAlign:'center', marginBottom: 15}} > HOME </Text>*/}
          <Text style={{fontSize:40, textAlign:'center', marginBottom: 15}}>Welcome, {this.state.name} </Text>
          <Text style={{fontSize:20, marginBottom: 15}}>Number of warnings: {this.state.warning}</Text>

          {/* This flatlist tkaes in menuList from state as the data.
              RenderItem takes in a funtion with argument element of the array menuList and simply returns the emails as test.
              KeyExtractor is not that important, but react native recommends that each element has a unique ID in ANY list so you can identify it easily. 
              So what KeyExtractor does is simply give a unique ID for each. It takes in a function as an argument*/}

          <SectionList title='Menu' list={['Pizza','Burger','Crossaint','Donut','Eggplant Parmagania','French Fries']} bannerColor='#6f2da8' titleColor='white' height={250} />
          
          {/* Might want to add the <Keyboard> tags that are in Home */}
              <Button 
                  onPress={() => Actions.CookMenuList()} 
                  containerStyle={{bottom:0}}
                  style={{borderRadius:20, overflow:'hidden', backgroundColor:'#66a82d', padding:10, paddingLeft: 50, paddingRight: 50, color:'white', fontWeight:'bold', marginTop:20, alignSelf:'center'}} 
              > 
                  Add/Remove Menu Items
              </Button>

          <Text style={{margin: 10}}> </Text>
          <SectionList title='Supplies' list={['Tomoatoes','Cucumbers','Salt','Pepper']} bannerColor='#6f2da8' titleColor='white' height={175} />
          
          {/* Might want to add the <Keyboard> tags that are in Home */}
              <Button 
                  onPress={() => Actions.CookIngredientList()} 
                  containerStyle={{bottom:0}}
                  style={{borderRadius:20, overflow:'hidden', backgroundColor:'#66a82d', padding:10, paddingLeft: 50, paddingRight: 50, color:'white', fontWeight:'bold', marginTop:20, alignSelf:'center'}} 
              > 
                  Order Supply Items
              </Button>
  
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

export default CookHome;



// MANAGER
// payDelivery = (deliveryID, amount) => {
//   const {nonce, payerId, email, firstName, lastName, phone } = await requestOneTimePayment
//   (
//     token,
//   {
//     amount: amount, // required
//     // any PayPal supported currency (in this case USD) 
//     currency: 'USD',
//     // any PayPal supported locale 
//     localeCode: 'en_GB', 
//     shippingAddressRequired: false,
//     userAction: 'commit', // display 'Pay Now' on the PayPal review page
//     // one of 'authorize', 'sale', 'order'. defaults to 'authorize'. 
//     intent: 'authorize', 
//   }
//   );
  
// }

// changeCommision = async (percent, userID, employeeType) => {
//   const {restaurantID} = this.props;
//   // receives userID and employee type and changes their rate inside firebase database
//   await firebase.database().ref(`/${restaurantID}/${employeeType}/${userID}/`).child('commision')
//     .transaction(rate => { // this works for decrease/increase commision too
//       return rate += percent;
//     }) 
// }

// // SALESPERSON
// pickSupply = async (supplies) => {
//   const {restaurantID} = this.props;
//   let maxRating = 0; // assumes best rating is the first element
//   // loops through the supplies to find best match
//   for (let i = 1; i<supplies.length; i++){
//     if (supples[maxRating] < supplies[i]){
//       maxRating = i;
//     }
//   }
//   // updates the supplies in database
//   await firebase.database().ref(`/${restaurantID}`).child(supplies)
//     .update({supplies: supplies[maxRating]})
// }

// negotiatePrice = async (userID, bidAmount, currentAmount) => {
//   if ( !(bidAmount >= currentAmount) ){ // only if bid is less than current
//     await firebase.database().ref(`users/${userID}`).child('offer')
//       .transaction(current => {
//         return bidAmount
//       })
//   }
// }

// // DELIVERY
// shortestRoute = (currentLocation, destination) => {
//   handleGetDirections = () => {
//     const data = {
//        source: {
//         latitude: currentLocation.latitude,
//         longitude: currentLocation.longitude
//       },
//       destination: {
//         latitude: destination.latitude,
//         longitude: destination.longitude
//       },
//       params: [
//         {
//           key: "travelmode",
//           value: "driving" // may be "walking", "bicycling" or "transit" as well
//         },
//         {
//           key: "dir_action",
//           value: "navigate" // this instantly initializes navigation using the given travel mode
//         }
//       ]
//     }
 
//     getDirections(data); // function imported from google API
//   }
// }

// //similar to negotiatePrice function
// foodBid = (bidAmount, currentAmount) => {
//   if ( !(bidAmount >= currentAmount) ){ // only if bid is less than current
//     await firebase.database().ref(`users/${userID}`).child('offer')
//       .transaction(current => { // updates new bid offer
//         return bidAmount
//       })
//   }
// }


// negotiatePrice = async (userID, bidAmount, currentAmount) => {
//   if ( !(bidAmount >= currentAmount) ){ // only if bid is less than current
//     await firebase.database().ref(`users/${userID}`).child('offer')
//       .transaction(current => {
//         return bidAmount
//       })
//   }
// }

// winSupply = async (userID) => {
//   const {restaurantID} = this.props; // gets restaurant from props
//   await firebase.database().ref(`restaurants/${restaurantID}`).child('supply').on('value', snapshot => {
//     await firebase.database().ref(`/users/${userID}`).set({supply: snapshot.val()})
//   })
// }


// //USER CUSTOMER
// rateCook = async (cookID, totalRatings) => {
//   const {rating} = this.state;
//   await firebase.database().ref(`/users/${salespersonID}`).child('rating')
//     .transaction( rating2 => {
//       return (rating2 + rating)/(totalRatings+1)
//     })
// }

// rateDelivery = (deliveryID, totalRatings) => {
//   const {rating} = this.state;
//   await firebase.database().ref(`/users/${deliveryID}`).child('rating')
//     .transaction( rating2 => {
//       return (rating2 + rating)/(totalRatings+1)
//     })
// }