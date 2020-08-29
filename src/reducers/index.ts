import { combineReducers } from 'redux';
import homeReducer from '../screens/Home/store/reducer';

export default combineReducers({
    exercises: homeReducer
});