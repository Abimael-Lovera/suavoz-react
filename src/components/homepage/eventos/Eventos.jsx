import Djamila from '../../../assets/Djamila-Ribeiro.jpg';
import Silvio from '../../../assets/silvioalmeida.jpg';
import Sueli from '../../../assets/sueli-carneiro.jpg';
import '../Homepage.css';

export default function Eventos() {
	return (
		<>
			<section className='lives__container' id='custom-cards'>
				<div className='container'>
					<h2 className='title-light lives__title'>Assista Nossas Lives</h2>

					<div className='lives__content'>
						<div data-aos='zoom-out-up'>
							<article className='lives_card'>
								<picture className='lives_card-img'>
									<img
										src={Djamila}
										alt='djamila  ribeiro'
										className='lives_card-img'
									/>
								</picture>
								<div className='lives_card-body'>
									<h4 className='lives_card-title'>Djamila Ribeiro</h4>
									<p className='lives_card-paragraph'>
										A filósofa brasileira abre espaço para troca de ideias e uma
										breve resenha do seu livro "Pequeno manual antirracista".
									</p>
									<span className='text-center'>
										<strong>19/05 às 20:00 hrs</strong> <br />
										<i className='fa-brands fa-youtube fa-xl' />
										<i className='fa-brands fa-twitch fa-xl' />
									</span>
									<a className='lives_card-btn'>Confirme sua presença</a>
								</div>
							</article>
						</div>

						<div data-aos='zoom-out-up'>
							<article className='lives_card'>
								<picture className='lives_card-img'>
									<img
										src={Silvio}
										alt='Silvio Almeida'
										className='lives_card-img'
									/>
								</picture>
								<div className='lives_card-body'>
									<h4 className='lives_card-title'>Silvio de Almeida</h4>
									<p className='lives_card-paragraph'>
										O professor fala sobre racismo estrutural, como ele se
										perpetua na sociedade e quais as estratégias de
										enfrentamento.
									</p>
									<span className='text-center'>
										<strong>20/04 às 20:45 hrs</strong> <br />
										<i className='fa-brands fa-youtube fa-xl' />
										<i className='fa-brands fa-twitch fa-xl' />
									</span>
									<a className='lives_card-btn'> Confirme sua presença</a>
								</div>
							</article>
						</div>

						<div data-aos='zoom-out-up'>
							<article className='lives_card'>
								<picture className='lives_card-img'>
									<img
										src={Sueli}
										alt='Sueli Carneiro'
										className='lives_card-img'
									/>
								</picture>
								<div className='lives_card-body'>
									<h4 className='lives_card-title'>Sueli Carneiro</h4>
									<p className='lives_card-paragraph'>
										Uma das principais autoras sobre feminismo negro no Brasil
										fala sobre a importância do debate nos dias atuais.
									</p>
									<span className='text-center'>
										<strong>03/07 às 19:30 hrs</strong> <br />
										<i className='fa-brands fa-youtube fa-xl' />
										<i className='fa-brands fa-twitch fa-xl' />
									</span>
									<a className='lives_card-btn'>Confirme sua presença</a>
								</div>
							</article>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
