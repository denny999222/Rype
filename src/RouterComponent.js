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
import ManageCustomers from './components/screens/manager/ManageCustomers';
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
                    <Scene key='manager' initial={true} activeBackgroundColor='#0b4d1a' showLabel={false} hideNavBar tabs={true} hideNavBar tabBarStyle={{backgroundColor: '#188a32' }}>
                        <Scene 
                            key='ManagerHome' 
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
                            component={ManageCustomers} 
                            initial={true} 
                            hideNavBar 
                            keyColor='black'
                            iconName='address-book'
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
                    <Scene key='cook' hideNavBar>
                        <Scene 
                            key='CookHome' 
                            initial={true} 
                            component={CookHome} 
                            hideNavBar 
                        />
                        <Scene 
                            key='Bidding' 
                            component={CookHome} 
                            hideNavBar 
                            keyColor='black'
                            iconName='file-invoice-dollar'
                            iconColor='white'
                            iconSize={24}
                            icon={TabIcon}
                        />
                        <Scene 
                            key='Orders' 
                            component={CookHome} 
                            hideNavBar 
                            keyColor='black'
                            iconName='receipt'
                            iconColor='white'
                            iconSize={24}
                            icon={TabIcon}
                        />
                    </Scene>
                    <Scene key='delivery' hideNavBar>
                        <Scene 
                            key='DeliveryHome' 
                            initial={true} 
                            component={DeliveryHome} 
                            hideNavBar 
                        />
                        <Scene 
                            key='Bidding' 
                            component={DeliveryHome} 
                            hideNavBar 
                            keyColor='black'
                            iconName='file-invoice-dollar'
                            iconColor='white'
                            iconSize={24}
                            icon={TabIcon}
                        />
                        <Scene 
                            key='Orders' 
                            component={DeliveryHome} 
                            hideNavBar 
                            keyColor='black'
                            iconName='receipt'
                            iconColor='white'
                            iconSize={24}
                            icon={TabIcon}
                        />
                    </Scene>
                    <Scene key='salesperson' hideNavBar>
                        <Scene 
                            key='SalespersonHome' 
                            initial={true} 
                            component={SalespersonHome} 
                            hideNavBar 
                        />
                        <Scene 
                            key='Bidding' 
                            component={SalespersonHome} 
                            hideNavBar 
                            keyColor='black'
                            iconName='file-invoice-dollar'
                            iconColor='white'
                            iconSize={24}
                            icon={TabIcon}
                        />
                        <Scene 
                            key='Orders' 
                            component={SalespersonHome} 
                            hideNavBar 
                            keyColor='black'
                            iconName='receipt'
                            iconColor='white'
                            iconSize={24}
                            icon={TabIcon}
                        />
                    </Scene>
                </Scene>
            </Router>
        )
    }
}

export default RouterComponent;
