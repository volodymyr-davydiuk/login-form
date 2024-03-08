const setAuthToken = (token) => {
	localStorage.setItem('Auth-Token', token);
};

export {setAuthToken};