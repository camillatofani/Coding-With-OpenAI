import React from 'react';

export default function StringDifferenceHighlighter({ originalText, modifiedText }) {
	const findDifferences = () => {
		const result = [];
		const maxLength = Math.max(originalText.length, modifiedText.length);

		for (let i = 0;i < maxLength;i++) {
			if (originalText[i] !== modifiedText[i]) {
				result.push(
					<span key={ i } style={ { backgroundColor: '#ff5286' } }>
						{ modifiedText[i] }
					</span>
				);
			} else {
				result.push(modifiedText[i]);
			}
		}

		return result;
	};

	return (
		<div>
			<h2>Where did we change the code from?</h2>
			{ findDifferences() }
		</div>
	);
}
