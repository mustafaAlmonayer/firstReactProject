import { useState } from 'react';
import CounterButton from './CounterButton';
import ResetButton from './ResetButton';

import './Counter.css';

function Counter() {
	const [ count, setCount ] = useState(0);

	function incrementCounterParentFunction(by) {
		setCount(count + by);
	}

	function decrementCounterParentFunction(by) {
		setCount(count - by);
	}

	function reset() {
		setCount(0);
	}

	return (
		<div>
			<span className="totalCount">{count}</span>
			<div className="buttons">
				<CounterButton by={1} methods={[ incrementCounterParentFunction, decrementCounterParentFunction ]} />
				<CounterButton by={2} methods={[ incrementCounterParentFunction, decrementCounterParentFunction ]} />
				<CounterButton by={5} methods={[ incrementCounterParentFunction, decrementCounterParentFunction ]} />
				<ResetButton method={reset} />
			</div>
		</div>
	);
}

export default Counter;
