import React from "react";
import "../Homepage.css";
import "../../../Layout.css";
import logoCrisBuffet from "../../../assets/parceiros/Logo_Marca_Cris_Buffet-removebg-preview.png";
import logoCufa from "../../../assets/parceiros/LOGO-CUFA-SEM-ASSINATURA-removebg-preview.png";
import logoRecode from "../../../assets/parceiros/logo-recode-azul.png";
import logoSaoPaulo from "../../../assets/parceiros/cidadeSP.png";
import logoRioDeJaneiro from "../../../assets/parceiros/prefeiturarj .png";

export default function Parceiros() {
	return (
		<>
			<section className='parceiros__container'>
				<div className='container'>
					<div className='parceiros__header'>
						<h3 className='title'>Nossos Parceiros</h3>
						<h6 className='parceiros__paragraph'>
							Conheça a nossa rede de apoiadores, que nos ajudam a fazer a
							diferença!
						</h6>
					</div>

					<ul className='parceiros__body'>
						<li className='parceiros_items'>
							<a
								href='https://www.cufa.org.br/'
								target='_blank'
								rel='noopener noreferrer'
								className='parceiros__links'
							>
								<img
									src={logoCufa}
									alt='microsoft'
									className='parceiros__img'
								/>
							</a>
						</li>
						<li className='parceiros_items'>
							<a
								href='https://www.crisbuffeteventos.net/'
								target='_blank'
								rel='noopener noreferrer'
								className='parceiros__links'
							>
								{" "}
								<img
									src={logoCrisBuffet}
									alt='rede bahia'
									className='parceiros__img'
								/>{" "}
							</a>
						</li>
						<li className='parceiros_items'>
							<a
								href='https://www.recode.org.br'
								target='_blank'
								rel='noopener noreferrer'
								className='parceiros__links'
							>
								<img src={logoRecode} alt='recode' className='parceiros__img' />
							</a>
						</li>
						<li className='parceiros_items'>
							<a
								href='https://www.prefeitura.sp.gov.br/cidade/secretarias/fazenda/'
								target='_blank'
								rel='noopener noreferrer'
								className='parceiros__links'
							>
								<img src={logoSaoPaulo} alt='sp' className='parceiros__img' />
							</a>
						</li>
						<li className='parceiros_items'>
							<a
								href='https://prefeitura.rio/'
								target='_blank'
								rel='noopener noreferrer'
								className='parceiros__links'
							>
								<img
									src={logoRioDeJaneiro}
									alt='prefeiturarj'
									className='parceiros__img'
								/>
							</a>
						</li>
					</ul>
				</div>
			</section>
		</>
	);
}
