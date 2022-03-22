import './App.css';
import React from 'react';
import SeusDireitos from './SeuDireitos/SeusDireitos';
import SobreNos from './SobreNos/SobreNos';
import Homepage from './components/homepage/Homepage';

function App() {
	return (
		<div>
			<Homepage />
			{/* <SobreNos /> */}
			<SeusDireitos />
		</div>
	);
}

export default App;
