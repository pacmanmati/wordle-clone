import { browser } from '$app/env';
import { writable } from 'svelte/store';

const store = (key, fallbackValue) => {
	const s = writable(
		browser && window.localStorage.getItem(key)
			? JSON.parse(window.localStorage.getItem(key))
			: fallbackValue
	);

	s.subscribe((value) => {
		if (browser) {
			window.localStorage.setItem(key, JSON.stringify(value));
		}
	});
	return s;
};

export default store;
