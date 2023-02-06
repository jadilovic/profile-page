import { Form, redirect, useActionData } from 'react-router-dom';
const Contact = () => {
	const data = useActionData();

	return (
		<div className="contact">
			<h3>Contact us</h3>
			<Form method="POST" action="/help/contact">
				<label htmlFor="email">
					<span>Your email</span>
					<input type="text" name="email" required />
				</label>
				<label htmlFor="message">
					<span>Your message</span>
					<textarea type="message" name="message" required></textarea>
				</label>
				<button>Submit</button>
				{data && data.error && <p>{data.error}</p>}
			</Form>
		</div>
	);
};
export default Contact;

export const contactAction = async ({ request }) => {
	const data = await request.formData();

	const formSubmission = {
		email: data.get('email'),
		message: data.get('message'),
	};
	console.log(formSubmission);

	if (formSubmission.message.length < 10) {
		return {
			error: 'Message must be minimum 10 characters long',
		};
	}

	return redirect('/');
};
