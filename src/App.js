import { Routes, Route } from "react-router-dom";
import SeusDireitos from "./pages/SeuDireitos/SeusDireitos";
import SobreNos from "./pages/SobreNos/SobreNos";
import Homepage from "./pages/homepage/Homepage";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/footer/Footer";
import Age from "./pages/api/ageGroup/Age";
import AgeEdit from "./pages/api/ageGroup/Edit/AgeEdit";
import AgePost from "./pages/api/ageGroup/Post/AgePost";
import Dashboard from "./pages/Dashboard/Index";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/direitos' element={<SeusDireitos />} />
				<Route path='/sobre' element={<SobreNos />} />
				<Route path='/api/age' element={<Age />} />
				<Route path='/api/age/post' element={<AgePost />} />
				<Route path='/api/age/edit/:id' element={<AgeEdit />} />
				<Route path='/dashboard' element={<Dashboard />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
