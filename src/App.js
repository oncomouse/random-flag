import { useState } from 'react';
import Flag from './components/Flag';
import './App.css';

const App = () => {
	const [count, updateCount] = useState(0);
	return (
		<div className="App">
			<Flag reRender={count}/>
			<div className="controls">
				<button onClick={updateCount}>New Flag</button>
			</div>
		</div>
	);
}

export default App;
