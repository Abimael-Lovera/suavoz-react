import React from "react";
import "../Homepage.css";
import "../../../Layout.css";
import img1Graficos from "../../../assets/grafico1StartTheFeaturettes.png";
import img2Graficos from "../../../assets/grafico2StartTheFeaturettes.png";

export default function StartTheFeaturettes() {
	return (
		<>
			<section className='features__container'>
				<div className='container'>
					<h3 className='features__title title'>
						Estatísticas da população negra no Brasil
					</h3>
					<div className='features__content'>
						<article className='features__article'>
							<h4 className='features__article-title order-lg-0 order-1'>
								No Brasil, de cada sete indivíduos assassinados cinco são
								negros.
							</h4>
							<img
								src={img1Graficos}
								alt='evolução das taxas de homicios de negros'
								className='features__article-img order-lg-1 order-0'
							/>
						</article>
						<article className='features__article'>
							<img
								src={img2Graficos}
								alt='evolução das taxas de homicios de negros'
								className='features__article-img'
							/>
							<h4 className='features__article-title'>
								Diferenças de letalidade contra os afrodescendentes são mais
								dilatadas no período da juventude (entre 15 e 29 anos).
							</h4>
						</article>
					</div>
				</div>
			</section>
		</>
	);
}
