const Contact = () => {
	return (
		<div className="contact">
			<h3>Contact us</h3>
			<form>
				<label htmlFor="email">
					<span>Your email</span>
					<input type="text" name="email" />
				</label>
				<label htmlFor="message">
					<span>Your message</span>
					<input type="message" name="message" />
				</label>
				<button>Submit</button>
			</form>
		</div>
	);
};
export default Contact;
