import React from 'react';
import { languageOptions } from './languages';
import { speakOptions } from './speak';

const CodeInput = ({ speak, language, code, onSpeakChange, onLanguageChange, onCodeChange }) => {
	return (
		<div>
			<h3>
				Select the language in which you want the answer
			</h3>
			<select
				value={ speak }
				onChange={ onSpeakChange }
			>
				{ speakOptions.map((option, index) => (
					<option key={ index } value={ option.toLowerCase() }>
						{ option }
					</option>
				)) }
			</select>
			<h3>
				Select the programming language or framework
			</h3>
			<select
				value={ language }
				onChange={ onLanguageChange }
			>
				{ languageOptions.map((option, index) => (
					<option key={ index } value={ option.toLowerCase() }>
						{ option }
					</option>
				)) }
			</select>
			<br />
			<br />
			<textarea
				rows={ 10 }
				cols={ 50 }
				placeholder="Inserisci il tuo codice qui..."
				value={ code }
				onChange={ onCodeChange }
			/>
		</div>
	);
};

export default CodeInput;
