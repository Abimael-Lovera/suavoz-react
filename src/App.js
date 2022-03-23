import { Routes, Route } from 'react-router-dom';
import SeusDireitos from './pages/SeuDireitos/SeusDireitos';
import SobreNos from './pages/SobreNos/SobreNos';
import Homepage from './pages/homepage/Homepage';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/footer/Footer';
import Age from './pages/api/ageGroup/Age';
import AgeEdit from './pages/api/ageGroup/Edit/AgeEdit';
import AgePost from './pages/api/ageGroup/Post/AgePost';
import Dashboard from './pages/Dashboard/Index';
import Denuncia from './pages/api/Denuncia/Index';
import DenunciaPost from './pages/api/Denuncia/Post/DenunciaPost';
import DenunciaEdit from './pages/api/Denuncia/Edit/DenunciaEdit';
import DenunciaFeed from './pages/api/DenunciaFeed/Index';

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
				<Route path='/perfil' element={<Dashboard />} />
				<Route path='/perfil/denuncia' element={<Denuncia />} />
				<Route path='/perfil/denuncia/post' element={<DenunciaPost />} />
				<Route path='/pefil/denuncia/edit/:id' element={<DenunciaEdit />} />
				<Route path='/feed/denuncia' element={<DenunciaFeed />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
