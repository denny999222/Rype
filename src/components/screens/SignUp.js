import React, {Component} from 'react';
import { StyleSheet, SafeAreaView, Text, View} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import RNPickerSelect from 'react-native-picker-select';
import Button from 'react-native-button';
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
        }
    }

    onSignUp = () => {
        const {email, password, confirmPassword, accountType} = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(res => {
                if (res.user.uid !== null || res.user.uid !== undefined) {
                    firebase.database().ref(`/users/${res.user.uid}`) 
                    .set({
                        email,
                        accountType
                    }); // saves the user's data into firebase
                    
                    // this.props.dispatch( {
                    //     type: 'SIGNUP_SUCCESS', 
                    //     payload: {email: email, username: username, points: 15} 
                    // } ); // saves the users data to store in Auth store
    
                    switch (accountType) {
                        case 'manager':
                            Actions.manager();
                        case 'customer':
                            Actions.customer();
                        case 'delivery':
                            Actions.delivery();
                        case 'cook':
                            Actions.cook();
                        case 'salesperson':
                            Actions.salesperson();
                    }
                }
            })
    }

    onFieldChanged = (state, text) => {
        this.setState( {[state]: text} )
    }

    render(){
        const {email, password, confirmPassword, accountType} = this.state;
        return (
        <SafeAreaView style={styles.container} >
            <Text style={{fontSize:40}} >  SIGN UP PAGE!! </Text>
            <View style={{padding:15}} >
                <RNPickerSelect
                    onValueChange={(value) => this.setState({accountType:value})}
                    value={this.state.accountType}
                    items={[
                        { label: 'Manager', value: 'manager' },
                        { label: 'SalesPerson', value: 'salesperson' },
                        { label: 'Cook', value: 'cook' },
                        { label: 'Delivery', value: 'delivery' },
                        { label: 'Customer', value: 'customer' },
                    ]}
                />

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
        </SafeAreaView>
        );
    }
  
};

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
});

export default SignUp;
