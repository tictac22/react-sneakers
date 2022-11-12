import { useState } from "react"

export const Counter = () => {
	const [counter, setCounter] = useState(0)
	return (
		<div>
			<button onClick={() => setCounter((p) => p + 1)}>increment</button>
			<p>Counter: {counter}</p>
			<button onClick={() => setCounter((p) => p - 1)}>decrement</button>
		</div>
	)
}
