import styles from './Index.module.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Api from '../../../services/Api';

export default function Denuncia() {
	const { user, isAuthenticated } = useAuth0();

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

	function deleteDenuncia(id) {
		console.log(id);
		Api.delete(`/ageGroup/${id}`, {});
		setDenuncias(denuncias.filter(res => res.id !== id));
	}

	if (isAuthenticated) {
		return (
			<div className={styles.Age}>
				<div className='container '>
					<h1 className={styles.titulo}>Vejas suas denúncias</h1>
					<br />
					<Link to='/perfil' className={styles.btn}>
						Voltar
					</Link>
					<div className='container'>
						<section className={styles.cards}>
							{denuncias.map(res => {
								if (user.email === res.email) {
									return (
										<div className={styles.containerCard}>
											<p>
												<strong>Descrição:</strong>
												{res.description}
											</p>

											<article className={styles.card} key={res.id}>
												<div className={styles.cardContent}>
													<div className={styles.cardDiv}>
														<span>
															<strong>Genero: </strong>
															{res.genre.name}
														</span>
														<span>
															<strong>Faixa etária:</strong>
															{res.ageGroup.ages}
														</span>
													</div>
													<div className={styles.cardDiv}>
														<span>
															<strong>Tipo de Violencia:</strong>
															{res.violenceType.type}
														</span>
														<span>
															<strong>Região:</strong>
															{res.zone.name}
														</span>
													</div>
												</div>
												<div className={styles.btns}>
													<Link
														className={styles.btn_editar}
														to={{ pathname: `/pefil/denuncia/edit/${res.id}` }}
													>
														Editar
													</Link>
													<button
														className={styles.btn_excluir}
														onClick={() => deleteDenuncia(res.id)}
													>
														Excluir
													</button>
												</div>
											</article>
										</div>
									);
								}
								return console.log('');
							})}
						</section>
					</div>
				</div>
			</div>
		);
	}

	return (
		<>
			<div className={styles.Age}>
				<div className='container '>
					<h1 className={styles.titulo}>login obrigatório </h1>
				</div>
			</div>
		</>
	);
}
