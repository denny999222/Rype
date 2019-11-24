import React, {Component} from 'react';
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import Button from 'react-native-button';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Header} from '../common/components';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';



class SignUp extends Component{
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            accountType: '',
            error: ''
        }
    }

    onRegister = async () => {
        const {email, password, confirmPassword, accountType} = this.state;
        await firebase.auth().createUserWithEmailAndPassword(email, password).then(async res => {
            if (res.user.uid !== null || res.user.uid !== undefined) {
                await firebase.database().ref(`/users/${res.user.uid}`) 
                .set({
                    email: email,
                    accountType: accountType,
                    userID: res.user.id
                }); 
                this.props.dispatch( {
                    type: 'SIGNUP_SUCCESS', 
                    payload: {email, accountType} 
                } ); // saves the users data to store in Auth store

                switch (accountType) {
                    case 'manager':
                        Actions.manager();
                        break;
                    case 'customer':
                        Actions.customer();
                        break;
                    case 'delivery':
                        Actions.delivery();
                        break;
                    case 'cook':
                        Actions.cook();
                        break;
                    case 'salesperson':
                        Actions.salesperson();
                        break;
                }    
            }
        }).catch( (error) => {
                console.log(error)
        });
    }
    

    onFieldChanged = (state, text) => {
        this.setState( {[state]: text} )
    }

    onAccountSelected = (selectedType) => {
        if (selectedType === this.state.accountType){
            return {backgroundColor:'#188a32', borderWidth:.5,justifyContent: 'center'}
        }else{
            return {backgroundColor:'white', borderWidth:.5, justifyContent: 'center'}
        }
    }

    onTextColorChange = (selectedType) => {
        if (selectedType === this.state.accountType){
            return {color:'white', paddingBottom:5, paddingTop:5, fontWeight:'bold'}
        }else{
            return {color:'black', paddingBottom:5, paddingTop:5}
        }
    }

    render(){
        const {email, password, confirmPassword, accountType} = this.state;
        return (
        <SafeAreaView style={styles.container} >
            <Header 
                name='Sign Up' 
                contentStyle={{fontSize:30, color:'white', fontWeight:'bold'}} 
                containerStyle={{backgroundColor:'#188a32'}}
                leftButton={<Icon name='times-circle' size={30} color='white' />} 
                onPressLeft = {() => Actions.pop()}
            />
            <View style={{marginTop:50}} >
                <Text style={{textAlign:'center', marginBottom:10, fontWeight:'bold', fontSize:20}} > Choose Account Type </Text>
                <View style={{flexDirection:'row', alignSelf:'center'}} >
                    <TouchableOpacity onPress={() => this.setState({accountType:'manager'}) } style={this.onAccountSelected('manager')} >
                        <Text style={this.onTextColorChange('manager')} >  Manager </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setState({accountType:'salesperson'}) } style={this.onAccountSelected('salesperson')} >
                        <Text style={this.onTextColorChange('salesperson')} >  Salesperson </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setState({accountType:'cook'}) } style={this.onAccountSelected('cook')} >
                        <Text style={this.onTextColorChange('cook')} >  Cook </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setState({accountType:'customer'}) } style={this.onAccountSelected('customer')} >
                        <Text style={this.onTextColorChange('customer')} >  Customer </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setState({accountType:'delivery'}) } style={this.onAccountSelected('delivery')} >
                        <Text style={this.onTextColorChange('delivery')} >  Delivery </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{paddingLeft:50, paddingRight:50, paddingTop:10}} >
                <TextField 
                    label="Email" 
                    value = {email}
                    onChangeText={(text) => this.onFieldChanged('email', text) }
                />
                <TextField 
                    label="Password" 
                    value={password} 
                    secureTextEntry
                    onChangeText={(text) => this.onFieldChanged('password', text) }
                />  
                <TextField 
                    label="Confirm Password" 
                    value={password} 
                    secureTextEntry
                    onChangeText={(text) => this.onFieldChanged('password', text) }
                />       
            </View>

            <Text style={{color:'red', fontStyle:'italic', textAlign:'center', flexWrap:'wrap'}} > {this.state.error} </Text>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}>
                <Button 
                    onPress={() => this.onRegister()} 
                    containerStyle={{bottom:0}}
                    style={{backgroundColor:'#188a32', padding:8, color:'white', fontWeight:'bold', marginTop:30, alignSelf:'center'}} 
                > 
                    REGISTER
                </Button>
            </KeyboardAvoidingView>
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

export default connect()(SignUp);
