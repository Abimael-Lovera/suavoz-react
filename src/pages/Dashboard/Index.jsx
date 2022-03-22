import GrapAge from "../../components/Graficos/GrapAge";
import GrapGenre from "../../components/Graficos/GrapGenre";
import GrapViolenceType from "../../components/Graficos/GrapViolenceType";
import GrapZone from "../../components/Graficos/GrapZone";
import styles from "./Index.module.css";

export default function Dashboard() {
	return (
		<div className={styles.conteudo}>
			<div className='container'>
				<h1 className={styles.titulo}>Dashboard</h1>
				<h3 className={styles.titulo}>Gráficos</h3>
				<div className={styles.container}>
					<div className={styles.containerGrafico}>
						<GrapAge />
						<GrapGenre />

						<GrapViolenceType />
						<GrapZone />
					</div>
				</div>
			</div>
		</div>
	);
}
