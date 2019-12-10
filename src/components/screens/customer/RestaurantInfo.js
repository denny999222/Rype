import React, {Component} from 'react'; //Knows how to use components (The backend)
import {Actions} from 'react-native-router-flux'; //Knows how to put stuff on the UI (The front end)
import Button from 'react-native-button';
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, ScrollView, Image, KeyboardAvoidingView} from 'react-native'; //default components
import firebase from 'firebase';
import {Header} from '../../common/components/';
import { TextField } from 'react-native-material-textfield';
import {SectionList} from '../../common/components/';
import Icon from 'react-native-vector-icons/FontAwesome5';
import StarRating from 'react-native-star-rating';


class RestaurantInfo extends Component {
    constructor(){
        super();
        this.state = {

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

    render(){
        const {address, amountOfRatings, cook, delivery, description, manager, name, phone, photoUrl, rating, restaurantGrade, salesperson} = this.props.data;
        return(
            <SafeAreaView style={styles.container} >
                <Header
                    name={name}
                    contentStyle={{fontSize:30, color:'white', fontWeight:'bold', fontFamily:'Cochin'}} 
                    containerStyle={{backgroundColor:'#188a32'}}
                    leftButton={<Icon name='arrow-left' size={30} color='white' />} 
                    onPressLeft = {() => Actions.pop()}
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


export default RestaurantInfo; 
