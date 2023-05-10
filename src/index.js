import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import itTranslation from './locales/it.json';
import enTranslation from './locales/en.json';

i18n.use(initReactI18next).init({
	interpolation: {
		escapeValue: false,
	},
	resources: {
		it: {
			translation: itTranslation,
		},
		en: {
			translation: enTranslation,
		},
	},
	lng: 'it',
	fallbackLng: 'en',
	debug: false
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
