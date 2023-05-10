import React, { useEffect } from 'react';
import { Configuration, OpenAIApi } from 'openai';

const Page1 = () => {
	useEffect(() => {
		const runOpenAI = async () => {
			const configuration = new Configuration({
				apiKey: process.env.REACT_APP_OPENAI_API_KEY,
			});
			const openai = new OpenAIApi(configuration);
			try {
				const response = await openai.createCompletion({
					model: 'text-davinci-003',
					prompt: 'Say this is a test',
					max_tokens: 7,
					temperature: 0,
				});
				console.log(response);
				// Gestisci la risposta qui
			} catch (error) {
				console.error('Errore durante la richiesta a OpenAI:', error);
			}
		};
		runOpenAI();
	}, []);

	return <div>Componente OpenAI</div>;
};

export default Page1;
