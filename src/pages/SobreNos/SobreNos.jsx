import React from 'react';
import './SobreNos.css';
import jonatan from '../../assets/jonatan.png';
import gustavo from '../../assets/gustavo.png';
import fernando from '../../assets/fernando.png';
import renan from '../../assets/renan.png';
import abimael from '../../assets/abimael.png';
import rodrigo from '../../assets/rodrigo (1).png';
import update from '../../assets/update.svg';
import coletando from '../../assets/coletando.svg';

export default function SobreNos() {
	return (
		<section class='heroRights__container'>
			<div class='container heroRights__content'>
				<div class='heroRights__body'>
					<h1 class='heroRights__body-title title-light'>
						O Racismo no Brasil
					</h1>
					<p class='heroRights__body-paragraph'>
						O passado escravagista que o nosso país perpetuou por mais de 300
						anos e insiste em esconder, se mostra da pior forma no cotidiano. É
						muito fácil perceber que o Brasil ainda possui essa ferida aberta,
						basta ligarmos a televisão e olharmos quantos negros morrem por
						serem confundidos com bandidos, quantos negros superlotam cadeias
						por crimes que ainda nem foram julgados e que muitas vezes nem foram
						cometidos,
						<strong>
							quantos negros sofrem com a falta de oportunidade mesmo quando
							possuem qualificação.
						</strong>
					</p>
				</div>
			</div>

			<section class='aboutContent__container'>
				<div class='container aboutContent__content'>
					<article class='aboutSolucao'>
						<div class='aboutSolucao__body'>
							<h2 class='aboutSolucao__body-title title'>Nossa solução</h2>
							<h6 class='aboutSolucao__body-subtitle'>
								A plataforma "SUA VOZ", surge a partir da discussão de seis
								jovens estudantes, que buscam uma solução tecnológica para que a
								população preta seja atendida partindo da discriminação racial
								enfrentada por eles.
							</h6>
							<p class='aboutSolucao__body-paragraph'>
								A missão plataforma "SUA VOZ" é ouvir pessoas que enfrentam o
								racismo enraizado na nossa sociedade, seja em forma de abuso
								policial, uma perseguição de um segurança numa loja, o
								constrangimento em uma entrevista de emprego e tantos outros
								problemas que infelizmente os negros enfrentam diariamente.
							</p>
							<p class='aboutSolucao__body-paragraph'>
								O "SUA VOZ" tem como objetivo levar as denúncias aos órgãos
								competentes e transforma-las em dados para que o problema racial
								seja tratado e exposto com maior transparência. Nós precisamos
								enxergar o Brasil da maneira que ele realmente é, e negar o
								racismo é negar a vida e a dignidade de milhares de pessoas que
								poderiam estar colaborando com o desenvolvimento do país.
							</p>
						</div>
						<img src={update} alt='' class='aboutSolucao__img' />
					</article>
					<article class='aboutProcesso'>
						<img src={coletando} alt='' class='aboutProcesso__img' />
						<h2 class='aboutProcesso__title'>
							Coletando dados, <br /> produzindo mudanças.{' '}
						</h2>
					</article>
				</div>
			</section>

			<section class='equipe__container'>
				<h3 class='title'>Nosso Time</h3>
				<div class='container-xl'>
					<div class='equipe__content'>
						<div class='equipe__card'>
							<img
								src={abimael}
								class='equipe__card-img'
								alt='abimael lovera'
							/>
							<h4 class='equipe__card-title'>Abimael Lovera</h4>
							<p class='equipe__card-txt'>Developer FullStack</p>
							<div class='equipe__card-links'>
								<a
									href='https://github.com/Abimael-Lovera'
									class='equipe__card-social'
									target='_blank'
									rel='noreferrer'
								>
									<i class='fa-brands fa-github'></i>
								</a>
								<a
									href='https://www.linkedin.com/in/abimael-lovera/'
									class='equipe__card-social'
									target='_blank'
									rel='noreferrer'
								>
									<i class='fa-brands fa-linkedin'></i>
								</a>
								<a
									href='mailto:abimaellovera@gmail.com'
									class='equipe__card-social'
									target='_blank'
									rel='noreferrer'
								>
									<i class='fa-solid fa-at'></i>
								</a>
							</div>
						</div>

						<div class='equipe__card'>
							<img
								src={fernando}
								class='equipe__card-img'
								alt='fernado gaspar'
							/>
							<h4 class='equipe__card-title'>Fernando Gaspar</h4>
							<p class='equipe__card-txt'>Developer FullStack</p>
							<div class='equipe__card-links'>
								<a
									href='https://github.com/FernandoGasparr/'
									class='equipe__card-social'
									target='_blank'
									rel='noreferrer'
								>
									<i class='fa-brands fa-github'></i>
								</a>
								<a
									href='https://www.linkedin.com/in/fernando-gaspar-b52a23b4/'
									class='equipe__card-social'
									target='_blank'
									rel='noreferrer'
								>
									<i class='fa-brands fa-linkedin'></i>
								</a>
								<a
									href='mailto:Gaspar.fernando.1990@gmail.com'
									class='equipe__card-social'
									target='_blank'
									rel='noreferrer'
								>
									<i class='fa-solid fa-at'></i>
								</a>
							</div>
						</div>

						<div class='equipe__card'>
							<img src={gustavo} class='equipe__card-img' alt='gustavo silva' />
							<h4 class='equipe__card-title'>Gustavo Silva</h4>
							<p class='equipe__card-txt'>Developer FullStack</p>
							<div class='equipe__card-links'>
								<a
									href='https://github.com/FeGustavo07'
									class='equipe__card-social'
									target='_blank'
									rel='noreferrer'
								>
									<i class='fa-brands fa-github'></i>
								</a>
								<a
									href='https://www.linkedin.com/in/fernando-g-silva-4a2a05154/'
									class='equipe__card-social'
									target='_blank'
									rel='noreferrer'
								>
									<i class='fa-brands fa-linkedin'></i>
								</a>
								<a
									href='mailto:gusfeh07@gmail.com'
									class='equipe__card-social'
									target='_blank'
									rel='noreferrer'
								>
									<i class='fa-solid fa-at'></i>
								</a>
							</div>
						</div>

						<div class='equipe__card'>
							<img src={rodrigo} class='equipe__card-img' alt='rodrigo' />
							<h4 class='equipe__card-title'>Rodrigo Cunha</h4>
							<p class='equipe__card-txt'>Developer FullStack</p>
							<div class='equipe__card-links'>
								<a
									href='https://github.com/rodsluizz'
									class='equipe__card-social'
									target='_blank'
									rel='noreferrer'
								>
									<i class='fa-brands fa-github'></i>
								</a>
								<a
									href='https://www.linkedin.com/in/rodrigo-cunha-65a1857b/'
									class='equipe__card-social'
									target='_blank'
									rel='noreferrer'
								>
									<i class='fa-brands fa-linkedin'></i>
								</a>
								<a
									href='mailto:rodrigoluizcferreira@gmail.com'
									class='equipe__card-social'
									target='_blank'
									rel='noreferrer'
								>
									<i class='fa-solid fa-at'></i>
								</a>
							</div>
						</div>

						<div class='equipe__card'>
							<img src={jonatan} class='equipe__card-img' alt='jonatan' />
							<h4 class='equipe__card-title'>Jonatan Vasconcelos</h4>
							<p class='equipe__card-txt'>Developer FullStack</p>
							<div class='equipe__card-links'>
								<a
									href='https://github.com/jonatanmk'
									class='equipe__card-social'
									target='_blank'
									rel='noreferrer'
								>
									<i class='fa-brands fa-github'></i>
								</a>
								<a
									href='https://www.linkedin.com/in/jonatan-vasconcelos-08bb29171'
									class='equipe__card-social'
									target='_blank'
									rel='noreferrer'
								>
									<i class='fa-brands fa-linkedin'></i>
								</a>
								<a
									href='mailto:jonatan.mk@outlook.com'
									class='equipe__card-social'
									target='_blank'
									rel='noreferrer'
								>
									<i class='fa-solid fa-at'></i>
								</a>
							</div>
						</div>

						<div class='equipe__card'>
							<img src={renan} class='equipe__card-img' alt='renan' />
							<h4 class='equipe__card-title'>Renan dos Reis Fernandes</h4>
							<p class='equipe__card-txt'>Developer FullStack</p>
							<div class='equipe__card-links'>
								<a
									href='https://github.com/RenanReisFernandes'
									class='equipe__card-social'
									target='_blank'
									rel='noreferrer'
								>
									<i class='fa-brands fa-github'></i>
								</a>
								<a
									href='https://www.linkedin.com/in/renan-dos-reis-fernandes-4a3b48b9'
									class='equipe__card-social'
									target='_blank'
									rel='noreferrer'
								>
									<i class='fa-brands fa-linkedin'></i>
								</a>
								<a
									href='mailto:renanmacfernandes@hotmail.com'
									class='equipe__card-social'
									target='_blank'
									rel='noreferrer'
								>
									<i class='fa-solid fa-at'></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
}
