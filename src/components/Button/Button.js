import React from 'react';
import styles from './Button.module.css';

export default function Button({ text, type = 'primary', onClick, disabled, style }) {
	const buttonClassName = `${ styles.button } ${ styles[type] }`;

	return (
		<button className={ buttonClassName } onClick={ onClick } disabled={ disabled } style={style}>
			{ text }
		</button>
	);
}
