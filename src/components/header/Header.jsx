import React from 'react';
import logoHeader from '../../assets/logoSuaVozHeader.png';
import '../../components/Layout.css';

export default function Header() {
	return (
		<>
			<header>
				<nav className='navbar navbar-expand-xl navbar-dark fixed-top navbar__container'>
					<div className='container'>
						<a
							className='navbar-brand'
							asp-controller='Home'
							asp-action='Index'
						>
							<img src={logoHeader} alt='' />
						</a>
						<button
							className='navbar-toggler'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#navbarCollapse'
							aria-controls='navbarCollapse'
							aria-expanded='false'
							aria-label='Toggle navigation'
						>
							<span className='navbar-toggler-icon'></span>
						</button>
						<div className='collapse navbar-collapse' id='navbarCollapse'>
							<div className='mx-auto'></div>
							<ul className='navbar-nav'>
								<li className='nav-item'>
									<a
										className='nav-link'
										asp-controller='Home'
										asp-action='Index'
									>
										{' '}
										<i className=' fa-solid fa-house'></i> Home{' '}
									</a>
								</li>
								<li className='nav-item'>
									<a
										className='nav-link'
										asp-controller='Home'
										asp-action='About'
									>
										{' '}
										<i className='fa-solid fa-briefcase'></i> Sobre nós{' '}
									</a>
								</li>
								<li className='nav-item'>
									<a
										className='nav-link'
										asp-controller='Home'
										asp-action='Rights'
									>
										{' '}
										<i className='fa-solid fa-book-open-reader'></i> Seus
										Direitos{' '}
									</a>
								</li>
								<partial name='_LoginPartial.html' />
							</ul>
						</div>
					</div>
				</nav>
			</header>
		</>
	);
}
