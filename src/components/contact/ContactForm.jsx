import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';
import emailjs from 'emailjs-com';

const ContactForm = () => {
	const sendEmail = (e) => {
		e.preventDefault(); // Empêche la soumission normale du formulaire

		emailjs
			.sendForm(
				'service_wydb9k4',        // Votre Service ID
				'template_e4k2jy9',       // Votre Template ID
				e.target,                 // Le formulaire (capturé par e.target)
				'02Kv6Nimh392GLhzD'       // Votre Public Key (User ID)
			)
			.then(
				(result) => {
					console.log('Message envoyé avec succès:', result.text);
					alert('Message envoyé avec succès !');
				},
				(error) => {
					console.error('Erreur lors de l’envoi:', error.text);
					alert('Erreur lors de l’envoi du message. Veuillez réessayer.');
				}
			);
		e.target.reset(); // Réinitialise le formulaire après l’envoi
	};

	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<form
					onSubmit={sendEmail} // Appelle la fonction sendEmail lors de la soumission
					className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
				>
					<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
						Contact Form
					</p>
					<FormInput
						inputLabel="Nom"
						labelFor="name"
						inputType="text"
						inputId="name"
						inputName="name"
						placeholderText="Votre nom"
						ariaLabelName="Name"
					/>
					<FormInput
						inputLabel="Email"
						labelFor="email"
						inputType="email"
						inputId="email"
						inputName="email"
						placeholderText="Votre email"
						ariaLabelName="Email"
					/>
					<FormInput
						inputLabel="Objet de votre demande"
						labelFor="subject"
						inputType="text"
						inputId="subject"
						inputName="subject"
						placeholderText="Objet de votre demande"
						ariaLabelName="Subject"
					/>

					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="message"
						>
							Message
						</label>
						<textarea
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="message"
							name="message"
							cols="14"
							rows="6"
							aria-label="Message"
						></textarea>
					</div>

					<div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
						<Button
							title="Send Message"
							type="submit"
							aria-label="Send Message"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;

