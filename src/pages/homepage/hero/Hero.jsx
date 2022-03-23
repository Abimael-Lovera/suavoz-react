import React from 'react';
import '../Homepage.css';
import '../../../Layout.css';
import img1Carrosel from '../../../assets/img1carroselHomepage.jpg';
import img2Carrosel from '../../../assets/img2carroselHomepage.jpg';
import img3Carrosel from '../../../assets/img3carroselHomepage.jpg';
import { Link } from 'react-router-dom';

export default function Hero() {
	return (
		<>
			<section className='hero'>
				<div id='myCarousel' className='carousel slide' data-bs-ride='carousel'>
					<div className='carousel-indicators'>
						<button
							type='button'
							data-bs-target='#myCarousel'
							data-bs-slide-to='0'
							className='active'
							aria-current='true'
							aria-label='Slide 1'
						></button>
						<button
							type='button'
							data-bs-target='#myCarousel'
							data-bs-slide-to='1'
							aria-label='Slide 2'
						></button>
						<button
							type='button'
							data-bs-target='#myCarousel'
							data-bs-slide-to='2'
							aria-label='Slide 3'
						></button>
					</div>
					<div className='carousel-inner'>
						<div className='carousel-item active'>
							<img
								src={img1Carrosel}
								alt='comunidade preta'
								className='carousel__img'
							/>
							<div className='container'>
								<div className='carousel-caption text-start'>
									<h2>
										" A revolta é a linguagem daqueles que não são ouvidos."
									</h2>
									<blockquote>
										<p>
											<em>Martin Luther King Jr.</em>
										</p>
									</blockquote>
									<button className='carousel--button'>
										<Link to='/perfil/denuncia/post' className='btn hover__cta'>
											Faça a sua denúncia !
										</Link>
									</button>
								</div>
							</div>
						</div>
						<div className='carousel-item'>
							<img
								src={img2Carrosel}
								alt='comunidade preta'
								className='carousel__img'
							/>
							<div className='container'>
								<div className='carousel-caption'>
									<h2>Sua voz, nosso grito !</h2>
									<button className='carousel--button'>
										<Link to='/perfil/denuncia/post' className='btn hover__cta'>
											Faça a sua denúncia !
										</Link>
									</button>
								</div>
							</div>
						</div>
						<div className='carousel-item'>
							<img
								src={img3Carrosel}
								alt='comunidade preta'
								className='carousel__img'
							/>
							<div className='container'>
								<div className='carousel-caption text-end'>
									<h2>
										Não lutamos por integração ou por separação.
										<br />
										Lutamos para ser Sua Voz
									</h2>
									<button className='carousel--button'>
										<Link to='/perfil/denuncia/post' className='btn hover__cta'>
											Faça a sua denúncia !
										</Link>
									</button>
								</div>
							</div>
						</div>
					</div>
					<button
						className='carousel-control-prev'
						type='button'
						data-bs-target='#myCarousel'
						data-bs-slide='prev'
					>
						<span
							className='carousel-control-prev-icon'
							aria-hidden='true'
						></span>
						<span className='visually-hidden'>Previous</span>
					</button>
					<button
						className='carousel-control-next'
						type='button'
						data-bs-target='#myCarousel'
						data-bs-slide='next'
					>
						<span
							className='carousel-control-next-icon'
							aria-hidden='true'
						></span>
						<span className='visually-hidden'>Next</span>
					</button>
				</div>
			</section>
		</>
	);
}
