import config from '@/config';

const prefix = config.namespace + '-';

export default {
	get: k => localStorage.getItem(prefix + k),
	set: (k, v) => {
		try {
			localStorage.setItem(prefix + k, v);
		} catch (e) {
			// do nothing
		}
	},
	remove: k => localStorage.removeItem(prefix + k),
};
