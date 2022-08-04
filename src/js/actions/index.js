import config from '@/config';

import Store from '@/modules/Store';
import ReduxState from '@/modules/ReduxState';

import ConfirmDialog from '@/components/modals/ConfirmDialog';
import ChoiceDialog from '@/components/modals/ChoiceDialog';
import ShowEventsModal from '../components/modals/ShowEventsModal';

const Actions = {
	setUser: user => Store.dispatch({ type: 'SET_USER', user }),
	setUserData: userData => Store.dispatch({ type: 'SET_USER_DATA', userData }),

	setAuthenticating: authenticating => Store.dispatch({ type: 'SET_AUTHENTICATING', authenticating }),

	setLanguage: language => Store.dispatch({ type: 'SET_LANGUAGE', language }),

	addModal: (
		title,
		content,
		className = null,
		custom = false,
		canCloseWithEsc = undefined,
		id = undefined,
		onClose = undefined
	) =>
		Store.dispatch({
			type: 'ADD_MODAL',
			modal: {
				id,
				title,
				content: typeof content === 'string' ? ReduxState.get().i18n(content) : content,
				className,
				custom,
				canCloseWithEsc: canCloseWithEsc !== undefined ? canCloseWithEsc : typeof content === 'string',
				onClose,
			},
		}),

	// alias for addModal
	alert: (title, content, options = {}) =>
		Actions.addModal(
			title,
			content,
			options.className,
			options.custom,
			options.canCloseWithEsc,
			options.id,
			options.onClose
		),

	closeModal: id => Store.dispatch({ type: 'CLOSE_MODAL', id }),
	confirm: (title, content, handler) =>
		Store.dispatch({
			type: 'ADD_MODAL',
			modal: {
				title,
				content: <ConfirmDialog content={content} onSubmit={handler} />,
				className: null,
				custom: true,
				canCloseWithEsc: true,
			},
		}),
	choice: (title, content, choices, handler) =>
		Store.dispatch({
			type: 'ADD_MODAL',
			modal: {
				title,
				content: <ChoiceDialog content={content} choices={choices} onSubmit={handler} />,
				className: null,
				custom: true,
			},
		}),

	showEventsModal: (title, events) =>
		Store.dispatch({
			type: 'ADD_MODAL',
			modal: {
				title,
				content: <ShowEventsModal events={events} />,
				className: 'show-events-modal',
				custom: true,
			},
		}),

	addSnack: (title, content, opts) =>
		Store.dispatch({
			type: 'ADD_SNACK',
			snack: { title, content, opts },
		}),
	closeSnack: id => Store.dispatch({ type: 'CLOSE_SNACK', id }),

	// Non-Redux actions
	setTitle: title => {
		if (!title) {
			document.title = config.project_name;
		} else {
			document.title = title + ' - ' + config.project_name;
		}
	},
	setMetaDescription: description => {
		document.querySelector('meta[name=description]').content = description;
	},

	setViewportDevice: viewportDevice =>
		Store.dispatch({ type: 'SET_VIEWPORT_DEVICE', viewportDevice }),
};

export default Actions;