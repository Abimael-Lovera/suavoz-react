import { Routes, Route } from "react-router-dom";
import SeusDireitos from "./pages/SeuDireitos/SeusDireitos";
import SobreNos from "./pages/SobreNos/SobreNos";
import Homepage from "./pages/homepage/Homepage";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/direitos' element={<SeusDireitos />} />
				<Route path='/sobre' element={<SobreNos />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
