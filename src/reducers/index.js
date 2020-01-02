import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import streamRecuder from './streamReducer';



export default combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamRecuder
})