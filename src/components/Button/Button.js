import React from 'react';

const button = (props) => (
	<button className="btn Btn " disabled={props.disabled} onClick={props.onClick}>
		{props.children}
	</button>
);

export default button;
