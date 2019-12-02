import React, {Component} from 'react'; // default imports
import {Actions} from 'react-native-router-flux'; //Actions simply navigates to different screens
import Button from 'react-native-button'; // another dependency
import { connect } from 'react-redux'; // manages data flow (dont need to understand)
import { TextField } from 'react-native-material-textfield'; //dependency online
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, ScrollView, Image, FlatList} from 'react-native'; //default components
import ImagePicker from 'react-native-image-crop-picker'; // this another dependency for photo gallery
import firebase from 'firebase';
import RNFetchBlob from 'rn-fetch-blob';
import Icon from 'react-native-vector-icons/FontAwesome5';


class ManagerInfo extends Component{
  constructor(){
    super();
    this.state = {
      
    }
  }

  componentWillMount = () => {

  }

  renderDelivery = (element) => {
    return (
        <Image
            source={{uri:element.item}}
            style={{marginRight:5, marginTop:5, marginBottom:5, width:80, aspectRatio:1,}}
        />
    )
  }

  render(){
    let tempKey = 0;
    return (
      <SafeAreaView style={styles.container} >
          <View style={{flexDirection:'row', padding:10}} >
            <Image source={{uri:'https://cdn2.iconfinder.com/data/icons/ios-tab-bar/25/Customers_Filled-512.png'}} style={{width:'25%', aspectRatio:1, marginRight:5}} />
            <View style={{flexDirection:'row', alignItems:'center'}} >
                <View style={{flexDirection:'column', justifyContent:'space-between'}} >
                    <View>
                        <Text style={{fontSize:20, fontWeight:'bold'}} > Restaurant Name </Text>
                        <Text> Restaurant Address </Text>
                    </View>
                    <Text style={{color:'grey', fontWeight:'bold', fontStyle:'italic'}} > 111-111-1111 </Text>
                </View>  
                <Text style={{color:'blue', fontSize:55, fontWeight:'bold', textAlignVertical:'center'}} > A </Text>
            </View>          
          </View>
          
          <View style={{margin:10, borderBottomWidth:.5,}}>
            <Text style={{fontWeight:'bold', fontSize:16}} >Description </Text>
            <Text>This is the description. Bunch of bullshit about this shitty restaurant! Tacos and hamburgers for free after 5-PM. Call Now!</Text>
          </View>

          <View style={{width:'100%', marginTop:10}} >
            <Text>Cooks</Text>
            <View style={{flexDirection:'row', alignItems:'center', borderWidth:.5}} >
                <FlatList
                    data={['https://cdn2.iconfinder.com/data/icons/ios-tab-bar/25/Customers_Filled-512.png','https://cdn2.iconfinder.com/data/icons/ios-tab-bar/25/Customers_Filled-512.png','https://cdn2.iconfinder.com/data/icons/ios-tab-bar/25/Customers_Filled-512.png','https://cdn2.iconfinder.com/data/icons/ios-tab-bar/25/Customers_Filled-512.png','https://cdn2.iconfinder.com/data/icons/ios-tab-bar/25/Customers_Filled-512.png']}
                    renderItem={ this.renderDelivery }
                    keyExtractor={ () => tempKey++}
                    horizontal={true}
                />
                <TouchableOpacity> 
                    <Icon name='plus' color='#188a32' size={25} style={{margin:10, }} />
                </TouchableOpacity>
            </View>
            <Text>Delivery</Text>
            <View style={{flexDirection:'row', alignItems:'center', borderWidth:.5}} >
                <FlatList
                    data={['https://cdn2.iconfinder.com/data/icons/ios-tab-bar/25/Customers_Filled-512.png','https://cdn2.iconfinder.com/data/icons/ios-tab-bar/25/Customers_Filled-512.png','https://cdn2.iconfinder.com/data/icons/ios-tab-bar/25/Customers_Filled-512.png','https://cdn2.iconfinder.com/data/icons/ios-tab-bar/25/Customers_Filled-512.png','https://cdn2.iconfinder.com/data/icons/ios-tab-bar/25/Customers_Filled-512.png']}
                    renderItem={ this.renderDelivery }
                    keyExtractor={ () => tempKey++}
                    horizontal={true}
                />
                <TouchableOpacity> 
                    <Icon name='plus' color='#188a32' size={25} style={{margin:10, }} />
                </TouchableOpacity>
            </View>
            <Text>Sales People</Text>
            <View style={{flexDirection:'row', alignItems:'center', borderWidth:.5}} >
                <FlatList
                    data={['https://cdn2.iconfinder.com/data/icons/ios-tab-bar/25/Customers_Filled-512.png','https://cdn2.iconfinder.com/data/icons/ios-tab-bar/25/Customers_Filled-512.png','https://cdn2.iconfinder.com/data/icons/ios-tab-bar/25/Customers_Filled-512.png','https://cdn2.iconfinder.com/data/icons/ios-tab-bar/25/Customers_Filled-512.png','https://cdn2.iconfinder.com/data/icons/ios-tab-bar/25/Customers_Filled-512.png']}
                    renderItem={ this.renderDelivery }
                    keyExtractor={ () => tempKey++}
                    horizontal={true}
                />
                <TouchableOpacity> 
                    <Icon name='plus' color='#188a32' size={25} style={{margin:10, }} />
                </TouchableOpacity>
            </View>
          </View>
      </SafeAreaView>
    );
  }
  
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    margin:10
  }
});


export default ManagerInfo;
