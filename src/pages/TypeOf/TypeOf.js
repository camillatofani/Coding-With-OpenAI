import React, { useState, useEffect } from 'react';
import Input from '../../components/Form/Input/Input';
import Response from '../../components/Form/Response/Response';
import Button from '../../components/Button/Button';
import axios from 'axios';
import styles from './TypeOf.module.css';

const TypeOf = () => {
	const [code, setCode] = useState('');
	const [codingError, setCodingError] = useState('');
	const [isErrorVisible, setIsErrorVisible] = useState(false);

	useEffect(() => {
		setIsErrorVisible(false);
	}, [code]);

	const handleCheckErrors = async () => {
		setIsErrorVisible(false);
		try {
			const apiUrl = 'https://api.openai.com/v1/completions';
			const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

			// Chiamata API per la verifica della lingua
			const languageRequestBody = {
				model: 'text-davinci-003',
				prompt: `In che linguaggio è scritto il codice ${ code }? Dimmi solo il nome, senza punteggiatura e spazi e precedilo con "✅". Se il codice non è valido in alcun linguaggio dimmi soltanto "❌The code language you wrote doesn't exist.".`,
				max_tokens: 50,
			};
			const languageResponse = await axios.post(apiUrl, languageRequestBody, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${ apiKey }`,
				},
			});
			const languageResult = languageResponse.data.choices[0].text;
			// Imposta il risultato della verifica della lingua nello stato
			setCodingError(languageResult);
			setIsErrorVisible(true);
		} catch (error) {
			console.error('Errore durante la verifica degli errori:', error);
		}
	};

	return (
		<div>
			<h2>Enter your code and discover the coding language</h2>
			<Input code={ code } onCodeChange={ (e) => setCode(e.target.value) }/>
			<p className={ styles.counter }>{ code.length } / 1000</p>
			<Button text="language of my code" onClick={ handleCheckErrors } disabled={ code.length < 5 }></Button>
			{ isErrorVisible && <Response title="The code language is" codingError={ codingError.replace(/^\n\n/, '') }/> }
		</div>
	);
};

export default TypeOf;
