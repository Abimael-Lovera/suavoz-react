import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import _ from "lodash";
import styles from "./Grafico.module.css";

import Api from "../../services/Api";

export const options = {
	is3D: true,
	backgroundColor: "transparent",
};

function GrapViolenceType() {
	const [violenceType, set_violenceType] = useState([]);

	useEffect(() => {
		Api.get("/report")
			.then(res => {
				const data_violenceType = res.data;
				set_violenceType(loadData_violenceType(data_violenceType));
			})
			.catch(err => console.log(err));
	}, []);

	const loadData_violenceType = data => {
		const values = _.groupBy(data, value => value.violenceType.type);
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
				<h3 className={styles.titulo}>Tipo de Violencia</h3>
			</div>
			<Chart
				chartType='PieChart'
				data={violenceType}
				options={options}
				className={styles.chart}
			/>
		</div>
	);
}

export default GrapViolenceType;
