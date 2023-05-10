import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ResponseTypeOf = ({
	language,
	codingError,
	title }) => {
	return (
		<div>
			<h2>{ title }</h2>
			<SyntaxHighlighter language={ language } style={ oneLight }>
				{ codingError }
			</SyntaxHighlighter>
		</div>
	);
};

export default ResponseTypeOf;
