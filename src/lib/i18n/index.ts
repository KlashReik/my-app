// src/lib/i18n/index.ts
import { init, addMessages } from 'svelte-i18n';

import en from '../../locales/en/en.json';
import de from '../../locales/de/de.json';

const defaultLocale = 'en';

addMessages('en', en);
addMessages('de', de);

init({
	fallbackLocale: defaultLocale,
	initialLocale: defaultLocale
});
