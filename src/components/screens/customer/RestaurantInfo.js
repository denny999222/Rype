import React, {Component} from 'react'; //Knows how to use components (The backend)
import {Actions} from 'react-native-router-flux'; //Knows how to put stuff on the UI (The front end)
import Button from 'react-native-button';
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, ScrollView, Image, FlatList} from 'react-native'; //default components
import firebase from 'firebase';
import {Header} from '../../common/components/';
import { TextField } from 'react-native-material-textfield';
import {SectionList} from '../../common/components/';
import Icon from 'react-native-vector-icons/FontAwesome5';
import StarRating from 'react-native-star-rating';
import {addCart} from '../../../actions/CustomerActions';
import { connect } from 'react-redux';



class RestaurantInfo extends Component {
    constructor(){
        super();
        this.state = {
            cart:[]
        }
    }

    renderGradeColor = () => {
        const {restaurantGrade} = this.props.data;
        switch(restaurantGrade){
          case 'A':
            return {color:'blue',fontSize:35, fontWeight:'bold'}
          case 'B':
            return {color:'green',fontSize:35, fontWeight:'bold'}
          case 'C':
            return {color:'orange',fontSize:35, fontWeight:'bold'}
          case 'N/A':
            return {color:'grey', fontSize:35, fontWeight:'bold'}
        }
      }

    addCart = (item) => {
        let joined = this.state.cart.concat(item);
        this.setState({ cart: joined });
        this.props.addCart(item);
    }

    
    renderMenuItem = (element, index) => {
        const {foodName, foodPrice, ingredients} = element[1];
        return (
            <View style={{flexDirection:'row', width:'93%', alignSelf:'center', marginTop:5, marginRight:10}} >
            <TouchableOpacity style={{marginHorizontal:10, alignSelf:'center'}} onPress={() => this.addCart(element[1])} > 
                <Icon name='plus' color='#188a32' size={24} />
            </TouchableOpacity>
              <View style={{flexDirection:'column'}} >
                <Text style={{fontSize:20, fontFamily:'Cochin', textAlignVertical:'center',}} >{foodName}</Text>
                <Text style={{fontSize:13, fontFamily:'Cochin', textAlignVertical:'center', color:'grey', fontStyle:'italic'}} >{ingredients.toString()}</Text>
              </View>
              <Text style={{alignSelf:'center', color:'red', fontSize:13, right:0, position:'absolute',}} >${foodPrice}</Text>
            </View>
          )
    }

    render(){
        const {address, amountOfRatings, description, name, phone, photoUrl, rating, restaurantGrade, menu} = this.props.data;
        return(
            <SafeAreaView style={styles.container} >
                <Header
                    name={name}
                    contentStyle={{fontSize:30, color:'white', fontWeight:'bold', fontFamily:'Cochin'}} 
                    containerStyle={{backgroundColor:'#188a32'}}
                    leftButton={<Icon name='arrow-left' size={30} color='white' />} 
                    onPressLeft = {() => Actions.pop()}
                    rightButton={
                        <TouchableOpacity style={{flexDirection:'row', alignItems:'center'}} >
                            <Text style={{color:'white', fontWeight:'bold', fontSize:25}} >{this.props.cartSize}</Text> 
                            <Icon name='cart-plus' color='white' size={24} />
                        </TouchableOpacity>
                    }
                />
                <Image source={{uri:photoUrl}} style={{width:'95%', aspectRatio:2, margin:10, alignSelf:'center'}} />

                <View style={{marginHorizontal:10, flexDirection:'row', width:'100%', justifyContent:'space-between'}} >
                    <View>
                        <Text style={{fontSize:12}} >{amountOfRatings} ratings</Text>
                        <StarRating
                            disabled={false}
                            maxStars={5}
                            rating={rating}
                            containerStyle ={{width:'30%'}}
                            emptyStarColor='grey'
                            fullStarColor='#e6de10'
                            starSize={25}
                            disabled
                        />
                    </View>
                    <Text style={[ {textAlign:'center', textAlignVertical:'center', marginRight:40} ,this.renderGradeColor()]} >{restaurantGrade}</Text>
                </View>

                <Text style={{ margin:10}} >{description}</Text>

                <Text style={{fontStyle:'italic', marginLeft:10, color:'grey'}} >{address}</Text>
                <Text style={{fontStyle:'italic', marginLeft:10, color:'grey'}} >Call us at {phone}</Text>

                <View style={{backgroundColor:'#188a32', width:'60%', alignSelf:'center', marginVertical:20}} >
                    <Text style={{textAlign:'center', fontWeight:'bold', fontFamily:'Cochin', fontSize:25, color:'white'}} >Menu</Text>
                </View>

                <FlatList
                    data={Object.entries(menu)}
                    renderItem={ ({item,index}) => this.renderMenuItem(item,index) }
                    keyExtractor={ (element) => element[0]}
                    containerStyle={{marginBottom:20}}
                />
            </SafeAreaView>
        );
    }


}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        margin:15,
    }
})

const mapStateToProps = state => {
    console.log(state.Customer);
    return {cartSize: state.Customer.cart.length};
}

export default connect(mapStateToProps, {addCart})(RestaurantInfo); 
