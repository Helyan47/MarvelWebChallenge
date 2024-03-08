import React from 'react';
import { classNames } from '@/utils/commonFunctions';
import './button.css';

export const Button = (props) => {
	const { children, buttonType, ...attributes } = props;
	const defaultButtonType = buttonType || 'primary';
	return (
		<button {...attributes} className={classNames('marvel-button', props.className, defaultButtonType)}>
			{children}
		</button>
	);
};

export default Button;
