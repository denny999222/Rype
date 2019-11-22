import React, {Component} from 'react';
import { StyleSheet, SafeAreaView, Text,View} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import Button from 'react-native-button';
import firebase from 'firebase';


class Login extends Component{
  constructor(){
      super();
      this.state = {
          email: '',
          password: '',
      }
  }

  onLogin = () => {
      const {email, password} = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(res => {
                this.storeToken(JSON.stringify(res.user.uid));
                if (res.user.uid != null || res.user.uid != undefined) {
                    firebase
                        .database()
                        .ref(`/users/${res.user.uid}`)
                        .on('value', snapshot => {
                            this.props.dispatch( {type: 'LOGIN_SUCCESS', payload: snapshot.val()} );
                            switch (snapshot.val().accountType){
                              case 'customer':
                              case 'manager':
                              case 'delivery':
                              case 'cook':
                              case 'salesperson':
                              default:
                            }
                        }); // fetches the user's data to store in Auth store
                    this.setState({
                        email: '', 
                        password: '', 
                    }); // login succeeded, so clear state   
                }
            })
          
  }

  onFieldChanged = (state, text) => {
    this.setState( {[state]: text} )
}

  render(){
    const {email, password} = this.state;
    return (
      <SafeAreaView style={styles.container} >
        <Text style={{fontSize:40}} >  LOGIN PAGE!! </Text>
        <View style={{padding:15}} >
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

export default Login;
