import '../../components/Layout.css';
import suavozbege from '../../assets/suaVoz-bege.png';

export default function Footer() {
	return (
		<>
			<footer class='footer__container'>
				<div class='footer__content container'>
					<div class='footer__header'>
						<img src={suavozbege} alt='' class='footer__logo' />
						<p class='footer__paragraph'>&copy; 2022 Company, Inc</p>
					</div>
					<ul class='footer__body'>
						<li class='footer__item'>
							<a href='#.' class='footer__links'>
								<i class='fa-brands fa-instagram social__media'></i>
							</a>
						</li>
						<li class='footer__item'>
							<a href='#.' class='footer__links'>
								<i class='fa-brands fa-facebook social__media'></i>
							</a>
						</li>
						<li class='footer__item'>
							<a href='#.' class='footer__links'>
								<i class='fa-brands fa-twitter social__media'></i>
							</a>
						</li>
						<li class='footer__item'>
							<a href='#.' class='footer__links'>
								<i class='fa-brands fa-youtube social__media'></i>
							</a>
						</li>
						<li class='footer__item'>
							<a href='#.' class='footer__links'>
								<i class='fa-brands fa-twitch social__media'></i>
							</a>
						</li>
					</ul>
				</div>
			</footer>
		</>
	);
}
