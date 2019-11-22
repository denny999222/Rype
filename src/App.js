// DO NOT HAVE TO EVER TOUCH THIS FILE
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import RouterComponent from './RouterComponent';
class App extends Component{

  componentDidMount = () => {
    var firebaseConfig = {
      apiKey: "AIzaSyB1Sc0Sz7ZwW9iXuinb9aaueVSaqrdzWTY",
      authDomain: "restaurantapp-fb7b4.firebaseapp.com",
      databaseURL: "https://restaurantapp-fb7b4.firebaseio.com",
      projectId: "restaurantapp-fb7b4",
      storageBucket: "restaurantapp-fb7b4.appspot.com",
      messagingSenderId: "680679159319",
      appId: "1:680679159319:web:18edeb34a4aae68f748e52",
      measurementId: "G-9KWJ4TLMCZ"
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }

  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store} >
        <RouterComponent/>
      </Provider>
    )
  }
  
};

export default App;
