import { useState } from 'react';
import Flag from '../components/Flag';
import Debug from '../components/Debug';
import './App.css';

const DEBUG = true;

const App = () => {
	const [count, updateCount] = useState(0);
	const [debug, updateDebug] = useState({});
	return (
		<div className="App">
			<Flag reRender={count} debug={debug}/>
			<div className="controls">
				<button onClick={updateCount}>New Flag</button>
			</div>
			{ DEBUG ? <Debug debug={debug} update={updateDebug} /> : null }
		</div>
	);
}

export default App;
