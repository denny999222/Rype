import React,{Component} from 'react';
import {Scene, Router} from 'react-native-router-flux';
import RootScreen from './components/screens/RootScreen';
import Login from './components/screens/Login';
import SignUp from './components/screens/SignUp';
import {AsyncStorage} from 'react-native';
import CustomerHome from './components/screens/customer/CustomerHome';
import ManagerHome from './components/screens/manager/ManagerHome';
import DeliveryHome from './components/screens/delivery/DeliveryHome';
import CookHome from './components/screens/cook/CookHome';
import SalespersonHome from './components/screens/salesperson/SalespersonHome';
import firebase from 'firebase';
import {connect} from 'react-redux';


class RouterComponent extends Component {
    constructor(){
        super();
        this.state = {
        }
    }

    render(){
        return (
            <Router>
                <Scene key='root' >  
                    <Scene key='RootScreen' initial={true} component={RootScreen} hideNavBar />
                    <Scene key='Login' component={Login} />
                    <Scene key='SignUp' component={SignUp} />

                    <Scene key='customer' >
                        <Scene key='CustomerHome' initial={true} component={CustomerHome} hideNavBar />

                    </Scene>
                    <Scene key='manager' >
                        <Scene key='ManagerHome' initial={true} component={ManagerHome} hideNavBar />

                    </Scene>
                    <Scene key='cook' >
                        <Scene key='CookHome' initial={true} component={CookHome} hideNavBar />

                    </Scene>
                    <Scene key='delivery' >
                        <Scene key='DeliveryHome' initial={true} component={DeliveryHome} hideNavBar />

                    </Scene>
                    <Scene key='salesperson' >
                        <Scene key='SalespersonHome' initial={true} component={SalespersonHome} hideNavBar />

                    </Scene>
                </Scene>
            </Router>
        )
    }
}

export default RouterComponent;
