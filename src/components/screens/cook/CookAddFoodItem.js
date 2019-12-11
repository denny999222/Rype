import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, ScrollView, Image, KeyboardAvoidingView} from 'react-native'; //default components
import firebase from 'firebase';

import { TextField } from 'react-native-material-textfield';
import {SectionList} from '../../common/components/';

class CookAddFoodItem extends Component {

    constructor (){
        super();
        this.state =  {
            name : 'Tomato',
            price: '20', 
            specialty: '',
            Food_Description : 'N/A' ,
            ingredientList: [{name:'salt', quantity:'0'}, {name:'pepper', quantity:'0'}],
            food_category: ''
        }
    }


    //Send the ingredient to the database./ Add new ingredient record
    onSubmit = () => {

    }

    //If user changes the text in input, always store current in state.
    onFieldChanged = (state, text) => {
        //this is a function inherited from Component. It simply modifies one of the properties inside state
        this.setState({[state]: text}); 
    }
    
    onGradeSelected = (selectedType) => {// this makes the selected letter grade green when selected
        if (selectedType === this.state.food_category){
            return {backgroundColor:'#66a82d', borderWidth:.5,justifyContent: 'center'}
        }else{
            return {backgroundColor:'white', borderWidth:.5, justifyContent: 'center'}
        }
    }
    
    onTextColorChange = (selectedType) => {
        if (selectedType === this.state.food_category){
            return {color:'white', paddingBottom:5, paddingTop:5, fontWeight:'bold'}
        }else{
            return {color:'black', paddingBottom:5, paddingTop:5}
        }
    }

     //Add the ingredient to the food
    onAdd = () => {

    }

    render (){
        return (
            <SafeAreaView style={styles.container}> 

                <View style={{justifyContent:'center'}} >
                    <Text style={{fontSize: 30, textAlign: 'center'}}>New Food Form</Text>
                    <View style={{paddingRight:50, paddingLeft:50, paddingTop:10}} >
                        <TextField 
                            label="Name" 
                            value = {this.state.name}
                            onChangeText={(text) => this.onFieldChanged('name', text) }
                        />
                        <TextField 
                            label="Price" 
                            value={this.state.price} 
                            onChangeText={(text) => this.onFieldChanged('price', text) }
                        />  
                        <TextField
                            label="Food_Description"
                            value={this.state.Food_Description}
                            onChangeText={(text) => this.onFieldChanged('Food_Description', text)}
                        />
                    </View>

                    <Text style={{marginVertical: 18}}>   </Text>

                    {/** The title page remains stationary */}
                    <View style={{marginHorizontal: 50, flexDirection: 'row', flexWrap: 'wrap', borderWidth: 0.3, padding: 7, backgroundColor:'#70a1ff'}}>
                            <View style={{ textAlign: 'center', width: '33%'}}>
                                <Text style={{ textAlign: 'center', fontSize: 20}}>Ingredient</Text>
                            </View>
                            <View style={{ width: '33%'}}>
                                <Text style={{ textAlign: 'center', fontSize: 20}}>Quantity</Text> 
                            </View>
                            <View style={{ width: '33%'}}>
                                <Text style={{color:'white', textAlign: 'center'}}>  </Text> 
                            </View>
                        </View>
                    {/** The user can scroll through the list of all the ingredeints */}
                    <ScrollView>
                        {
                            this.state.ingredientList.map( (ingredient) =>{
                                return ( 
                                    <View style={{marginHorizontal: 50, flexDirection: 'row', flexWrap: 'wrap', borderWidth: 0.3, padding: 3}}>
                                        <View style={{ textAlign: 'center', width: '33%'}}>
                                            <Text
                                            style={{textAlign: 'center', marginTop:20, alignSelf:'center', padding:10, fontSize: 20}}>{ingredient.name} </Text>
                                        </View>
                                        <View style={{ width: '33%'}}>
                                            <TextField label="Quantity"
                                                    value={ingredient.quantity}
                                                    onChangeText={(text) => this.onFieldChanged('qunatity', text)} /> 
                                        </View>
                                        <View style={{ width: '33%'}}>
                                            <Button 
                                                onPress={() => this.onAdd()}  
                                                containerStyle={{bottom:0}}
                                                style={{fontSize: 18, borderRadius: 15, overflow: 'hidden', backgroundColor:'#7bed9f', padding:10, color:'white', fontWeight:'bold', marginTop:20, alignSelf:'center'}} 
                                            > 
                                                Add
                                                </Button>
                                        </View>
                                    </View>
                                
                                );
                            })
                        }

                        </ScrollView>










                        <Text style={{marginVertical: 20}}>  </Text>

                        <Text style={{fontSize: 18}}>Specialty:   </Text>
                    <View style={{flexDirection:'row', alignSelf:'center'}} >
                        
                        <TouchableOpacity onPress={() => this.setState({food_category:'Breakfast'}) } style={this.onGradeSelected('Breakfast')} >
                            <Text style={this.onTextColorChange('Breakfast')} >  Breakfast  </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({food_category:'Lunch'}) } style={this.onGradeSelected('Lunch')} >
                            <Text style={this.onTextColorChange('Lunch')} >  Lunch  </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({food_category:'Dinner'}) } style={this.onGradeSelected('Dinner')} >
                            <Text style={this.onTextColorChange('Dinner')} >  Dinner  </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({food_category:'Dessert'}) } style={this.onGradeSelected('Dessert')} >
                            <Text style={this.onTextColorChange('Dessert')} >  Dessert  </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({food_category:'N/A'}) } style={this.onGradeSelected('N/A')} >
                            <Text style={this.onTextColorChange('N/A')} > N/A </Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={{marginVertical: 10}}></Text>

                    <Button 
                        onPress={() => this.onSubmit()} 
                        containerStyle={{bottom:0}}
                        style={{borderRadius: 20, overflow:'hidden', backgroundColor:'#3742fa', padding:8, paddingHorizontal: 100, color:'white', fontWeight:'bold', marginTop:20, alignSelf:'center'}} 
                    > 
                        Submit
                    </Button>
                    
            </View>






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
  

export default CookAddFoodItem; 