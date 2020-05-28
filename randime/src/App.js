import React from 'react';
import './App.css';
import './Components/css/bootstrap.min.css';
import './Components/css/style.css';
import './Components/css/fonts.css';
import SectionHeader from './Components/SectionHeader.js'
import SectionMainBody from './Components/SectionMainBody';

function App() {
	return (
		<React.Fragment>
			<SectionHeader></SectionHeader>
			<SectionMainBody></SectionMainBody>
		</React.Fragment>
	);
}

export default App;
