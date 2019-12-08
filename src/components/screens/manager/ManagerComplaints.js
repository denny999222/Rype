import React, {Component} from 'react'; // default imports
import {Actions} from 'react-native-router-flux'; //Actions simply navigates to different screens
import Button from 'react-native-button'; // another dependency
import { connect } from 'react-redux'; // manages data flow (dont need to understand)
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, Image, FlatList} from 'react-native'; //default components
import ImagePicker from 'react-native-image-crop-picker'; // this another dependency for photo gallery
import firebase from 'firebase';
import {Header} from '../../common/components/';
import Icon from 'react-native-vector-icons/FontAwesome5';
import RNFetchBlob from 'rn-fetch-blob'


class ManagerComplaints extends Component{
  constructor(){
    super();
    this.state = {
        selected: 'orders'
    }
  }

  renderBackground = (selected) => {
    if(selected === this.state.selected){
      return {backgroundColor:'#188a32', borderWidth:.3, borderRadius:7, marginHorizontal:10}
    }
    else{
      return {backgroundColor:'#cbd1cc', borderWidth:.3, borderRadius:7, marginHorizontal:10}
    }
  }

  renderText = (selected) => {
    if(selected === this.state.selected){
      return {color:'white', padding:5, fontWeight:'bold'}
    }
    else{
      return {color:'black', padding:5, fontWeight:'bold'}
    }
  }

  renderOrderPages = () => {
    const {selected} = this.state;
    let customers = [ [['1917uniqueID919'], ['customer name', 'price']], [['1917uniqueID919'], ['customer name', 'price']], [['1917uniqueID919'], ['customer name', 'price']], [['1917uniqueID919'], ['customer name', 'price']], [['1917uniqueID919'], ['customer name', 'price']], [['1917uniqueID919'], ['customer name', 'price']], [['1917uniqueID919'], ['customer name', 'price']] ];
    switch(selected){
      case 'orders':
        return this.renderCustomers(customers);
      case 'complaints':
        return this.renderCustomers(customers);
    }
  }

  renderCustomers = (customerList) => {
    return (
      <FlatList
        data = {customerList}
        renderItem = { this.renderList }
        keyExtractor = { () => 1}
        contentContainerStyle={{margin:10}}
      />
    )
  }

  renderList = (element) => {
    const {selected} = this.state;
    switch(selected){
      case 'orders':
          return (
            <View style={{marginBottom: 10, marginHorizontal:10, flexDirection:'row'}} >
              <TouchableOpacity style={{borderWidth:.5, width:'70%'}} >
                <Text style={{padding:5,}} >{element.item[1][0]}</Text>
                <Text style={{padding:5}} >{element.item[1][1]}</Text>
              </TouchableOpacity>

              <View style={{width:'30%', justifyContent:'center'}} >
                <Button 
                    onPress={() => null} 
                    style={{backgroundColor:'#188a32', padding:5, color:'white', alignSelf:'center', fontSize:12, width:'80%'}} 
                > 
                    Approve
                </Button>
                <Button 
                    onPress={() => null} 
                    style={{backgroundColor:'red', padding:5, color:'white', alignSelf:'center', fontSize:12, width:'80%'}} 
                > 
                    Decline
                </Button>
              </View>
            </View>
          )
      default:
          return (
            <View style={{marginBottom: 10, marginHorizontal:10, flexDirection:'row', borderWidth:.5}} >
              <View style={{width:'93%'}}>
                <Text style={{padding:5,}} >{element.item[1][0]}</Text>
                <Text style={{padding:5}} >{element.item[1][1]}</Text>
              </View>
              <TouchableOpacity style={{justifyContent:'flex-start', alignItems:'flex-end', margin:5}} >
                <Icon name='times' size={20} color='red' />
              </TouchableOpacity>
            </View>
          )

    }
    
  }

  render(){
    return (
      <SafeAreaView style={styles.container} >
        <Header
            name='Orders' 
            contentStyle={{fontSize:30, color:'white', fontWeight:'bold'}} 
            containerStyle={{backgroundColor:'#188a32', marginBottom:20}}
            leftButton = {<View/>}
            onPressLeft = {() => Actions.pop()}
        />
        <View style={{flexDirection:'row', alignSelf:'center'}} >
          <TouchableOpacity style={this.renderBackground('orders')} onPress={() => this.setState({selected: 'orders'}) } >
            <Text style={this.renderText('orders')}> Orders </Text>
          </TouchableOpacity>

          <TouchableOpacity style={this.renderBackground('complaints')} onPress={() => this.setState({selected: 'complaints'}) } >
            <Text style={this.renderText('complaints')}> Complaints </Text>
          </TouchableOpacity>
        </View>

        {this.renderOrderPages()}
      </SafeAreaView>
    );
  }
  
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  }
});


const mapStateToProps = state => {
    return {restaurantID: state.Auth.restaurant};
}

export default connect(mapStateToProps)(ManagerComplaints);


