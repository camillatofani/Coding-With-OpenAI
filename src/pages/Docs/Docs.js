import React, { useState, useEffect } from 'react';
import Input from '../../components/Form/Input/Input';
import Response from '../../components/Form/Response/Response';
import Button from '../../components/Button/Button';
import axios from 'axios';
import styles from './Docs.module.css';
import Select from '../../components/Form/Select/Select';

const Docs = () => {
	const [code, setCode] = useState('');
	const [codingError, setCodingError] = useState('');
	const [isErrorVisible, setIsErrorVisible] = useState(false);
	const [speak, setSpeakChange] = useState('');

	useEffect(() => {
		setIsErrorVisible(false);
	}, [code, speak]);

	const handleCheckErrors = async () => {
		setIsErrorVisible(false);
		try {
			const apiUrl = 'https://api.openai.com/v1/completions';
			const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

			// Chiamata API per la verifica della lingua
			const languageRequestBody = {
				model: 'text-davinci-003',
				prompt: `Spiegami in lingua ${ speak }, in una order list, usando termini molto semplici e spiegando come se io fossi un bambino come funziona questo codice: ${ code }. Per ogni punto citami il pezzo di codice a cui ti stai riferendo.`,
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
		}
	};

	return (
		<div>
			<h2>Enter your code and I'll try to explain it to you</h2>
			<Select speak={ speak } onSpeakChange={ (e) => setSpeakChange(e.target.value) }/>
			<Input code={ code } onCodeChange={ (e) => setCode(e.target.value) }/>
			<p className={ styles.counter }>{ code.length } / 1000</p>
			<Button text="docs my code" onClick={ handleCheckErrors } disabled={ code.length < 5 }></Button>
			{ isErrorVisible && <Response title="Your code explained" codingError={ codingError.replace(/^\n\n/, '') }/> }
		</div>
	);
};

export default Docs;
