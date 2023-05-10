import React from 'react';
import { speakOptions } from './speak';

const Select = ({ speak, onSpeakChange }) => {
	return (
		<div>
			<h3>
				Select the language in which you want the answer
			</h3>
			<select
				value={ speak }
				onChange={ onSpeakChange }
			>
				{ Object.entries(speakOptions[0]).map(([key, value]) => (
					<option key={ key } value={ key.toLowerCase() }>
						{ value }
					</option>
				)) }
			</select>
		</div>
	);
};

export default Select;
