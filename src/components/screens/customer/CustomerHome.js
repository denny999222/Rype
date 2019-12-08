import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, ScrollView, Image, KeyboardAvoidingView} from 'react-native'; //default components
import ImagePicker from 'react-native-image-crop-picker'; // this another dependency for photo gallery
import firebase from 'firebase';
import RNFetchBlob from 'rn-fetch-blob'

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
      recentThreeOrders: [{name: 'Dumplings'}, {name: 'Sesame Chicken'}, {name: 'Rice Cake'}]

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


  //Add an item to a cart
  onAdd = () => {

  }



  render(){
    return (
      <SafeAreaView style={styles.container} >
          <Text style={{fontSize:30, textAlign: 'center', marginVertical: 10}} > CUSTOMER HOME! </Text>
          <View style={{marginHorizontal: 15}}>
            <Image source={{uri:'https://i.stack.imgur.com/JHHER.png'}}  style={{ width:'100%', aspectRatio:1, alignSelf:'center'}} />
          </View>
          <Text style={{fontSize:20, textAlign: 'center', marginVertical: 10}}>Top 3 Foods</Text>
          <View style={{marginHorizontal: 10, flexDirection: 'row', flexWrap: 'wrap', padding: 7}}>
            <View style={{width: '33%'}}>
            <Image source={{uri:'https://sachdevasweets.com/img/placeholders/xgrey_fork_and_knife.png,qv=1.pagespeed.ic.w93dy8J8rD.png'}}  style={{width:'40%', aspectRatio:1, alignSelf:'center'}} />
            <Button 
              onPress={() => this.onAdd()}  
              containerStyle={{bottom:0}}
              style={{backgroundColor:'#6f2da8', padding:10, color:'white', fontWeight:'bold', marginTop:20, alignSelf:'center'}} 
              > 
              Add to Cart
            </Button>
            </View>
            <View style={{width: '33%'}}>
            <Image source={{uri:'https://sachdevasweets.com/img/placeholders/xgrey_fork_and_knife.png,qv=1.pagespeed.ic.w93dy8J8rD.png'}}  style={{width:'40%', aspectRatio:1, alignSelf:'center'}} />
            <Button 
              onPress={() => this.onAdd()}  
              containerStyle={{bottom:0}}
              style={{backgroundColor:'#6f2da8', padding:10, color:'white', fontWeight:'bold', marginTop:20, alignSelf:'center'}} 
              > 
              Add to Cart
            </Button>
            </View>
            <View style={{width: '33%'}}>
            <Image source={{uri:'https://sachdevasweets.com/img/placeholders/xgrey_fork_and_knife.png,qv=1.pagespeed.ic.w93dy8J8rD.png'}}  style={{width:'40%', aspectRatio:1, alignSelf:'center'}} />
            <Button 
              onPress={() => this.onAdd()}  
              containerStyle={{bottom:0}}
              style={{backgroundColor:'#6f2da8', padding:10, color:'white', fontWeight:'bold', marginTop:20, alignSelf:'center'}} 
              > 
              Add to Cart
            </Button>
            </View>
          </View>

        <View style={{marginVertical: 15}}>
          <Text style={{fontSize:20, textAlign: 'center'}}>Recent 3 Foods</Text>
          <View style={{marginHorizontal: 10, flexDirection: 'row', flexWrap: 'wrap', padding: 7}}>
            <View style={{width: '33%'}}>
            <Image source={{uri:'https://sachdevasweets.com/img/placeholders/xgrey_fork_and_knife.png,qv=1.pagespeed.ic.w93dy8J8rD.png'}}  style={{width:'40%', aspectRatio:1, alignSelf:'center'}} />
            <Button 
              onPress={() => this.onAdd()}  
              containerStyle={{bottom:0}}
              style={{backgroundColor:'#6f2da8', padding:10, color:'white', fontWeight:'bold', marginTop:20, alignSelf:'center'}} 
              > 
              Add to Cart
            </Button>
            </View>
            <View style={{width: '33%'}}>
            <Image source={{uri:'https://sachdevasweets.com/img/placeholders/xgrey_fork_and_knife.png,qv=1.pagespeed.ic.w93dy8J8rD.png'}}  style={{width:'40%', aspectRatio:1, alignSelf:'center'}} />
            <Button 
              onPress={() => this.onAdd()}  
              containerStyle={{bottom:0}}
              style={{backgroundColor:'#6f2da8', padding:10, color:'white', fontWeight:'bold', marginTop:20, alignSelf:'center'}} 
              > 
              Add to Cart
            </Button>
            </View>
            <View style={{width: '33%'}}>
            <Image source={{uri:'https://sachdevasweets.com/img/placeholders/xgrey_fork_and_knife.png,qv=1.pagespeed.ic.w93dy8J8rD.png'}}  style={{width:'40%', aspectRatio:1, alignSelf:'center'}} />
            <Button 
              onPress={() => this.onAdd()}  
              containerStyle={{bottom:0}}
              style={{backgroundColor:'#6f2da8', padding:10, color:'white', fontWeight:'bold', marginTop:20, alignSelf:'center'}} 
              > 
              Add to Cart
            </Button>
            </View>
          </View>
          </View>



          {/*this.renderImage()*/}


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

export default CustomerHome;
