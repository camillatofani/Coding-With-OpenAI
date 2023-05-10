import React from 'react';
import styles from './Input.module.css';

const Input = ({ code, onCodeChange }) => {
	return (
		<div>
				<textarea
				rows={ 15 }
				cols={ 50 }
				placeholder="Type or paste here your code"
				value={ code }
				onChange={ onCodeChange }
				className={ styles.textarea }
			/>
		</div>
	);
};

export default Input;
