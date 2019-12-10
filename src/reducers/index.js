import {combineReducers} from 'redux';
import {AuthReducer} from './AuthReducer';
//import {ManagerReducer} from './ManagerReducer';

export default combineReducers({
    Auth: AuthReducer,
});