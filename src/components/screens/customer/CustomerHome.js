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
      name: '',
      address: '',
      photo:'',
      phone:'',
      restaurantGrade: 'N/A',
      description: ''
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


  //Add an item to a cart
  onAdd = () => {

  }



  render(){
    return (
      <SafeAreaView style={styles.container} >
          <Text style={{fontSize:30, textAlign: 'center'}} > CUSTOMER HOME! </Text>
          <Text style={{fontSize:80, textAlign: 'center', marginVertical: 80}}>MAP</Text>
          <Text style={{fontSize:20, textAlign: 'center'}}>Top 3 Foods</Text>
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
  }
});

export default CustomerHome;
