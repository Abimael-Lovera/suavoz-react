import styles from './DenunciaEdit.module.css';

import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Api from '../../../../services/Api';
import { useForm } from 'react-hook-form';

export default function DenunciaEdit() {
	const { id } = useParams();
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({});

	// Faixa étaria

	const [faixa, setFaixa] = useState([]);
	useEffect(() => {
		Api.get('/ageGroup')
			.then(res => {
				setFaixa(res.data);
			})
			.catch(error => console.log(error));
	}, []);

	// Genero

	const [genero, setGenero] = useState([]);
	useEffect(() => {
		Api.get('/genre')
			.then(res => {
				setGenero(res.data);
			})
			.catch(error => console.log(error));
	}, []);

	useEffect(() => {
		setGenero(genero.filter(res => res.type !== null));
	}, []);

	// Tipo de Violencia

	const [violenceType, setViolenceType] = useState([]);
	useEffect(() => {
		Api.get('/violenceType')
			.then(res => {
				setViolenceType(res.data);
			})
			.catch(error => console.log(error));
	}, []);

	useEffect(() => {
		setViolenceType(violenceType.filter(res => res.type !== null));
	}, []);

	// Região
	const [zone, setZone] = useState([]);
	useEffect(() => {
		Api.get('/zone')
			.then(res => {
				setZone(res.data);
			})
			.catch(error => console.log(error));
	}, []);

	useEffect(() => {
		setZone(zone.filter(res => res.name !== null));
	}, []);

	useEffect(() => {
		Api.get(`/report/${id}`).then(res => {
			console.log(res.data.email);
			console.log(res.data.ageGroup.id);
			console.log(res.data.genre.id);
			console.log(res.data.violenceType.id);
			console.log(res.data.zone.id);
			console.log(res.data.description);

			const response = {
				email: res.data.email,
				ageGroup: res.data.ageGroup.id,
				genre: res.data.genre.id,
				violenceType: res.data.violenceType.id,
				zone: res.data.zone.id,
				description: res.data.description,
			};
			reset(response);
		});
	}, []);

	const addDenuncia = dados => {
		console.log(dados);
		console.log(dados.email);
		const test = {
			description: dados.description,
			email: dados.email,
			ageGroup: {
				id: dados.ageGroup,
			},
			genre: {
				id: dados.genre,
			},
			violenceType: {
				id: dados.violenceType,
			},
			zone: {
				id: dados.zone,
			},
		};
		console.log(test);
		Api.put(`/report/${id}`, test)
			.then(() => {
				console.log('Deu Tudo Certo');
				navigate('/perfil/denuncia');
			})
			.catch(() => {
				console.log('Deu Errado');
			});
	};
	return (
		<div className={styles.postContainer}>
			<div className={styles.container}>
				<header className={styles.titulo}>
					<h1 class>Criar Faixa Etária</h1>
				</header>
				<Link to='/perfil/denuncia' className={styles.btn}>
					voltar
				</Link>

				<form className={styles.form} onSubmit={handleSubmit(addDenuncia)}>
					<div className={styles.fields}>
						<strong>Email</strong>
						<label htmlFor='email'></label>
						<input
							type='text'
							id='email'
							name='email'
							{...register('email')}
							placeholder='Digite email'
							className={styles.input}
							required
						/>
					</div>
					<div className={styles.fields}>
						<label htmlFor='ageGroup'>
							{' '}
							<strong>Faixa Etária</strong>
						</label>
						<select
							type='text'
							id='ageGroup'
							name='ageGroup'
							{...register('ageGroup')}
							placeholder='Digite genre'
							className={styles.input}
							required
						>
							{faixa.map(res => {
								if (res.ages !== null) {
									return (
										<option value={res.id} key={res.id}>
											{res.ages}
										</option>
									);
								}
								return console.log('');
							})}
						</select>
					</div>
					<div className={styles.fields}>
						<label htmlFor='genre'>
							{' '}
							<strong>Gênero</strong>
						</label>
						<select
							type='text'
							id='genre'
							name='genre'
							{...register('genre')}
							placeholder='Digite genre'
							className={styles.input}
							required
						>
							{genero.map(res => {
								if (res.name !== null) {
									return (
										<option value={res.id} key={res.id}>
											{res.name}
										</option>
									);
								}
								return console.log('');
							})}
						</select>
						{/* <p className={styles.error}>{errors.genre?.message}</p> */}
					</div>
					<div className={styles.fields}>
						<label htmlFor='violenceType'>
							{' '}
							<strong>Tipo de violência</strong>
						</label>
						<select
							type='text'
							id='violenceType'
							name='violenceType'
							{...register('violenceType')}
							placeholder='Digite violenceType'
							className={styles.input}
							required
						>
							{violenceType.map(res => {
								if (res.type !== null) {
									return (
										<option value={res.id} key={res.id}>
											{res.type}
										</option>
									);
								}
								return console.log('');
							})}
						</select>
					</div>
					<div className={styles.fields}>
						<label htmlFor='zone'>
							{' '}
							<strong>Região</strong>
						</label>
						<select
							type='text'
							id='zone'
							name='zone'
							{...register('zone')}
							placeholder='Digite zone'
							className={styles.input}
							required
						>
							{zone.map(res => {
								if (res.name !== null) {
									return (
										<option value={res.id} key={res.id}>
											{res.name}
										</option>
									);
								}
								return console.log('');
							})}
						</select>
					</div>
					<div className={styles.fields}>
						<label htmlFor='description'>description</label>
						<textarea
							type='text'
							id='description'
							name='description'
							{...register('description')}
							placeholder='Digite description'
							className={styles.inputArea}
							required
						></textarea>
					</div>
					<button className={styles.btn}>
						<i className='fa-solid fa-paper-plane'></i> Enviar
					</button>
				</form>
			</div>
		</div>
	);
}
