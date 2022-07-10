import {createSlice} from "@reduxjs/toolkit";
import {fetchUsers} from "redux/actionCreators/users";
import _each from "lodash/each"


const initialState = {
	users: [],
	error: '',
	isLoading: false
}

const setUserList = (state, {payload}) => { state.users = payload }

const startLoading = (state) => { state.isLoading = true }
const stopLoading = (state) => { state.isLoading = false }

const clearErrors = (state) => { state.error = '' }
const setErrors = (state, {payload}) => { state.error = payload }

const combineActions = (actions) => (state, action) => {
	actions.map((_action) => _action(state, action))
}

const combineActionsSuccess = (_actions) => (state, action) => {
	_each([..._actions, clearErrors, stopLoading], (_action) => _action(state, action))
}

export const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchUsers.fulfilled.type]: combineActionsSuccess([setUserList]),
		[fetchUsers.pending.type]: startLoading,
		[fetchUsers.rejected.type]: combineActions([stopLoading, setErrors]),
	}
})


// export const {usersFetching, usersFetchingError, usersFetchingSuccess} = userSlice.actions;

const userReducer = userSlice.reducer;

export default userReducer;