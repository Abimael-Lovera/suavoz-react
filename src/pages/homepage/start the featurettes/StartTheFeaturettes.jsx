import React from 'react';
import '../Homepage.css';
import '../../../Layout.css';
import img1Graficos from '../../../assets/grafico1StartTheFeaturettes.png';
import img2Graficos from '../../../assets/grafico2StartTheFeaturettes.png';
import GrapZone from '../../../components/Graficos/GrapZone';
import GrapAge from '../../../components/Graficos/GrapAge';

export default function StartTheFeaturettes() {
	return (
		<>
			<section className='features__container'>
				<div className='container'>
					<h3 className='features__title title'>Estatísticas das Denúncias</h3>
					<div className='features__content'>
						<article className='features__article'>
							<h4 className='features__article-title order-lg-0 order-1'>
								Dados das denúncia baseadas em Regiões.
							</h4>
							{/* <img
								src={img1Graficos}
								alt='evolução das taxas de homicios de negros'
								className='features__article-img order-lg-1 order-0'
							/> */}
							<GrapZone />
						</article>
						<article className='features__article'>
							{/* <img
								src={img2Graficos}
								alt='evolução das taxas de homicios de negros'
								className='features__article-img'
							/> */}
							<GrapAge />

							<h4 className='features__article-title'>
								Dados das denuncias sobre a faixa etária
							</h4>
						</article>
					</div>
				</div>
			</section>
		</>
	);
}
