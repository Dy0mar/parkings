import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userReducer from './reducers/UserSlice';


const rootReducer = combineReducers({
	users: userReducer
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	})
}