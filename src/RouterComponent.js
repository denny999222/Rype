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
import {TabIcon} from './components/common/components';
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
                    <Scene key='RootScreen' component={RootScreen} hideNavBar />
                    <Scene key='Login' component={Login} hideNavBar />
                    <Scene key='SignUp' component={SignUp} hideNavBar />

                    <Scene key='customer' hideNavBar>
                        <Scene key='CustomerHome' initial={true} component={CustomerHome} hideNavBar />

                    </Scene>
                    <Scene key='manager' activeBackgroundColor='#0b4d1a' showLabel={false} hideNavBar tabs={true} hideNavBar tabBarStyle={{backgroundColor: '#188a32' }}>
                        <Scene 
                            key='ManagerHome' 
                            initial={true} 
                            component={ManagerHome} 
                            hideNavBar 
                            keyColor='black'
                            iconName='utensils'
                            iconColor='white'
                            iconSize={24}
                            icon={TabIcon}
                        />
                        <Scene 
                            key='Bidding' 
                            component={ManagerHome} 
                            hideNavBar 
                            keyColor='black'
                            iconName='file-invoice-dollar'
                            iconColor='white'
                            iconSize={24}
                            icon={TabIcon}
                        />
                        <Scene 
                            key='Orders' 
                            component={ManagerHome} 
                            hideNavBar 
                            keyColor='black'
                            iconName='receipt'
                            iconColor='white'
                            iconSize={24}
                            icon={TabIcon}
                        />
                    </Scene>
                    <Scene key='cook' initial={true} hideNavBar>
                        <Scene key='CookHome' initial={true} component={CookHome} hideNavBar />

                    </Scene>
                    <Scene key='delivery' hideNavBar>
                        <Scene key='DeliveryHome' initial={true} component={DeliveryHome} hideNavBar />

                    </Scene>
                    <Scene key='salesperson' hideNavBar>
                        <Scene key='SalespersonHome' initial={true} component={SalespersonHome} hideNavBar />

                    </Scene>
                </Scene>
            </Router>
        )
    }
}

export default RouterComponent;
