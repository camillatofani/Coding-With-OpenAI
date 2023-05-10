import React, { useState, useEffect } from 'react';
import Title from '../../components/Title/Title';
import CodeInput from '../../components/CodeInput/CodeInput';
import CodingError from '../../components/CodingError/CodingError';
import axios from 'axios';

const Start = () => {
	// const [speak, setSpeakChange] = useState('');
	// const [language, setLanguageChange] = useState('');
	const [code, setCode] = useState('');
	const [codingError, setCodingError] = useState('');
	const [isErrorVisible, setIsErrorVisible] = useState(false);

	// useEffect(() => {
	// 	setIsErrorVisible(false);
	// }, [language, speak]);

	const handleCheckErrors = async () => {
		setIsErrorVisible(false);
		try {
			const apiUrl = 'https://api.openai.com/v1/completions';
			const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

			// Chiamata API per la verifica della lingua
			const languageRequestBody = {
				model: 'text-davinci-003',
				prompt: `In che linguaggio è scritto il codice ${ code }? Dimmi solo il nome.`,
				max_tokens: 4000,
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
			<Title />
			<CodeInput
				// speak={ speak }
				// language={ language }
				code={ code }
				// onSpeakChange={ (e) => setSpeakChange(e.target.value) }
				// onLanguageChange={ (e) => setLanguageChange(e.target.value) }
				onCodeChange={ (e) => setCode(e.target.value) }
			/>
			<p>{ code.length } / 1000</p>
			<button onClick={ handleCheckErrors } disabled={ code.length < 2 }>
				Go
			</button>
			{ isErrorVisible && <CodingError
				// language={ language }
				codingError={ codingError.replace(/^\n\n/, '') }
			/> }
		</div>
	);
};

export default Start;
