import React, {Component} from 'react'; // default imports
import {Actions} from 'react-native-router-flux'; //Actions simply navigates to different screens
import Button from 'react-native-button'; // another dependency
import { connect } from 'react-redux'; // manages data flow (dont need to understand)
import { TextField } from 'react-native-material-textfield'; //dependency online
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, ScrollView, Image, FlatList} from 'react-native'; //default components
import ImagePicker from 'react-native-image-crop-picker'; // this another dependency for photo gallery
import firebase from 'firebase';
import RNFetchBlob from 'rn-fetch-blob';
import {Header} from '../../common/components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Modal from "react-native-modal";



class ManagerInfo extends Component{
  constructor(){
    super();
    this.state = {
      address: '',
      amountOfRatings: 0,
      description: '',
      manager:'',
      name:'',
      phone:'',
      rating:0,
      restaurantGrade:'',
      restaurantID:'',

      showAddEmployeeModal: false,
      email: '',
      password:'',
      error:'',
      employeeTypeSelected: '',

      cook:[],
      delivery:[],
      salesperson:[]
    }
  }

  componentDidMount = async () => {
    const {restaurant} = this.props.Auth;
    await firebase.database().ref(`/restaurants/${restaurant}`).on('value', snapshot => {
      // also need to fetch for cooks, delivery, salespeople and create an array with it
      let {address, amountOfRatings, description, manager, name, phone, rating, restaurantGrade, cook, delivery, salesperson} = snapshot.val();

      this.setState({
        address: address,
        amountOfRatings: amountOfRatings,
        description: description,
        manager: manager,
        name: name,
        phone: phone,
        rating: rating,
        restaurantGrade: restaurantGrade,
        restaurantID: snapshot.key,

        cook: Object.keys(cook),
        delivery: Object.keys(delivery),
        salesperson: Object.keys(salesperson)
      })
    })
  }

  renderEmployeeList = (element, employeeType) => {
    let imgUrl = '';
    switch(employeeType){
      case 'cook':
        imgUrl = 'https://cdn2.iconfinder.com/data/icons/cheficon/100/chef_cook_7-512.png'
        break;
      case 'delivery':
        imgUrl = 'https://previews.123rf.com/images/dstarky/dstarky1707/dstarky170700097/81443502-thin-line-delivery-icon-vector-illustration-isolated-on-a-white-background-simple-outline-pictogram-.jpg'
        break;
      case 'salesperson':
        imgUrl = 'https://image.shutterstock.com/image-illustration/businessman-standing-his-briefcase-icon-260nw-452497843.jpg'
        break;
    }
    return (
      <TouchableOpacity onPress={() => null} style={{borderWidth:.4}} >
        <Image
            source={{uri: imgUrl}}
            style={{marginRight:5, marginTop:5, marginBottom:5, width:80, height:80,}}
        />
      </TouchableOpacity>
    )
  }

  renderGradeColor = () => {
    const {restaurantGrade} = this.state;
    switch(restaurantGrade){
      case 'A':
        return {color:'blue',fontSize:55}
      case 'B':
        return {color:'green',fontSize:55}
      case 'C':
        return {color:'orange',fontSize:55}
      case 'N/A':
        return {color:'grey', fontSize:35}
    }
  }

  onFieldChanged = (state, text) => {
    this.setState( {[state]: text} );
  }

  showAddEmployeeModal = (employeeType) => {
    let name = `Add a ${employeeType}`;
    const {email, password} = this.state;
        return ( // this shows the normal edit modal
            <Modal
                isVisible={this.state.showAddEmployeeModal}
                onBackdropPress={() => this.setState({ showAddEmployeeModal: false, email:'', password:''})}
            >
              <View style={{backgroundColor:'white'}} >
                <Header
                  name={name}
                  contentStyle={{fontSize:20, color:'white', fontWeight:'bold'}} 
                  containerStyle={{backgroundColor:'#188a32', height:40}}
                  leftButton={<Icon name='times-circle' size={20} color='white' />} 
                  onPressLeft = {() => this.setState({showAddEmployeeModal:false, email:'', password:''})}
                  rightButton={<Icon name='check-circle' color='white' size={20} />}
                  onPressRight = {() => this.addEmployee(employeeType)}
                />
                <View style={{paddingHorizontal:20}} >
                  <TextField 
                    label="Email" 
                    value = {email}
                    onChangeText={(text) => this.onFieldChanged('email', text) }
                  />
                  <TextField 
                    label="Password" 
                    secureTextEntry
                    value = {password}
                    onChangeText={(text) => this.onFieldChanged('password', text) }
                  />
                  <Text style={{textAlign:'center', color:'red', padding:10}} >{this.state.error}</Text>
                </View>
              </View>
            </Modal>
        )
  }

