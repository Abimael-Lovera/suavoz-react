import styles from "./AgeEdit.module.css";
import Api from "../../../../services/Api";

import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";

const validationForm = yup.object().shape({
	ages: yup.string().required("Digite de novo").max(5, "Digite a Idade 25-30"),
});

export default function AgeEdit() {
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(validationForm),
	});

	const { id } = useParams();

	useEffect(() => {
		Api.get(`/ageGroup/${id}`).then(res => {
			reset(res.data);
		});
	}, []);

	const addAge = dados => {
		console.log(dados);
		Api.put("/ageGroup", dados)
			.then(() => {
				console.log("Deu Tudo Certo");
				navigate("/api/age");
			})
			.catch(() => {
				console.log("Deu Errado");
			});
	};

	return (
		<>
			<div className={styles.post}>
				<div className={styles.container}>
					<header className={styles.titulo}>
						<h1 class>Editar Faixa Etária</h1>
					</header>
					<form className={styles.form} onSubmit={handleSubmit(addAge)}>
						<div className={styles.fields}>
							<label htmlFor='ages'>Idade</label>
							<input
								type='text'
								id='ages'
								name='ages'
								{...register("ages")}
								placeholder='Digite Idade'
								className={styles.input}
							/>
							<p className={styles.error}>{errors.ages?.message}</p>
						</div>
						<button className={styles.btn}>
							<i className='fa-solid fa-paper-plane'></i> Enviar
						</button>
					</form>
				</div>
			</div>
		</>
	);
}
