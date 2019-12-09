import React,{Component} from 'react';
import {Scene, Router} from 'react-native-router-flux';
import RootScreen from './components/screens/RootScreen';
import Login from './components/screens/Login';
import SignUp from './components/screens/SignUp';
import {AsyncStorage} from 'react-native';
import CustomerHome from './components/screens/customer/CustomerHome';
import CustomerOrderReceived from './components/screens/customer/CustomerOrderReceived';
import CustomerMenu from './components/screens/customer/CustomerMenu';
import CustomerShoppingCart from './components/screens/customer/CustomerShoppingCart';
import CustomerPreviousOrders from './components/screens/customer/CustomerPreviousOrders';
import CustomerDeliveryComplain from './components/screens/customer/CustomerDeliveryComplain';
import CustomerRateFood from './components/screens/customer/CustomerRateFood';
import CustomerFoodComplain from './components/screens/customer/CustomerFoodComplain';
import CustomerProfile from './components/screens/customer/CustomerProfile';
import RestaurantInfo from './components/screens/customer/RestaurantInfo'
import ManagerHome from './components/screens/manager/ManagerHome';
import ManagerRegister from './components/screens/manager/ManagerRegister';
import DeliveryHome from './components/screens/delivery/DeliveryHome';
import DeliveryBid from './components/screens/delivery/DeliveryBid';
import DeliveryCurrentOrder from './components/screens/delivery/DeliveryCurrentOrder';
import DeliveryCustomerComplain from './components/screens/delivery/DeliveryCustomerComplain';
import DeliveryCompleteOrder from './components/screens/delivery/DeliveryCompleteOrder';
import DeliveryHistory from './components/screens/delivery/DeliveryHistory';
import CookHome from './components/screens/cook/CookHome';
import CookIngredientList from './components/screens/cook/CookIngredientList';
import CookIngredientRequest from './components/screens/cook/CookIngredientRequest';
import CookComplain from './components/screens/cook/CookComplain';
import CookMenuList from './components/screens/cook/CookMenuList';
import CookAddFoodItem from './components/screens/cook/CookAddFoodItem';
import SalespersonHome from './components/screens/salesperson/SalespersonHome';
import {TabIcon} from './components/common/components';
import ManagerCustomers from './components/screens/manager/ManagerCustomers';
import ManagerComplaints from './components/screens/manager/ManagerComplaints';
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
                    <Scene key='Login' component={Login} hideNavBar />
                    <Scene key='SignUp' component={SignUp} hideNavBar />

                    <Scene key='customer' activeBackgroundColor='#0b4d1a' showLabel={false} hideNavBar tabs={true} hideNavBar tabBarStyle={{backgroundColor: '#188a32' }}>
                        <Scene 
                            key='CustomerHome' 
                            component={CustomerHome} 
                            hideNavBar 
                            keyColor='black'
                            iconName='home'
                            iconColor='white'
                            iconSize={24}
                            icon = {TabIcon}
                        />
                        <Scene 
                            key='CustomerShoppingCart' 
                            component={CustomerShoppingCart} 
                            hideNavBar 
                            keyColor='black'
                            iconName='shopping-cart'
                            iconColor='white'
                            iconSize={24}
                            icon={TabIcon}
                        />
                        <Scene 
                            key='CustomerProfile' 
                            component={CustomerProfile} 
                            hideNavBar 
                            keyColor='black'
                            iconName='user-circle'
                            iconColor='white'
                            iconSize={24}
                            icon={TabIcon}
                        />
                    
                    </Scene>
                    <Scene key='RestaurantInfo' component={RestaurantInfo} hideNavBar hideTabBar/>

                    <Scene key='CustomerOrderReceived' component={CustomerOrderReceived} hideNavBar hideTabBar/>
                    <Scene key='CustomerMenu' component={CustomerMenu} hideNavBar hideTabBar/>
                    <Scene key='CustomerShoppingCart' component={CustomerShoppingCart} hideNavBar hideTabBar/>
                    <Scene key='CustomerPreviousOrders' component={CustomerPreviousOrders} hideNavBar hideTabBar/>
                    <Scene key='CustomerDeliveryComplain' component={CustomerDeliveryComplain} hideNavBar hideTabBar/>
                    <Scene key='CustomerRateFood' component={CustomerRateFood} hideNavBar hideTabBar/>
                    <Scene key='CustomerFoodComplain' component={CustomerFoodComplain} hideNavBar hideTabBar/>
                    <Scene key='ManagerRegister' component={ManagerRegister} keyColor='black' hideNavBar/>

                    <Scene key='manager' activeBackgroundColor='#0b4d1a' showLabel={false} hideNavBar tabs={true} hideNavBar tabBarStyle={{backgroundColor: '#188a32' }}>
                        <Scene 
                            key='ManagerInfo' 
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
                            component={ManagerCustomers} 
                            hideNavBar 
                            keyColor='black'
                            iconName='address-book'
                            iconColor='white'
                            iconSize={24}
                            icon={TabIcon}
                        />
                        <Scene 
                            key='Orders' 
                            component={ManagerComplaints} 
                            hideNavBar 
                            keyColor='black'
                            iconName='receipt'
                            iconColor='white'
                            iconSize={24}
                            icon={TabIcon}
                        />
                    </Scene>
                    <Scene key='cook' hideNavBar>
                        <Scene key='CookHome' component={CookHome} hideNavBar />
                        <Scene key='CookIngredientList' component={CookIngredientList} hideNavBar />
                        <Scene key='CookIngredientRequest' component={CookIngredientRequest} hideNavBar />
                        <Scene key='CookComplain' component={CookComplain} hideNavBar />
                        <Scene key='CookMenuList' component={CookMenuList} hideNavBar />
                        <Scene key='CookAddFoodItem' component={CookAddFoodItem} hideNavBar />

                    </Scene>
                    <Scene key='delivery' hideNavBar>
                        <Scene 
                            key='DeliveryHome' 
                            component={DeliveryHome} 
                            hideNavBar 
                        />
                        <Scene 
                            key='DeliveryBid' 
                            component={DeliveryBid} 
                            hideNavBar 
                        />
                        <Scene 
                            key='DeliveryCurrentOrder' 
                            component={DeliveryCurrentOrder} 
                            hideNavBar 
                        />
                        <Scene 
                            key='DeliveryCustomerComplain'
                            component={DeliveryCustomerComplain} 
                            hideNavBar 
                        />
                        <Scene 
                            key='DeliveryCompleteOrder'
                            component={DeliveryCompleteOrder} 
                            hideNavBar 
                        />
                        <Scene 
                            key='DeliveryHistory' 
                            initial={true} 
                            component={DeliveryHistory} 
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
                    <Scene key='salesperson'  hideNavBar>
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
