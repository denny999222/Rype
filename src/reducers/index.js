import {combineReducers} from 'redux';
import {AuthReducer} from './AuthReducer';
import {CustomerReducer} from './CustomerReducer';
//import {ManagerReducer} from './ManagerReducer';

export default combineReducers({
    Auth: AuthReducer,
    Customer: CustomerReducer
});