  addEmployee = async (employeeType) => {
    const {restaurantID, email, password} = this.state;
    if (email !== '' || password !== ''){
      await firebase.auth().createUserWithEmailAndPassword(email, password).then(async res => {

        await firebase.database().ref(`/restaurants/${restaurantID}/${employeeType}`)
          .update({ 
            [res.user.uid]: true
          });
        await firebase.database().ref(`/users/${res.user.uid}`)
          .set({
            accountType: employeeType,
            email: email,
            restaurant: restaurantID
          });

        return res;
      }).then( (res) => {
        this.setState({showAddEmployeeModal:false});
      });
    }
    else{
      this.setState({error:'Please fill in correctly!'});
    }
  }
  

  render(){
    let tempKey = 0;
    const {address, amountOfRatings, description, manager, name, phone, rating, restaurantGrade} = this.state;
    return (
      <SafeAreaView style={styles.container} >
          <View style={{flexDirection:'row', padding:10}} >
            <Image source={{uri:'https://icon-library.net/images/restaurant-icon-transparent/restaurant-icon-transparent-0.jpg'}} style={{width:'25%', aspectRatio:1, marginRight:5}} />
            <View style={{flexDirection:'row', alignItems:'center'}} >
                <View style={{flexDirection:'column', justifyContent:'space-between', marginLeft:10}} >
                    <View>
                        <Text style={{fontSize:20, fontWeight:'bold'}} >{name}</Text>
                        <Text style={{flexWrap:'wrap', width:170}} >{address} </Text>
                    </View>
                    <Text style={{color:'grey', fontWeight:'bold', fontStyle:'italic'}} >{phone}</Text>
                </View>  
                <Text style={[{fontWeight:'bold', textAlignVertical:'center'}, this.renderGradeColor()]} >{restaurantGrade}</Text>
            </View>          
          </View>
          
          <View style={{margin:10, borderBottomWidth:.5,  padding:10}}>
            <Text style={{fontWeight:'bold', fontSize:16}} >Description </Text>
            <Text>{description}</Text>
          </View>

          <View style={{width:'100%', marginTop:10}} >
            <Text>Cooks</Text>
            <View style={{flexDirection:'row', alignItems:'center', borderWidth:.5}} >
                <FlatList
                    data={this.state.cook}
                    renderItem={ (element) => this.renderEmployeeList(element, 'cook') }
                    keyExtractor={ () => tempKey++}
                    horizontal={true}
                />
                <TouchableOpacity onPress={() => this.setState({showAddEmployeeModal: true, employeeTypeSelected:'cook'})}> 
                    <Icon name='plus' color='#188a32' size={25} style={{margin:10, }} />
                </TouchableOpacity>
            </View>

            <Text>Delivery</Text>
            <View style={{flexDirection:'row', alignItems:'center', borderWidth:.5}} >
                <FlatList
                    data={this.state.delivery}
                    renderItem={ (element) => this.renderEmployeeList(element, 'delivery') }
                    keyExtractor={ () => tempKey++}
                    horizontal={true}
                />
                <TouchableOpacity onPress={() => this.setState({showAddEmployeeModal: true, employeeTypeSelected:'delivery'})}> 
                    <Icon name='plus' color='#188a32' size={25} style={{margin:10, }} />
                </TouchableOpacity>
            </View>
            
            <Text>Sales People</Text>
            <View style={{flexDirection:'row', alignItems:'center', borderWidth:.5}} >
                <FlatList
                    data={this.state.salesperson}
                    renderItem={ (element) => this.renderEmployeeList(element, 'salesperson') }
                    keyExtractor={ () => tempKey++}
                    horizontal={true}
                />
                <TouchableOpacity onPress={() => this.setState({showAddEmployeeModal: true, employeeTypeSelected:'salesperson'})}> 
                    <Icon name='plus' color='#188a32' size={25} style={{margin:10, }} />
                </TouchableOpacity>
            </View>
          </View>
          
          {this.showAddEmployeeModal(this.state.employeeTypeSelected)}
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


const mapStateToProps = state => {
  return {Auth: state.Auth};
}

export default connect(mapStateToProps)(ManagerInfo);
