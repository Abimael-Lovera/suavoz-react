import axios from "axios";

const api = axios.create({
	baseURL: "https://api-suavoz.herokuapp.com",
});

export default api;
