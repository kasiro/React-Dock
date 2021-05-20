import React from 'react';
import Dock from './comp/Dock';
import './App.css';

function PanelMenu(){
	return (
		<div className="PanelMenu hide">
			<div className="userName">Kasiro</div>
			{/* <div className="buttons">
				<div className="exit"></div>
				<div className="sleep"></div>
				<div className="restart"></div>
				<div className="lock"></div>
			</div> */}
			{/* <input type="text" className="search"/> */}
			<div className="applist">
				<div className="el"></div>
			</div>
		</div>
	);
}

let App = () => {
	return (
		<div className="App">
			<div className="Container">
				<div className="DockContainer">
					<PanelMenu/>
					<Dock tag=''/>
				</div>
				{/* <Dock tag='Vertical'/> */}
				{/* <Dock tag='Modern'/> */}
			</div>
		</div>
	)
};

export default App;
