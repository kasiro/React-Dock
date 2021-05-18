import React from 'react';
import Dock from './comp/Dock';
import './App.css';

let App = () => {
	return (
		<div className="App">
			<div className="Container">
				<Dock tag=''/>
				{/* <Dock tag='Modern'/> */}
			</div>
		</div>
	)
};

export default App;
