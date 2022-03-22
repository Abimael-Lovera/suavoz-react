import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import _ from "lodash";
import styles from "./Grafico.module.css";
import Api from "../../services/Api";

export const options = {
	is3D: true,
	backgroundColor: "transparent",
};

function GrapZone() {
	const [zone, set_zone] = useState([]);

	useEffect(() => {
		Api.get("/report")
			.then(res => {
				const data_zone = res.data;
				set_zone(loadData_zone(data_zone));
			})
			.catch(err => console.log(err));
	}, []);

	const loadData_zone = data => {
		const values = _.groupBy(data, value => value.zone.name);
		console.log("values", values);
		const result = _.map(values, (value, key) => [
			key,
			_.lastIndexOf(values[key]),
		]);
		console.log("result", result);
		return [["Gênero", "Quantidade"], ...result];
	};

	return (
		<div className={styles.grafico}>
			<div className='d-flex justify-content-center'>
				<h3 className={styles.titulo}>Região</h3>
			</div>
			<Chart
				chartType='PieChart'
				data={zone}
				className={styles.chart}
				options={options}
			/>
		</div>
	);
}

export default GrapZone;
