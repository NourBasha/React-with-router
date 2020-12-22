
import {combineReducers} from 'redux';
import AuthReducer from  './auth_reducer';



const RootReducer = combineReducers({
   auth_reducer: AuthReducer
})


export default RootReducer;