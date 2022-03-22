import React from "react";
import "../Homepage.css";

export default function Conquistas() {
	const counters = document.querySelectorAll(".conquistas__card-number");

	counters.forEach(counter => {
		counter.innerText = "0";
		const updateCounter = () => {
			const target = +counter.getAttribute("data-target");
			// console.log(typeof target, target);
			const c = +counter.innerText;
			const increment = target / 100;
			// console.log(increment);

			if (c < target) {
				counter.innerText = `${Math.ceil(c + increment)}`;
				setTimeout(updateCounter, 1);
			}
		};
		updateCounter();
	});

	return (
		<>
			<section className='conquistas__container'>
				<div className='container'>
					<h2 className='conquistas__title title'>Nossos Dados</h2>
					<div className='conquistas__content'>
						<div className='conquistas__card'>
							<span className='conquistas__card-icon'>
								<i className='fa-solid fa-bullhorn' />
							</span>
							<div className='conquistas__card-number' data-target='200'>
								200
							</div>
							<h5 className='conquistas__card-title'>Denúncias Feitas</h5>
						</div>
						<div className='conquistas__card'>
							<span className='conquistas__card-icon'>
								<i className='fa-solid fa-users' />
							</span>
							<div className='conquistas__card-number' data-target='20'>
								20
							</div>
							<h5 className='conquistas__card-title'>Usuários</h5>
						</div>
						<div className='conquistas__card'>
							<span className='conquistas__card-icon'>
								<i className='fa-solid fa-city' />
							</span>
							<div className='conquistas__card-number' data-target='150'>
								150
							</div>
							<h5 className='conquistas__card-title'>Cidades Alcançadas</h5>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
