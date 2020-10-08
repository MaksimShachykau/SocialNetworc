import {createStore, combineReducers, applyMiddleware} from 'redux';
import UserReducer from './usersReducer'
import authReduce from './authReducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import { profileReducer } from './profileReducer';
import { newsReducer } from './newsReducer';
import { appReducer } from './appReducer';
let Reducers = combineReducers({
    UsersPage: UserReducer,
    Auth: authReduce,
    form: formReducer,
    profile: profileReducer,
    news: newsReducer,
    app: appReducer
})

let store = createStore(Reducers, applyMiddleware(thunkMiddleware))

export default store
