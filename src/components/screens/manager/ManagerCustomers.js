import React, {Component} from 'react'; // default imports
import {Actions} from 'react-native-router-flux'; //Actions simply navigates to different screens
import Button from 'react-native-button'; // another dependency
import { connect } from 'react-redux'; // manages data flow (dont need to understand)
import { TextField } from 'react-native-material-textfield'; //dependency online
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, ScrollView, Image, FlatList} from 'react-native'; //default components
import ImagePicker from 'react-native-image-crop-picker'; // this another dependency for photo gallery
import {Header} from '../../common/components';
import firebase from 'firebase';
import Icon from 'react-native-vector-icons/FontAwesome5';



class ManagerCustomers extends Component{
  constructor(){
    super();
    this.state = {
      selected: 'pending',

      pending: [],
      approved: [],
      declined: []
    }
  }

  componentDidMount = async () => {
    const {restaurantID} = this.props;
    await firebase.database().ref(`/restaurant/${restaurantID}`).on('value', snapshot => {
      if (snapshot.hasChild('pendingCustomers'))
        this.setState({pending: pendingCustomers});
      if (snapshot.hasChild('approvedCustomers'))
        this.setState({accepted: acceptedCustomers});
      if (snapshot.hasChild('declinedCustomers'))
        this.setState({declined: declinedCustomers});
    })
  }

  renderBackground = (selected) => {
    if(selected === this.state.selected){
      return {backgroundColor:'#188a32', borderWidth:.3, borderRadius:7}
    }
    else{
      return {backgroundColor:'#cbd1cc', borderWidth:.3, borderRadius:7}
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

  renderCustomerPages = () => {
    const {selected, pending, approved, declined} = this.state;
    let test = ['asfasfasfa', 'alsabfsanflanfa', 'pohwoianfnala'];
    switch(selected){
      case 'pending':
        return this.renderCustomers(pending);
      case 'approved':
        return this.renderCustomers(test);
      case 'declined':
        return this.renderCustomers(declined);
    }
  }

  renderCustomers = (customerList) => {
    if (customerList.length === 0){
      return (
        <View style={{justifyContent:'center', alignItems:'center', marginTop:'50%' }} >
          <Text style={{textAlign:'center', fontWeight:'bold', fontSize:25, padding:10, fontFamily:'Cochin' }} >No customers currently</Text>
          <Image source={{uri:'http://cdn.onlinewebfonts.com/svg/img_548473.png'}} style={{width:100, aspectRatio:.9}} />
          <Text style={{textAlign:'center', fontWeight:'bold', fontSize:25, padding:10, fontFamily:'Cochin'}} >Come back later</Text>
        </View>
      )
    }
    else{
      return (
        <FlatList
          data = {customerList}
          renderItem = { this.renderList }
          keyExtractor = { (element) => element}
          contentContainerStyle={{margin:10}}
        />
      )
    }
  }

  renderList = (element) => {
    const {selected} = this.state;
    switch(selected){
      case 'pending':
          return (
            <View style={{marginBottom: 10, marginHorizontal:10, flexDirection:'row'}} >
              <View style={{borderWidth:.5, width:'70%'}} >
                <Text style={{padding:5,}} >{element.item}</Text>
                <Text style={{padding:5}} >{element.item}</Text>
              </View>

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
      case 'approved':
          return (
            <View style={{marginBottom: 10, marginHorizontal:10, flexDirection:'row', borderWidth:.5}} >
              <View style={{width:'93%'}}>
                <Text style={{padding:5,}} >{element.item}</Text>
                <Text style={{padding:5}} >{element.item}</Text>
              </View>
              <TouchableOpacity style={{justifyContent:'flex-start', alignItems:'flex-end', margin:5}} >
                <Icon name='times' size={20} color='red' />
              </TouchableOpacity>
            </View>
          );
      case 'declined':
          return (
            <View style={{marginBottom: 10, marginHorizontal:10, flexDirection:'row', borderWidth:.5}} >
              <View style={{width:'93%'}}>
                <Text style={{padding:5,}} >{element.item}</Text>
                <Text style={{padding:5}} >{element.item}</Text>
              </View>
              <TouchableOpacity style={{justifyContent:'flex-start', alignItems:'flex-end', margin:5}} >
                <Icon name='times' size={20} color='red' />
              </TouchableOpacity>
            </View>
          );
    }
    
  }


  render(){
    return (
      <SafeAreaView style={styles.container} >
        <Header
            name='Customers' 
            contentStyle={{fontSize:30, color:'white', fontWeight:'bold'}} 
            containerStyle={{backgroundColor:'#188a32', marginBottom:20}}
            leftButton = {<View/>}
            onPressLeft = {() => Actions.pop()}
        />
        <View style={{flexDirection:'row', width:'70%', justifyContent:'space-between', alignItems:'center', alignSelf:'center'}} >
          <TouchableOpacity style={this.renderBackground('pending')} onPress={() => this.setState({selected: 'pending'}) } >
            <Text style={this.renderText('pending')}> Pending </Text>
          </TouchableOpacity>

          <TouchableOpacity style={this.renderBackground('approved')} onPress={() => this.setState({selected: 'approved'}) } >
            <Text style={this.renderText('approved')}> Approved </Text>
          </TouchableOpacity>

          <TouchableOpacity style={this.renderBackground('declined')} onPress={() => this.setState({selected: 'declined'}) } >
            <Text style={this.renderText('declined')}> Declined </Text>
          </TouchableOpacity>
        </View>

      {this.renderCustomerPages()}
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
  const {restaurant} = state.Auth;
  return {restaurantID: restaurant};
}

export default connect(mapStateToProps)(ManagerCustomers);


