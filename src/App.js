import { useState } from 'react';
import Flag from './components/Flag';

const App = () => {
	const [count, updateCount] = useState(0);
	return (
		<div className="App">
			<Flag reRender={count}/>
			<button onClick={updateCount}>New Flag</button>
		</div>
	);
}

export default App;
