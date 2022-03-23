import styles from "./DenunciaPost.module.css";

import Api from "../../../../services/Api";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useEffect, useState } from "react";

const validationForm = yup.object().shape({
	ages: yup.string().required("Digite de novo").max(5, "Digite a Idade 25-30"),
});

export default function DenunciaPost() {
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validationForm),
	});

	const addAge = dados => {
		console.log(dados);
		Api.post("/ageGroup", dados)
			.then(() => {
				console.log("Deu Tudo Certo");
				navigate("/api/age");
			})
			.catch(() => {
				console.log("Deu Errado");
			});
	};
	const [zone, setZone] = useState([]);
	useEffect(() => {
		Api.get("/zone")
			.then(res => {
				setZone(res.data);
				console.log(res.data);
			})
			.catch(error => console.log(error));
	}, []);

	useEffect(() => {
		setZone(zone.filter(res => res.name !== null));
	}, []);

	return (
		<div className={styles.post}>
			<div className={styles.container}>
				<header className={styles.titulo}>
					<h1 class>Criar Faixa Etária</h1>
				</header>
				<form className={styles.form} onSubmit={handleSubmit(addAge)}>
					<div className={styles.fields}>
						<label htmlFor='description'>description</label>
						<input
							type='text'
							id='description'
							name='description'
							{...register("description")}
							placeholder='Digite description'
							className={styles.input}
						/>
						<p className={styles.error}>{errors.description?.message}</p>
					</div>
					<div className={styles.fields}>
						<label htmlFor='email'>email</label>
						<input
							type='text'
							id='email'
							name='email'
							{...register("email")}
							placeholder='Digite email'
							className={styles.input}
						/>
						<p className={styles.error}>{errors.email?.message}</p>
					</div>
					<div className={styles.fields}>
						<label htmlFor='genre'>genre</label>
						<input
							type='text'
							id='genre'
							name='genre'
							{...register("genre")}
							placeholder='Digite genre'
							className={styles.input}
						/>
						<p className={styles.error}>{errors.genre?.message}</p>
					</div>
					<div className={styles.fields}>
						<label htmlFor='violenceType'>violenceType</label>
						<input
							type='text'
							id='violenceType'
							name='violenceType'
							{...register("violenceType")}
							placeholder='Digite violenceType'
							className={styles.input}
						/>
						<p className={styles.error}>{errors.violenceType?.message}</p>
					</div>
					<div className={styles.fields}>
						<label htmlFor='zone'>zone</label>
						<select
							type='text'
							id='zone'
							name='zone'
							{...register("zone")}
							placeholder='Digite zone'
							className={styles.input}
						>
							{zone.map(res => {
								if (res.name !== null) {
									return <option value={res.id}>{res.name}</option>;
								}
							})}
						</select>
						<p className={styles.error}>{errors.zone?.message}</p>
					</div>
					<button className={styles.btn}>
						<i className='fa-solid fa-paper-plane'></i> Enviar
					</button>
				</form>
			</div>
		</div>
	);
}
