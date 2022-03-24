import React from "react";
import "../Homepage.css";
import "../../../Layout.css";

export default function FormContato() {
	return (
		<>
			<section className='contact'>
				<form
					className='form'
					action='https://formspree.io/f/xrgjgyed'
					method='POST'
				>
					<div className='form_container'>
						<h2 className='form_title title-light'>Seja Nosso Parceiro</h2>
						<input
							type='text'
							className='form_input'
							placeholder='Nome'
							name='name'
						/>
						<input
							type='email'
							className='form_input'
							placeholder='Email'
							name='email'
						/>
						<textarea
							className='form_input form_input-message'
							placeholder='Escreva seu messagem'
							name='message'
						></textarea>
						<button type='submit' className='hvr-bounce-to-top'>
							Enviar
						</button>
					</div>
				</form>
			</section>
		</>
	);
}
