import careersData from '../data/careersData.json';

const delay = () => {
	return (0.7 + Math.random() * 2) * 1000;
};

export const login = ({ email, password }) => {
	console.log(email, password);
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (password === 'password123' && !!email) {
				resolve();
			} else {
				reject(new Error('Password or email invalid'));
			}
		}, delay());
	});
};

export const getCareers = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (careersData) {
				resolve(careersData);
			} else {
				reject(new Error('No careers data found'));
			}
		}, delay());
	});
};
