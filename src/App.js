import './App.css';
import { Routes, Route } from 'react-router-dom';
import SeusDireitos from './pages/SeuDireitos/SeusDireitos';
import SobreNos from './pages/SobreNos/SobreNos';
import Homepage from './components/homepage/Homepage';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/seusdireitos' element={<SeusDireitos />} />
				<Route path='/sobrenos' element={<SobreNos />} />
			</Routes>
		</>
	);
}

export default App;
