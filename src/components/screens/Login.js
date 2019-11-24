import React, {Component} from 'react';
import { StyleSheet, SafeAreaView, Text,View, KeyboardAvoidingView} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {Header} from '../common/components';
import firebase from 'firebase';


class Login extends Component{
  constructor(){
      super();
      this.state = {
          email: '',
          password: '',
          error:''
      }
  }

  onLogin = () => {
      const {email, password} = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async res => {
                if (res.user.uid != null || res.user.uid != undefined) {
                    await firebase
                        .database()
                        .ref(`/users/${res.user.uid}`)
                        .on('value', snapshot => {
                          this.props.dispatch( {type: 'LOGIN_SUCCESS', payload: snapshot.val()} );
                          switch (snapshot.val().accountType){
                            case 'customer':
                              Actions.customer();
                              break;
                            case 'manager':
                              Actions.manager();
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
                        });   
                }
            }).catch(error => {
              this.setState({error: error.message})
          })
          
  }

  onFieldChanged = (state, text) => {
    this.setState( {[state]: text} )
}

  render(){
    const {email, password} = this.state;
    return (
      <SafeAreaView style={styles.container} >
        <Header 
            name='Login' 
            contentStyle={{fontSize:30, color:'white', fontWeight:'bold'}} 
            containerStyle={{backgroundColor:'#188a32'}}
            leftButton={<Icon name='times-circle' size={30} color='white' />} 
            onPressLeft = {() => Actions.pop()}
        />
        <View style={{justifyContent:'center',}} >
          <View style={{paddingRight:50, paddingLeft:50, paddingTop:10}} >
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

          <Text style={{color:'red', fontStyle:'italic', textAlign:'center', flexWrap:'wrap'}} > {this.state.error} </Text>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}>
              <Button 
                  onPress={() => this.onLogin()} 
                  containerStyle={{bottom:0}}
                  style={{backgroundColor:'#188a32', padding:8, color:'white', fontWeight:'bold', marginTop:20, alignSelf:'center'}} 
              > 
                  LOGIN
              </Button>
          </KeyboardAvoidingView>
        </View>
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

export default connect()(Login);
