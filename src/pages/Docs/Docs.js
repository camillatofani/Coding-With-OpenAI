import React, { useState, useEffect } from 'react';
import Input from '../../components/Form/Input/Input';
import Response from '../../components/Form/Response/Response';
import Button from '../../components/Button/Button';
import axios from 'axios';
import styles from './Docs.module.css';
import { useTranslation } from 'react-i18next';

const Docs = () => {
	const { t } = useTranslation();

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
				prompt: t('docs.prompt_1') + code + t('docs.prompt_2'),
				max_tokens: 2000,
			};
			const languageResponse = await axios.post(apiUrl, languageRequestBody, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${ apiKey }`,
				},
			});
			const languageResult = languageResponse.data.choices[0].text;
			setCodingError(languageResult);
			setIsErrorVisible(true);
		} catch (error) {
			console.error(t('general.api_error_console'), error);
		}
	};

	return (
		<div>
			<h2>{ t('docs.title') }</h2>
			<Input code={ code } onCodeChange={ (e) => setCode(e.target.value) }/>
			<p className={ styles.counter }>{ code.length } / 1000</p>
			<Button text={ t('docs.button') } onClick={ handleCheckErrors } disabled={ code.length < 10 }></Button>
			{ isErrorVisible && <Response title={ t('docs.response') } codingError={ codingError.replace(/^\n\n/, '') }/> }
		</div>
	);
};

export default Docs;
