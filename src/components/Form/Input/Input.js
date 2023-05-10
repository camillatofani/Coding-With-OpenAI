import React from 'react';
import styles from './Input.module.css';
import { useTranslation } from 'react-i18next';

const Input = ({ code, onCodeChange }) => {
	const { t } = useTranslation();

	return (
		<div>
				<textarea
				rows={ 15 }
				cols={ 50 }
				placeholder={ t('general.input') }
				value={ code }
				onChange={ onCodeChange }
				className={ styles.textarea }
			/>
		</div>
	);
};

export default Input;
