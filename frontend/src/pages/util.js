import careersData from '../data/careersData.json';

const delay = () => {
	return (0.2 + Math.random() * 2) * 1000;
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

export const getSingleCareer = (id) => {
	const career = careersData.careers.find((item) => item.id === Number(id));
	console.log(career);
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (career) {
				resolve(career);
			} else {
				reject(new Error('No career details found'));
			}
		}, delay());
	});
};
