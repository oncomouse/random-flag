import { useState } from 'react';
import Flag from '../components/Flag';
import Debug from '../components/Debug';
import 'cutestrap/dist/css/cutestrap.css';
import './App.css';

const DEBUG = true;

const App = () => {
	const [count, updateCount] = useState(0);
	const [debug, updateDebug] = useState({});
	return (
		<div className="wrapper -wide ta-center">
				<Flag reRender={count} debug={debug}/>
				<button onClick={updateCount} class="centered-button new-flag-button">New Flag</button>
			{ DEBUG ? <Debug update={updateDebug} /> : null }
		</div>
	);
}

export default App;
