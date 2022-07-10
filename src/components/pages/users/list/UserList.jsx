import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import _map from "lodash/map";
import _isEmpty from "lodash/isEmpty";

import {fetchUsers} from "redux/actionCreators/users";
import {SIsLoading, SUsers} from "redux/selectors/users";
import {UserItem} from 'components/pages/users/list/UserItem';
import {Loading} from 'components/ui/loading/Loading';


export const UserList = () => {
	const dispatch = useDispatch()
	const users = useSelector(SUsers)
	const isLoading = useSelector(SIsLoading)

	useEffect(() => {
		const load = async () => {
			if (_isEmpty(users)) {
				dispatch(fetchUsers())
			}
		}
		load().finally(() => null)
	}, [dispatch, users])

	if (isLoading) {
		return <Loading />
	}

	return (
		<div>
			{_map(users, (item) => <UserItem key={item.id} user={item} />) }
		</div>
	)
}
