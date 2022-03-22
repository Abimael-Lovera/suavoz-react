import styles from "./Age.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Api from "../../../services/Api";

export default function Age() {
	const [age, setAge] = useState([]);

	useEffect(() => {
		Api.get("/ageGroup")
			.then(res => {
				console.log("Get All deu certo", res.data);
				setAge(res.data);
			})
			.catch(err => {
				console.log("Get All ", err);
			});
	}, []);

	function deleteAge(id) {
		console.log(id);
		Api.delete(`/ageGroup/${id}`, {});
		setAge(age.filter(age => age.id !== id));
	}

	return (
		<div className='container Age'>
			<h1 className={styles.titulo}>Faixa Etaria</h1>
			<section className={styles.cards}>
				{age.map(res => (
					<article className={styles.card} key={res.id}>
						<span>Id: {res.id}</span>
						<span>Idade:{res.ages}</span>
						<Link
							className={styles.btn_editar}
							to={{ pathname: `/api/age/edit/${res.id}` }}
						>
							Editar
						</Link>

						<button
							className={styles.btn_excluir}
							onClick={() => deleteAge(res.id)}
						>
							Excluir
						</button>
					</article>
				))}
			</section>
		</div>
	);
}
