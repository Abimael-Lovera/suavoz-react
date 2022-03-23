import logoHeader from '../../assets/logoSuaVozHeader.png';
import '../../Layout.css';

import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

export default function Header() {
	const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
	return (
		<>
			<header>
				<nav className='navbar navbar-expand-xl navbar-dark fixed-top navbar__container'>
					<div className='container'>
						<Link to='' className='navbar-brand'>
							<img src={logoHeader} alt='logo sua voz pessoa com altafalante' />
						</Link>
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
									<Link to='/' className='nav-link'>
										<i className=' fa-solid fa-house'></i> Home
									</Link>
								</li>
								<li className='nav-item'>
									<Link to='/sobre' className='nav-link'>
										<i className='fa-solid fa-briefcase'></i> Sobre nós
									</Link>
								</li>
								<li className='nav-item'>
									<Link to='direitos' className='nav-link'>
										<i className='fa-solid fa-book-open-reader'></i> Seus
										Direitos
									</Link>
								</li>
								<li className='nav-item'>
									<Link className='nav-link' to='/feed/denuncia'>
										<i className='fas fa-book-open-reader'></i> Denuncias
									</Link>
								</li>
								{!isAuthenticated ? (
									<li className='nav-item'>
										<Link
											className='nav-link'
											to='/perfil'
											onClick={() => loginWithRedirect()}
										>
											<i className='fa-solid fa-right-to-bracket'></i> Entrar
										</Link>
									</li>
								) : (
									<>
										<li className='nav-item'>
											<Link className='nav-link' to='/perfil'>
												<i class='fa-solid fa-image-user'></i>{' '}
												{user?.name || user?.email}
											</Link>
										</li>
										<li className='nav-item'>
											<Link
												className='nav-link'
												to='/'
												onClick={() => logout()}
											>
												<i className='fa-solid fa-right-from-bracket'></i> Sair
											</Link>
										</li>
									</>
								)}
							</ul>
						</div>
					</div>
				</nav>
			</header>
		</>
	);
}
