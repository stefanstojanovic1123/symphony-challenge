
export default function user(state = null, action) {
	switch (action.type) {
		case 'SET_USER': {
			const { user } = action;
			if (user !== null) {
				// setPusherCredentials(user.id, user.token);
			}
			return user;
		}
		case 'SET_USER_DATA':
			if (state === null) {
				return state;
			}

			return {
				...state,
				...action.userData,
			};
		default:
			return state;
	}
}
