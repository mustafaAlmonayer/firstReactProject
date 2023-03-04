import { PropTypes } from 'prop-types';

function CounterButton({ by, methods }) {
	return (
		<div className="Counter">
			<div>
				<button className="counterButton" onClick={() => methods[0](by)}>
					+{by}
				</button>
				<button className="counterButton" onClick={() => methods[1](by)}>
					-{by}
				</button>
			</div>
		</div>
	);
}

CounterButton.prototype = {
	by: PropTypes.number
};

export default CounterButton;
