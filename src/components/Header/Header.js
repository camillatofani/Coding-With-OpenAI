import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/img/openai.svg';

const Header = () => {
	return (
		<h1>
			Coding with <img src={ logo } alt="OpenAI Logo" className={ styles.logo } />
		</h1>
	);
};

export default Header;
