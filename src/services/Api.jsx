import axios from "axios";

const Api = axios.create({
	baseURL: "https://api-suavoz.herokuapp.com",
});

export default Api;
