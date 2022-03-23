import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';
import _ from 'lodash';
import styles from './Grafico.module.css';

import Api from '../../services/Api';

export const options = {
	is3D: true,
	backgroundColor: 'transparent',
};

function GrapAge() {
	const [ageGroup, set_ageGroup] = useState([]);

	useEffect(() => {
		Api.get('/report')
			.then(res => {
				const data_ageGroup = res.data;
				set_ageGroup(loadData_ageGroup(data_ageGroup));
			})
			.catch(err => console.log(err));
	}, []);

	const loadData_ageGroup = data => {
		const values = _.groupBy(data, value => value.ageGroup.ages);
		console.log('values', values);
		const result = _.map(values, (value, key) => [
			key,
			_.lastIndexOf(values[key]),
		]);
		console.log('result', result);
		return [['Faixa Etária', 'Quantidade'], ...result];
	};

	return (
		<div className={styles.grafico}>
			<div className='d-flex justify-content-center'>
				<h3 className={styles.titulo}>Faixa Etária</h3>
			</div>
			<Chart
				chartType='PieChart'
				data={ageGroup}
				className={styles.chart}
				options={options}
			/>
		</div>
	);
}

export default GrapAge;
