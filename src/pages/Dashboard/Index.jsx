import { Link } from 'react-router-dom';
import GrapAge from '../../components/Graficos/GrapAge';
import GrapGenre from '../../components/Graficos/GrapGenre';
import GrapViolenceType from '../../components/Graficos/GrapViolenceType';
import GrapZone from '../../components/Graficos/GrapZone';
import styles from './Index.module.css';
import { useAuth0 } from '@auth0/auth0-react';

export default function Dashboard() {
	const { user, isAuthenticated } = useAuth0();

	if (isAuthenticated) {
		return (
			<div className={styles.conteudo}>
				<div className='container'>
					<h1 className={styles.titulo}>Dashboard</h1>
					<br />
					<div className={styles.buttons}>
						<Link to='/perfil/denuncia' className={styles.btn}>
							Veja suas denúncias
						</Link>

						<Link to='/perfil/denuncia/post' className={styles.btn}>
							Faça sua denúncia
						</Link>
					</div>
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
	return (
		<>
			<div className={styles.conteudo}>
				<div className='container'>
					<h1 className={styles.titulo}>Login obrigatório</h1>
				</div>
			</div>
		</>
	);
}
