import { useState } from 'react'
import './App.css';

function App() {
	const [count, setCount] = useState(0);
	return (
		<div className="App">
			<h1>Counter: <span>{count}</span></h1>
			<button onClick={() => setCount(count + 1)}>+</button>
			<button onClick={() => setCount(count - 1)}>-</button>
			<button onClick={() => setCount(count * 0)}>Reset</button>
		</div>
	);
}

export default App;
