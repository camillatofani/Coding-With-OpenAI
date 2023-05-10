import React, { useState, useEffect } from 'react';
import Input from '../../components/Form/Input/Input';
import Response from '../../components/Form/Response/Response';
import Button from '../../components/Button/Button';
import StringDifferenceHighlighter from '../../components/StringDifferenceHighlighter/StringDifferenceHighlighter';
import axios from 'axios';
import styles from './FixMyCode.module.css';

const FixMyCode = () => {
	const [code, setCode] = useState('');
	const [codingError, setCodingError] = useState('');
	const [isErrorVisible, setIsErrorVisible] = useState(false);
	const [tooLong, setTooLong] = useState(false);

	useEffect(() => {
		setIsErrorVisible(false);
		setTooLong(false);
	}, [code]);

	const handleCheckErrors = async () => {
		setIsErrorVisible(false);
		setTooLong(false);
		try {
			const apiUrl = 'https://api.openai.com/v1/completions';
			const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

			// Chiamata API per la verifica della lingua
			const languageRequestBody = {
				model: 'text-davinci-003',
				prompt: `Correggi il mio codice ${ code } e dimmi solo il codice corretto, senza commentare.`,
				max_tokens: 2000,
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
			setTooLong(true);
		}
	};

	const originalText = code;
	const modifiedText = codingError.replace(/^\n\n/, '');

	return (
		<div>
			<h2>Enter your code and I'll do the rest</h2>
			<Input code={ code } onCodeChange={ (e) => setCode(e.target.value) }/>
			<p className={ styles.counter }>{ code.length } / 1000</p>
			<Button text="fix my code, please" onClick={ handleCheckErrors } disabled={ code.length < 10 }></Button>
			{ isErrorVisible && <Response title="The correct code is" codingError={ codingError.replace(/^\n\n/, '') }/> }
			{ tooLong && <h2>Oh no honey! Please, break your code into smaller pieces.I'm not ready for all this code yet. I promise I'll make it up to you 🖖🏻</h2> }
			{ isErrorVisible && <StringDifferenceHighlighter originalText={ originalText } modifiedText={ modifiedText } /> }
		</div>
	);
};

export default FixMyCode;
