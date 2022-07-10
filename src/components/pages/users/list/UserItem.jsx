import React from 'react';

export const UserItem = ({user}) => {
	return (
		<div key={user.id}>{user.username}</div>
	);
};
