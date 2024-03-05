import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className={ 'not-found' }>
			<h1>Page Not found!</h1>
			<Link to={ '/' }>Home</Link>
		</div>
	);
};

export default NotFound;