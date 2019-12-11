import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';
import { StyleSheet, SafeAreaView, Text, View, FlatList} from 'react-native';
import firebase from 'firebase';
import {SectionList, Header} from '../../common/components/';
import { connect } from 'react-redux';
import {clearCart} from '../../../actions/CustomerActions'



class CustomerShoppingCart extends Component {

    constructor(){
        super();
        this.state = {

        }
    }

    renderShoppingCart = (food) => {
        const {foodName, foodPrice, ingredients} = food.item;
        return (
      <View style={{flexDirection:'row', width:'93%', alignSelf:'center', marginTop:5, marginRight:10}} >
        <View style={{flexDirection:'column'}} >
          <Text style={{fontSize:24, fontFamily:'Cochin', textAlignVertical:'center',}} >{foodName}</Text>
          <Text style={{fontSize:17, fontFamily:'Cochin', textAlignVertical:'center', color:'grey', fontStyle:'italic'}} >{ingredients.toString()}</Text>
        </View>
          <Text style={{alignSelf:'center', color:'red', fontSize:18, right:0, position:'absolute',}} >${foodPrice}</Text>
      </View>
    )
    }

    order = () => {

    }

    render(){
        return(
            <SafeAreaView style={styles.container}>
            <Header 
                name='Shopping Cart' 
                contentStyle={{fontSize:30, color:'white', fontWeight:'bold'}} 
                containerStyle={{backgroundColor:'#188a32'}}
                leftButton={<View/>} 
            />
                <FlatList
                    data={this.props.cart}
                    renderItem={ this.renderShoppingCart }
                    keyExtractor={ (element) => element}
                />


                <View style={{flexDirection:'row', alignSelf:'center', justifyContent:'space-between', width:'50%', marginBottom:20}} >
                    <Button 
                        onPress={() => this.props.clearCart()} 
                        containerStyle={{borderRadius:5}}
                        style={{backgroundColor:'#188a32', padding:8, color:'white', fontWeight:'bold', marginTop:30, alignSelf:'center'}} 
                    > 
                        CLEAR
                    </Button>
                    <Button 
                        onPress={() => this.onRegister()} 
                        containerStyle={{borderRadius:5}}
                        style={{backgroundColor:'#188a32', padding:8, color:'white', fontWeight:'bold', marginTop:30, alignSelf:'center'}} 
                    > 
                        ORDER
                    </Button>
                </View>
            </SafeAreaView>

        )

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

const mapStateToProps = state => {
    return {
        cart: state.Customer.cart
    }
}

export default connect(mapStateToProps, {clearCart})(CustomerShoppingCart);