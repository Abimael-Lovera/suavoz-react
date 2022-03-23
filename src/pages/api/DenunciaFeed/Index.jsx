import styles from './Index.module.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Api from '../../../services/Api';

export default function DenunciaFeed() {
	const [denuncias, setDenuncias] = useState([]);

	useEffect(() => {
		Api.get('/report')
			.then(res => {
				console.log('Get All deu certo', res.data);
				setDenuncias(res.data);
			})
			.catch(err => {
				console.log('Get All ', err);
			});
	}, []);

	return (
		<div className={styles.Age}>
			<div className='container '>
				<h1 className={styles.titulo}>Denúncias </h1>
				<br />
				<Link to='/' className={styles.btn}>
					Voltar
				</Link>
				<div className='container'>
					<section className={styles.cards}>
						{denuncias.map(res => {
							return (
								<article className={styles.card} key={res.id}>
									<div className={styles.cardContent}>
										{/* <span>Genero:{res.genre.name}</span>s */}
										<span>Faixa etária: {res.ageGroup.ages}</span>
										{/* <span>Tipo de Violencia: {res.violenceType.type}</span> */}
										<span>Região:{res.zone.name}</span>
									</div>
									<span>Descrição:{res.description}</span>
								</article>
							);
						})}
					</section>
				</div>
			</div>
		</div>
	);
}
