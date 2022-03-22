import React from 'react';
import '../Homepage.css';
import '../../../Layout.css';
import img1Carrosel from '../../../assets/img1carroselHomepage.jpg';
import img2Carrosel from '../../../assets/img2carroselHomepage.jpg';
import img3Carrosel from '../../../assets/img3carroselHomepage.jpg';

export default function Hero() {
	return (
		<>
			<section class='hero'>
				<div id='myCarousel' class='carousel slide' data-bs-ride='carousel'>
					<div class='carousel-indicators'>
						<button
							type='button'
							data-bs-target='#myCarousel'
							data-bs-slide-to='0'
							class='active'
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
					<div class='carousel-inner'>
						<div class='carousel-item active'>
							<img
								src={img1Carrosel}
								alt='comunidade preta'
								class='carousel__img'
							/>
							<div class='container'>
								<div class='carousel-caption text-start'>
									<h2>
										" A revolta é a linguagem daqueles que não são ouvidos."
									</h2>
									<blockquote>
										<p>
											<em>Martin Luther King Jr.</em>
										</p>
									</blockquote>
									<button class='carousel--button'>
										<a class='btn hover__cta'>Faça a sua denúncia !</a>
									</button>
								</div>
							</div>
						</div>
						<div class='carousel-item'>
							<img
								src={img2Carrosel}
								alt='comunidade preta'
								class='carousel__img'
							/>
							<div class='container'>
								<div class='carousel-caption'>
									<h2>Sua voz, nosso grito !</h2>
									<button class='carousel--button'>
										<a class='btn hover__cta'>Faça a sua denúncia !</a>
									</button>
								</div>
							</div>
						</div>
						<div class='carousel-item'>
							<img
								src={img3Carrosel}
								alt='comunidade preta'
								class='carousel__img'
							/>
							<div class='container'>
								<div class='carousel-caption text-end'>
									<h2>
										Não lutamos por integração ou por separação.
										<br />
										Lutamos para ser Sua Voz
									</h2>
									<button class='carousel--button'>
										<a class='btn hover__cta'>Faça a sua denúncia !</a>
									</button>
								</div>
							</div>
						</div>
					</div>
					<button
						class='carousel-control-prev'
						type='button'
						data-bs-target='#myCarousel'
						data-bs-slide='prev'
					>
						<span class='carousel-control-prev-icon' aria-hidden='true'></span>
						<span class='visually-hidden'>Previous</span>
					</button>
					<button
						class='carousel-control-next'
						type='button'
						data-bs-target='#myCarousel'
						data-bs-slide='next'
					>
						<span class='carousel-control-next-icon' aria-hidden='true'></span>
						<span class='visually-hidden'>Next</span>
					</button>
				</div>
			</section>
		</>
	);
}
