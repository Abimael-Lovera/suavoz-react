import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import _ from "lodash";
import styles from "./Grafico.module.css";

import Api from "../../services/Api";

export const options = {
	is3D: true,
	backgroundColor: "transparent",
};

function GrapGenre() {
	const [genre, set_genre] = useState([]);

	useEffect(() => {
		Api.get("/report")
			.then(res => {
				const data_genre = res.data;
				set_genre(loadData_genre(data_genre));
			})
			.catch(err => console.log(err));
	}, []);

	const loadData_genre = data => {
		const values = _.groupBy(data, value => value.genre.name);
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
				<h3 className={styles.titulo}>Gênero</h3>
			</div>
			<Chart
				chartType='PieChart'
				data={genre}
				className={styles.chart}
				options={options}
			/>
		</div>
	);
}

export default GrapGenre;
