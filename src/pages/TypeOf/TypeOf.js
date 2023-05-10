import React, { useState, useEffect } from 'react';
import Input from '../../components/Form/Input/Input';
import Response from '../../components/Form/Response/Response';
import Button from '../../components/Button/Button';
import axios from 'axios';
import styles from './TypeOf.module.css';
import { useTranslation } from 'react-i18next';

const TypeOf = () => {
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

			const languageRequestBody = {
				model: 'text-davinci-003',
				prompt: t('typeof.prompt_1') + code + t('typeof.prompt_2'),
				max_tokens: 50,
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
			<h2>{ t('typeof.title') }</h2>
			<Input code={ code } onCodeChange={ (e) => setCode(e.target.value) }/>
			<p className={ styles.counter }>{ code.length } / 1000</p>
			<Button text={ t('typeof.button') } onClick={ handleCheckErrors } disabled={ code.length < 5 }></Button>
			{ isErrorVisible && <Response title={ t('typeof.response') } codingError={ codingError.replace(/^\n\n/, '') }/> }
		</div>
	);
};

export default TypeOf;
