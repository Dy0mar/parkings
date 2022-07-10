import {createAsyncThunk} from '@reduxjs/toolkit';
// import {usersFetching, usersFetchingError, usersFetchingSuccess} from '../reducers/UserSlice';


// old style
// export const fetchUsersLikeThunk = () => async (dispatch) => {
// 	try {
// 		dispatch(usersFetching())
// 		const r = await fetch('https://jsonplaceholder.typicode.com/users')
// 		dispatch(usersFetchingSuccess(r.data))
// 	} catch (e) {
// 		dispatch(usersFetchingError(e))
// 	}
// }

export function withTryCatch(payloadCreator) {
	return async (args, thunkAPI) => {
		try {
			return await payloadCreator(args);
		} catch (err) {
			// some toast here
			throw err;
		}
	};
}

export const fetchUsers = createAsyncThunk(
	'users/fetchAll',
	withTryCatch(
		async (_, thunkAPI) => {
			// todo: move it to api add axios
			const r = await fetch('https://jsonplaceholder.typicode.com/users')
			const json = await r.json()
			return json
		}
	)
)

export const fetchUsers_1 = createAsyncThunk(
	'users/fetchAll',
	async (id, thunkAPI) => {
		try {
			const r = await fetch('https://jsonplaceholder.typicode.com/users')
			const json = await r.json()
			return json
		} catch (e) {
			// up to you e || message
			thunkAPI.rejectWithValue(e || 'Failed to get list of users' )
		}
	}
)